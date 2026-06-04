import Layout from "../layout/Layout";
import CartList from "../components/CartList";
import { formatDateTime } from "../utils/formatDateTime";
import { useCartDetail } from "../hooks/useCartDetail";
import ProductCard from "../components/ProductCard";
import CartSummary from "../components/CartSummary";
import { getTotalDays } from "../utils/getTotalDays";
import { useCrossSellRecommendations } from "../hooks/useCrossSellRecommendations";

function Cart() {
  const { data: cartData, isLoading, isError } = useCartDetail();
  const { products: crossSellProducts } = useCrossSellRecommendations();

  const cartItems = cartData?.items ?? [];

  const totalDays = getTotalDays(cartData?.rentalStart, cartData?.rentalEnd);

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

        <div className="py-4 text-sm text-[#4A4A4A]">
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

        <CartList items={cartItems} />

        <div className="text-center text-md font-bold my-8">
          Pelengkap untuk Acara Anda
        </div>

        <div className="mb-3 text-sm text-[#6F6F6F]">
          Debug cross-sell: {crossSellProducts.length} item
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
            totalProducts={20}
            totalPrice="4.200.000"
            onCheckout={() => console.log("checkout")}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Cart;
