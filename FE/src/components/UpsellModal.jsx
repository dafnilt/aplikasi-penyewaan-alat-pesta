function UpsellModal({ isOpen, onClose, message, cartId }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-[28px] bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="text-xl font-semibold text-[#2f2f2f]">Upsell Modal</div>

        <div className="mt-3 text-sm leading-6 text-[#4A4A4A]">
          {message || "Item berhasil ditambahkan ke keranjang."}
        </div>

        {cartId ? (
          <div className="mt-2 text-xs font-medium text-[#74B559]">
            Cart ID: {cartId}
          </div>
        ) : null}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#74B559] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#5B8E47]"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpsellModal;
