import { formatPrice } from "../../utils/formatPrice";

function OrderSummary({
  totalProducts,
  totalProductPrice,
  totalDays,
  shippingCost,
  onConfirm,
}) {
  const dpAmount = totalProductPrice * 0.5;
  const totalPayment = dpAmount + shippingCost;
  const remainingPayment = totalProductPrice - dpAmount;

  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <div className="text-lg font-semibold mb-4">Ringkasan Pesanan</div>

      <div className="flex flex-col gap-3 text-sm">
        {/* <div className="border-b border-gray-300 pb-2 flex justify-between">
          <div>Jumlah Produk</div>
          <div>{totalProducts}</div>
        </div>

        <div className="flex justify-between">
          <div>Total Harga Produk</div>
          <div>Rp {formatPrice(totalProductPrice)}</div>
        </div>

        <div className="border-b border-gray-300 pb-2 flex justify-between">
          <div>Jumlah Hari Peminjaman</div>
          <div>{totalDays}</div>
        </div> */}

        <div className="border-b border-gray-300 pb-2 flex justify-between font-medium">
          <div>Subtotal sebelum pengiriman</div>
          <div>Rp {formatPrice(totalProductPrice)}</div>
        </div>

        <div className="flex justify-between">
          <div>Subtotal sebelum pengiriman (DP 50%)</div>
          <div>Rp {formatPrice(dpAmount)}</div>
        </div>

        <div className="border-b border-gray-300 pb-2 flex justify-between">
          <div>Biaya Pengiriman</div>
          <div>Rp {formatPrice(shippingCost)}</div>
        </div>

        <div className="border-b border-gray-300 pb-2 flex justify-between items-center">
          <div className="text-lg font-medium">Total Pembayaran</div>

          <div className="text-lg font-semibold text-[#5A8D49]">
            Rp {formatPrice(totalPayment)}
          </div>
        </div>

        <div className="text-xs text-gray-700">
          Sisa pembayaran sebesar{" "}
          <span className="font-semibold">
            Rp {formatPrice(remainingPayment)}
          </span>{" "}
          dilakukan setelah barang sudah Anda terima.
        </div>

        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={onConfirm}
            className="w-[60%] bg-[#7CB95B] hover:bg-[#6BA64C] text-lg text-white font-semibold rounded-full px-10 py-2 transition-colors"
          >
            Konfirmasi Pesanan
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
