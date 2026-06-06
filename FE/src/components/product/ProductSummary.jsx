import { formatPrice } from "../../utils/formatPrice";
import QuantitySelector from "../QuantitySelector";

function ProductSummary({
  qty,
  increaseQty,
  decreaseQty,
  onQtyChange,
  availableStock,
  selectedVariantStock,
  selectedVariantText,
  totalDays,
  subtotal,
  onOpenUpsellModal,
  canAddToCart,
}) {
  const stock = selectedVariantStock ?? availableStock;

  return (
    <div className="flex flex-col gap-3 text-sm border border-[#B9B9B9] rounded-xl p-4 self-start">
      <div className="font-semibold">Atur Jumlah :</div>

      <div>{selectedVariantText}</div>

      <div className="flex items-center gap-2">
        <QuantitySelector
          qty={qty}
          onIncrease={increaseQty}
          onDecrease={decreaseQty}
          onChange={onQtyChange}
        />

        <div className="font-semibold text-[#74B559]">Stok : {stock}</div>
      </div>

      <div className="pt-4">Total Hari : {totalDays}</div>

      <div className="flex items-center justify-between gap-2">
        <div>Subtotal :</div>

        <div className="text-base font-semibold">
          Rp. {formatPrice(subtotal)}
        </div>
      </div>

      <button
        onClick={onOpenUpsellModal}
        disabled={!canAddToCart}
        className="bg-[#74B559] text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#5B8E47] transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        Masukkan ke keranjang
      </button>
    </div>
  );
}

export default ProductSummary;
