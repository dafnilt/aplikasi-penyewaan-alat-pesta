import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import { navigateToProduct } from "../utils/navigateToProduct";

function ProductCard({ product, requestParams }) {
  const navigate = useNavigate();

  const handleNavigateProduct = (idProduct) => {
    navigateToProduct({
      navigate,
      idProduct,
      startDate: requestParams?.startDate,

      endDate: requestParams?.endDate,
    });
  };

  return (
    <button
      onClick={() => handleNavigateProduct(product.id)}
      className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition text-left"
    >
      <div className="w-full aspect-square rounded-xl overflow-hidden">
        <img
          src={product.image || "/catalog/kursi/kursi-anak/foto-1.jpeg"}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mt-3">
        <div className="text-xs font-medium">{product.name}</div>

        <div className="flex items-end gap-1 mt-1">
          <div className="text-[#74B559] text-sm font-bold">
            Rp
            {formatPrice(product.price)}
          </div>

          <div className="text-xs">/{product.price_unit}</div>
        </div>
      </div>
    </button>
  );
}

export default ProductCard;
