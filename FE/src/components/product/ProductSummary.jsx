import { formatPrice } from "../../utils/formatPrice";
import QuantitySelector from "../QuantitySelector";
import { useState } from "react";

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
  notes,
  setNotes,
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

      <div className="flex flex-col gap-1 pt-2">
        <label className="text-xs text-gray-600">Catatan (opsional) :</label>

        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          // placeholder="Contoh: warna putih, kirim sebelum jam 3..."
          className="w-full border border-gray-300 rounded-lg p-2 text-xs resize-none focus:outline-none focus:border-[#74B559]"
          rows={2}
        />
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
