import { useEffect, useState } from "react";

import QuantitySelector from "./QuantitySelector";

function CartList({ items }) {
  const [localItems, setLocalItems] = useState(items || []);

  useEffect(() => {
    setLocalItems(items || []);
  }, [items]);

  const MAX_STOCK = 100;

  const matchesItemId = (item, id) => item.id === id || item.idCartItem === id;

  const changeQty = (id, delta, maxStock) => {
    setLocalItems((current) =>
      current.map((it) => {
        if (!matchesItemId(it, id)) return it;

        const currentQty = Number(it.quantity) || 0;
        const nextQty = Math.min(maxStock, Math.max(1, currentQty + delta));
        return {
          ...it,
          quantity: nextQty,
        };
      }),
    );
  };

  return (
    <div>
      {localItems.map((item) => {
        const itemId = item.idCartItem ?? item.id;
        const itemName = item.productName ?? item.name ?? "-";
        const itemCategory = item.category ?? "-";
        const itemImage =
          item.thumbnail ||
          item.image ||
          "/catalog/kursi/kursi-anak/foto-1.jpeg";
        const itemQty = Number(item.quantity ?? item.qty ?? 0);
        const itemPrice = Number(item.pricePerItem ?? item.price ?? 0);
        const itemSubtotal = itemQty * itemPrice;
        const itemAvailableStock = Number(item.availableStock ?? MAX_STOCK);
        const itemVariants = Array.isArray(item.variants)
          ? item.variants.join(", ")
          : (item.size ?? "");

        return (
          <div
            key={itemId}
            className="grid grid-cols-[2fr_1fr_1fr_0.3fr] items-center py-6 border-b border-[#E5E5E5]"
          >
            <div className="flex gap-6">
              <img
                src={itemImage}
                alt={itemName}
                className="w-28 h-28 rounded-xl object-cover"
              />

              <div className="flex flex-col justify-center gap-1">
                <div className="font-semibold">{itemName}</div>
                <div className="text-sm text-[#6F6F6F]">{itemCategory}</div>
                <div className="text-sm text-[#6F6F6F]">{itemVariants}</div>
                <div className="font-semibold pt-1">
                  Rp {new Intl.NumberFormat("id-ID").format(itemPrice)}
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <QuantitySelector
                qty={itemQty}
                onIncrease={() => changeQty(itemId, 1, itemAvailableStock)}
                onDecrease={() => changeQty(itemId, -1, itemAvailableStock)}
                disableIncrease={itemQty >= itemAvailableStock}
                disableDecrease={itemQty <= 1}
                onChange={(value) => {
                  const nextQty = Number(value);

                  if (Number.isNaN(nextQty)) {
                    return;
                  }

                  const boundedQty = Math.min(
                    itemAvailableStock,
                    Math.max(1, nextQty),
                  );

                  setLocalItems((current) =>
                    current.map((it) => {
                      if (!matchesItemId(it, itemId)) {
                        return it;
                      }

                      return {
                        ...it,
                        quantity: boundedQty,
                      };
                    }),
                  );
                }}
              />
            </div>

            <div className="text-center font-semibold">
              Rp {new Intl.NumberFormat("id-ID").format(itemSubtotal)}
            </div>

            <div className="flex justify-center">
              <button type="button">delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartList;
