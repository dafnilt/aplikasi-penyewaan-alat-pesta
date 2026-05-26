import { formatPrice } from "../utils/formatPrice";

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
  onAddToCart,
  isAddingToCart,
  canAddToCart,
}) {
  const stock = selectedVariantStock ?? availableStock;

  return (
    <div className="flex flex-col gap-3 text-sm border border-[#B9B9B9] rounded-xl p-4 self-start">
      <div className="font-semibold">Atur Jumlah :</div>

      <div>{selectedVariantText}</div>

      <div className="flex items-center gap-2">
        <div className="flex items-center justify-between w-[50%] px-4 border border-[#B9B9B9] rounded-xl">
          <button
            onClick={decreaseQty}
            className="
              text-[#74B559]
              text-sm
              font-bold
              hover:scale-110
              transition
              cursor-pointer
            "
          >
            -
          </button>

          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            value={qty}
            onChange={(event) => onQtyChange(event.target.value)}
            className="w-14 text-center text-sm text-[#4A4A4A] bg-transparent outline-none"
          />

          <button
            onClick={increaseQty}
            className="
              text-[#74B559]
              text-sm
              font-bold
              hover:scale-110
              transition
              cursor-pointer
            "
          >
            +
          </button>
        </div>

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
        onClick={onAddToCart}
        disabled={!canAddToCart || isAddingToCart}
        className="bg-[#74B559] text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#5B8E47] transition disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isAddingToCart ? "Menambahkan..." : "Masukkan ke keranjang"}
      </button>
    </div>
  );
}

export default ProductSummary;
