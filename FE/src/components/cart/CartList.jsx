import { useEffect, useMemo, useState } from "react";
import QuantitySelector from "../QuantitySelector";
import { formatPrice } from "../../utils/formatPrice";
import { useUpdateCartItem } from "../../hooks/useCart";
import DeleteIcon from "../../assets/icon/delete.svg";
import { useDeleteCartItem } from "../../hooks/useCart";
import { notification } from "antd";
import EmptyImage from "../../assets/empty-image.svg";

function CartList({ items, setItems, onRefresh }) {
  const { mutate: updateCartItem } = useUpdateCartItem();
  const { mutate: deleteCartItem } = useDeleteCartItem();

  const matchesItemId = (item, id) => item.idCartItem === id;
  const [stockWarning, setStockWarning] = useState({});

  const updateQty = (id, nextQty) => {
    setItems((prev) =>
      prev.map((it) =>
        it.idCartItem === id ? { ...it, quantity: nextQty } : it,
      ),
    );

    updateCartItem({
      guestId: localStorage.getItem("guestId"),
      idCartItem: id,
      quantity: nextQty,
    });
  };

  const changeQty = (id, delta, maxStock) => {
    setItems((prev) => {
      return prev.map((it) => {
        if (it.idCartItem !== id) return it;

        const currentQty = Number(it.quantity) || 1;
        const nextQty = currentQty + delta;

        if (nextQty > maxStock) {
          setStockWarning((prev) => ({
            ...prev,
            [id]: true,
          }));
          return it; // stop, jangan update qty
        }

        // kalau valid, hilangkan warning
        setStockWarning((prev) => ({
          ...prev,
          [id]: false,
        }));

        const safeQty = Math.max(1, nextQty);

        updateCartItem({
          guestId: localStorage.getItem("guestId"),
          idCartItem: id,
          quantity: safeQty,
        });

        return {
          ...it,
          quantity: safeQty,
        };
      });
    });
  };

  const formattedItems = useMemo(() => {
    return items.map((item) => {
      const qty = Number(item.quantity ?? item.qty ?? 0);
      const price = Number(item.pricePerItem ?? item.price ?? 0);
      const stock = Number(item.availableStock);

      return {
        id: item.idCartItem,
        name: item.productName ?? item.name ?? "-",
        category: item.category ?? "-",
        image: item.thumbnail || item.image || EmptyImage,
        qty,
        price,
        subtotal: qty * price,
        stock,
        variants: Array.isArray(item.variants)
          ? item.variants.join(", ")
          : (item.size ?? ""),
      };
    });
  }, [items]);

  const handleDelete = async (id) => {
    try {
      await deleteCartItem({
        idCartItem: id,
      });

      await onRefresh?.();

      setTimeout(() => {
        const cartDates = localStorage.getItem("cartDates");

        if (items.length === 1 && cartDates) {
          localStorage.removeItem("cartDates");
        }
      }, 100);

      notification.success({
        message: "Item berhasil dihapus dari keranjang",
        placement: "topRight",
        style: {
          borderRadius: "16px",
          border: "1px solid #74B559",
          background: "#F8FCF6",
        },
      });
    } catch (error) {
      notification.error({
        message: error?.response?.data?.message,
      });
    }
  };

  return (
    <div>
      {formattedItems.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-[2fr_1fr_1fr_0.3fr] items-center py-6 border-b border-[#E5E5E5]"
        >
          <div className="flex gap-6">
            <img
              src={item.image}
              alt={item.name}
              className="w-28 h-28 rounded-xl object-cover"
            />

            <div className="flex flex-col justify-center gap-1">
              <div className="font-semibold">{item.name}</div>
              <div className="text-sm text-[#6F6F6F]">{item.category}</div>
              <div className="text-sm text-[#6F6F6F]">{item.variants}</div>
              <div className="font-semibold pt-1">
                Rp {formatPrice(item.price)}
              </div>
              {item.qty > item.stock && (
                <div className="text-xs text-red-600 font-medium">
                  Stok tersisa {item.stock} item. Kurangi jumlah pesanan atau
                  hapus produk dari keranjang.
                </div>
              )}
            </div>
          </div>

          {/* QTY */}
          <div className="flex flex-col items-center justify-center">
            <QuantitySelector
              qty={item.qty}
              onIncrease={() => changeQty(item.id, 1, item.stock)}
              onDecrease={() => changeQty(item.id, -1, item.stock)}
              disableIncrease={item.stock <= item.qty}
              disableDecrease={item.qty <= 1}
              onChange={(value) => {
                const nextQty = Number(value);
                if (Number.isNaN(nextQty)) return;

                if (nextQty > item.stock) {
                  setStockWarning((prev) => ({
                    ...prev,
                    [item.idCartItem]: true,
                  }));
                  return;
                }

                setStockWarning((prev) => ({
                  ...prev,
                  [item.idCartItem]: false,
                }));

                setItems((current) =>
                  current.map((it) =>
                    matchesItemId(it, item.idCartItem)
                      ? { ...it, quantity: nextQty }
                      : it,
                  ),
                );
              }}
            />

            {stockWarning[item.idCartItem] && (
              <div className="text-xs text-red-600 font-medium mt-2 text-center">
                Stok tersedia = {item.stock}
              </div>
            )}
          </div>

          <div className="text-center font-semibold">
            Rp {formatPrice(item.subtotal)}
          </div>

          <div className="flex justify-center">
            <button onClick={() => handleDelete(item.id)}>
              <img src={DeleteIcon} alt="Delete" className="w-[80%] h-[80%]" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartList;
