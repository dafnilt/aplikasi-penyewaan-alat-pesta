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
  const remainingPayment = downPayment;
  const totalPayment = totalAfterShipping + remainingPayment;

  return (
    <div className="flex justify-end mt-8">
      <div className="w-[350px] text-sm space-y-2">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div>Subtotal sebelum pengiriman:</div>
            <div className="text-xs text-gray-500">(Rp {formatPrice(productPrice)} x {totalDays} hari)</div>
          </div>
            <div>Rp {formatPrice(subtotalBeforeShipping)}</div>
        </div>

        <div className="flex justify-between">
          <div>Subtotal sebelum pengiriman (DP 50%):</div>
          <div>Rp {formatPrice(downPayment)}</div>
        </div>

        <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold">
          <div>Biaya pengiriman:</div>
          <div>Rp {formatPrice(shippingCost)}</div>
        </div>

        <div className="flex justify-between font-semibold">
          <div className="flex flex-col"> 
            <div>Total DP:</div>
            <div className="text-xs text-gray-500 font-normal">(Rp {formatPrice(downPayment)} + Rp {formatPrice(shippingCost)} )</div>
          </div>
          <div>Rp {formatPrice(totalAfterShipping)}</div>
        </div>

        <div className="flex justify-between font-semibold">
          <div>Sisa Pelunasan:</div>
          <div>Rp {formatPrice(remainingPayment)}</div>
        </div>

        <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold pt-2">
          <div>Total Lunas:</div>
          <div>Rp {formatPrice(totalPayment)}</div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetailSummary;