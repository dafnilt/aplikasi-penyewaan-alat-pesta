import { useNavigate } from "react-router-dom";

function CartSummary({ totalDays, totalProducts, totalPrice, disabled }) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center text-md font-semibold justify-between rounded-xl border border-[#D9D9D9] bg-white px-6 py-2 shadow-md">
      <div className="flex items-center gap-10">
        <div>{totalDays} Hari</div>

        <div>{totalProducts} Produk</div>

        <span className="text-lg font-semibold text-[#74B559]">
          Rp {totalPrice}
        </span>
      </div>

      <button
        disabled={disabled}
        onClick={() => navigate("/order")}
        className={`rounded-full px-8 py-3 text-white font-medium transition
    ${
      disabled
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-[#74B559] hover:bg-[#689f4f]"
    }
  `}
      >
        Lanjutkan ke pembayaran
      </button>
    </div>
  );
}

export default CartSummary;
