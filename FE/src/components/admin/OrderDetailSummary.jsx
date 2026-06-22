import { formatPrice } from "../../utils/formatPrice";

function OrderDetailSummary({ order, totalDays }) {
  const productPrice = (order?.items || []).reduce(
    (total, item) => total + item.subtotal,
    0
  );

  const productTotal = order?.productTotal
  const subtotalBeforeShipping = order?.subtotalBeforeShipping;
  const subtotalBeforeShippingDP = order?.subtotalBeforeShippingDP;
  const shippingCost = order?.shippingCost || 0;
  const totalDP = order?.totalDP;
  const remainingPayment = order?.remainingPayment;
  const totalPayment = order?.totalPrice;

  return (
    <div className="flex justify-end mt-8">
      <div className="w-[350px] text-sm space-y-2">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div>Subtotal sebelum pengiriman:</div>
            <div className="text-xs text-gray-500">(Rp {formatPrice(productTotal)} x {totalDays} hari)</div>
          </div>
            <div>Rp {formatPrice(subtotalBeforeShipping)}</div>
        </div>

        <div className="flex justify-between">
          <div>Subtotal sebelum pengiriman (DP 50%):</div>
          <div>Rp {formatPrice(subtotalBeforeShippingDP)}</div>
        </div>

        <div className="border-t border-gray-300 pt-2 flex justify-between font-semibold">
          <div>Biaya pengiriman:</div>
          <div>Rp {formatPrice(shippingCost)}</div>
        </div>

        <div className="flex justify-between font-semibold">
          <div className="flex flex-col"> 
            <div>Total DP:</div>
            <div className="text-xs text-gray-500 font-normal">(Rp {formatPrice(subtotalBeforeShippingDP)} + Rp {formatPrice(shippingCost)} )</div>
          </div>
          <div>Rp {formatPrice(totalDP)}</div>
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