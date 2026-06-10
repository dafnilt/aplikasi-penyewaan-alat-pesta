import Layout from "../layout/Layout";
import CartList from "../components/cart/CartList";
import { formatDateTime } from "../utils/formatDateTime";
import { formatPrice } from "../utils/formatPrice";
import { useCartDetail } from "../hooks/useCart";
import ProductCard from "../components/catalog/ProductCard";
import CartSummary from "../components/cart/CartSummary";
import { getTotalDays } from "../utils/getTotalDays";
import { useCrossSellRecommendations } from "../hooks/useCrossSellRecommendations";
import { useMemo, useState, useEffect } from "react";

function Cart() {
  const { data: cartData, isLoading, isError } = useCartDetail();
  const { products: crossSellProducts } = useCrossSellRecommendations();

  const cartItems = cartData?.items ?? [];

  const totalDays = getTotalDays(cartData?.rentalStart, cartData?.rentalEnd);

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(cartData?.items ?? []);
  }, [cartData]);

  const { totalProducts, totalPrice } = useMemo(() => {
    return items.reduce(
      (acc, item) => {
        const qty = Number(item.quantity ?? 0);
        const price = Number(item.pricePerItem ?? item.price ?? 0);

        acc.totalProducts += qty;
        acc.totalPrice += qty * price;

        return acc;
      },
      {
        totalProducts: 0,
        totalPrice: 0,
      },
    );
  }, [items]);

  const hasStockIssue = items.some(
    (item) => Number(item.quantity ?? 0) > Number(item.availableStock ?? 0),
  );

  return (
    <Layout>
      <div className="py-4 text-[#2A2A2A]">
        <div className="text-lg font-semibold">Keranjang Anda</div>

        {/* {isLoading && (
          <div className="text-sm text-[#6F6F6F]">Memuat keranjang...</div>
        )}

        {isError && (
          <div className="text-sm text-red-600">
            Gagal mengambil data keranjang.
          </div>
        )} */}

        <div className="py-4 text-sm">
          Tanggal Penyewaan : {formatDateTime(cartData?.rentalStart)} -{" "}
          {formatDateTime(cartData?.rentalEnd)}
        </div>

        {/* {!isLoading && !isError && !cartData && (
          <div className="text-sm text-[#6F6F6F]">Keranjang kosong.</div>
        )} */}

        <div className="grid grid-cols-[2fr_1fr_1fr_0.3fr] pb-4 border-b border-gray-200 text-sm font-semibold text-[#2A2A2A]">
          <div>Produk</div>
          <div className="text-center">Jumlah</div>
          <div className="text-center">Subtotal</div>
          <div></div>
        </div>

        <CartList items={items} setItems={setItems} />

        <div className="text-center text-md font-bold my-6">
          Pelengkap untuk Acara Anda
        </div>

        <div className="grid grid-cols-2 md:grid-coals-3 lg:grid-cols-5 gap-4">
          {crossSellProducts.map((product) => (
            <ProductCard
              key={product.id}
              requestParams={{
                startDate: cartData?.rentalStart,
                endDate: cartData?.rentalEnd,
              }}
              product={product}
            />
          ))}
        </div>

        <div className="mt-4 sticky bottom-2 z-20 bg-white">
          <CartSummary
            totalDays={totalDays}
            totalProducts={totalProducts}
            totalPrice={formatPrice(totalPrice)}
            disabled={hasStockIssue}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
