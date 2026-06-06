import { formatPrice } from "../utils/formatPrice";

function OrderDetailSummary({ order, totalDays }) {
  const productPrice = (order?.items || []).reduce(
    (total, item) => total + item.subtotal,
    0
  );

  const subtotalBeforeShipping = productPrice * totalDays;
  const downPayment = subtotalBeforeShipping * 0.5;
  const shippingCost = order?.shippingCost || 0;
  const totalAfterShipping = downPayment + shippingCost;
  const remainingPayment =
    order?.totalPrice - downPayment - shippingCost;

  return (
    <div className="flex justify-end mt-8">
      <div className="w-[350px] text-sm space-y-2">
        <div className="flex justify-between">
          <span>Harga Produk:</span>
          <span>Rp {formatPrice(productPrice)}</span>
        </div>

        <div className="flex justify-between">
          <span>Jumlah Hari:</span>
          <span>{totalDays} hari</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal sebelum pengiriman:</span>
          <span>Rp {formatPrice(subtotalBeforeShipping)}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal sebelum pengiriman (DP 50%):</span>
          <span>Rp {formatPrice(downPayment)}</span>
        </div>

        <div className="flex justify-between">
          <span>Biaya pengiriman:</span>
          <span>Rp {formatPrice(shippingCost)}</span>
        </div>

        <div className="flex justify-between font-semibold pt-2">
          <span>Total setelah pengiriman:</span>
          <span>Rp {formatPrice(totalAfterShipping)}</span>
        </div>

        <div className="flex justify-between font-semibold">
          <span>Sisa Pelunasan:</span>
          <span>Rp {formatPrice(remainingPayment)}</span>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailSummary;