import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { navigateToProduct } from "../../utils/navigateToProduct";
import { formatPrice } from "../../utils/formatPrice";
import EmptyImage from "../../assets/empty-image.svg";

function UpsellModal({
  isOpen,
  onClose,
  onAddToCart,
  isAddingToCart,
  canAddToCart,
  upsellProduct,
  startDate,
  endDate,
}) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const productImage = upsellProduct?.thumbnail || EmptyImage;
  const productName = upsellProduct?.productName || "No name";
  const productPrice = upsellProduct?.price ?? 0;

  const handleNavigateProduct = (idProduct) => {
    if (!idProduct || !startDate || !endDate) {
      return;
    }

    navigate(`/product/${idProduct}`, {
      state: {
        startDate,
        endDate,
        isFromRecommendation: true,
      },
    });

    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/35 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-[40%] rounded-[28px] bg-white px-12 py-8 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-xl text-[#4A4A4A] transition hover:bg-black/5 hover:text-black"
        >
          ×
        </button>

        <div className="text-lg text-center font-semibold text-[#2f2f2f]">
          Ingin upgrade ke versi yang lebih baik?
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="flex flex-col gap-2">
            <Box
              component="img"
              src={productImage}
              alt={productName}
              sx={{
                width: 200,
                height: 200,
                objectFit: "cover",
                borderRadius: 3,
              }}
            />

            <div>{productName}</div>
            <div>Rp. {formatPrice(productPrice)}</div>
          </div>

          <div className="flex flex-col justify-center">
            <button
              type="button"
              onClick={() => handleNavigateProduct(upsellProduct?.idProduct)}
              className="w-full bg-[#74B559] text-white font-semibold py-2 rounded-2xl"
            >
              Ya, Lihat versi update
            </button>

            <button
              type="button"
              onClick={() => {
                onAddToCart();
                onClose();
              }}
              disabled={!canAddToCart}
              className="w-full bg-black mt-4 border text-white font-semibold py-2 rounded-2xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              Tetap dengan pilihan ini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpsellModal;
