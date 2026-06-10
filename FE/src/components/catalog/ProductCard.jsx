import { useNavigate } from "react-router-dom";
import { formatPrice } from "../../utils/formatPrice";
import { navigateToProduct } from "../../utils/navigateToProduct";

function ProductCard({ product, requestParams }) {
  const navigate = useNavigate();
  const isAvailable = product.stock > 0;

  const handleNavigateProduct = () => {
    if (!isAvailable) return;

    navigateToProduct({
      navigate,
      idProduct: product.id,
      startDate: requestParams?.startDate,
      endDate: requestParams?.endDate,
    });
  };

  const isPriceRange = product.minPrice !== product.maxPrice;

  return (
    <button
      type="button"
      disabled={!isAvailable}
      onClick={handleNavigateProduct}
      className={`
        relative bg-white border border-gray-200 rounded-2xl p-3 text-left
        transition
        ${
          isAvailable
            ? "shadow-sm hover:shadow-md cursor-pointer"
            : "opacity-60 cursor-not-allowed"
        }
      `}
    >
      <div className="relative w-full aspect-square rounded-xl overflow-hidden">
        <img
          src={product.image || "/catalog/kursi/kursi-anak/foto-1.jpeg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        {!isAvailable && (
          <>
            <div className="absolute inset-0 bg-gray-500/40" />

            <div className="absolute top-2 right-2 bg-white text-gray-700 text-xs px-2 py-1 rounded-full">
              Tidak Tersedia
            </div>
          </>
        )}
      </div>

      <div className="mt-3">
        <div className="text-xs font-medium line-clamp-2">
          {product.name}
        </div>

        <div className="flex items-end gap-1 mt-1 flex-wrap">
          <div className="text-[#74B559] text-xs font-bold">
            {isPriceRange
              ? `Rp${formatPrice(product.minPrice)} - Rp${formatPrice(product.maxPrice)}`
              : `Rp${formatPrice(product.minPrice)}`}
          </div>

          <div className="text-xs text-gray-500">
            /{product.priceUnit}
          </div>
        </div>
      </div>
    </button>
  );
}

export default ProductCard;