import { Divider, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { formatPrice } from "../utils/formatPrice";
import priceTagIcon from "../assets/icon/price-tag.svg";
import { formatDateTime } from "../utils/formatDateTime";
import { getColorHex } from "../utils/getColorHex";

function ProductInfo({
  productName,
  productDescription,
  productPrice,
  productMaxPrice,
  productPriceUnit,
  variantTypes,
  selectedVariantOptionIds,
  handleVariantSelect,
  openDetail,
  setOpenDetail,
  productDetails,
  startDate,
  endDate,
}) {
  const allVariantsSelected =
    variantTypes.length > 0 &&
    variantTypes.every(
      (variantType) => selectedVariantOptionIds[variantType.idVariant],
    );

  return (
    <div className="flex flex-col gap-4">
      {/* Section 1 */}
      <div className="flex flex-col gap-1 text-sm">
        <div className="text-xl font-semibold">{productName}</div>

        <div>{productDescription}</div>

        <div className="flex items-center pt-2 gap-2">
          <img className="w-6 h-6" src={priceTagIcon} alt="Price Tag" />

          <div className="text-lg font-semibold">
            Rp {formatPrice(productPrice)}
            {!allVariantsSelected ? ` - ${formatPrice(productMaxPrice)}` : ""}
          </div>

          <div className="text-md self-end">/{productPriceUnit}</div>
        </div>

        <Divider className="py-2" />
      </div>

      {/* Section 2 */}
      <div className="flex flex-col gap-2 text-sm">
        <div className="flex items-center gap-2">
          <div>Tanggal :</div>

          <div className="border border-[#B9B9B9] bg-[#F5F5F5] px-3 py-0.5 rounded-xl">
            {formatDateTime(startDate)} - {formatDateTime(endDate)}
          </div>
        </div>

        {variantTypes.map((variantType) => (
          <div key={variantType.idVariant} className="flex flex-col gap-2 pt-4">
            <div>{variantType.variantName}</div>

            <div className="flex flex-wrap items-center gap-2">
              {variantType.options.map((option) => {
                const isSelected =
                  selectedVariantOptionIds[variantType.idVariant] ===
                  option.idOption;

                const isColor = variantType.variantName
                  .toLowerCase()
                  .includes("warna");

                if (isColor) {
                  return (
                    <Box
                      key={option.idOption}
                      onClick={() =>
                        handleVariantSelect(
                          variantType.idVariant,
                          option.idOption,
                        )
                      }
                      sx={{
                        width: 25,
                        height: 25,
                        borderRadius: "50%",
                        bgcolor: getColorHex(option.valueOption),
                        cursor: "pointer",
                        border: isSelected
                          ? "3px solid #2A2A2A"
                          : "2px solid #ccc",
                        transition: "0.2s",
                        transform: isSelected ? "scale(1.1)" : "scale(1)",
                      }}
                    />
                  );
                }

                return (
                  <button
                    key={option.idOption}
                    onClick={() =>
                      handleVariantSelect(
                        variantType.idVariant,
                        option.idOption,
                      )
                    }
                    className={`
                      text-xs px-3 py-1 rounded-xl border transition-all duration-200
                      ${
                        isSelected
                          ? "bg-[#74B559] text-white border-[#74B559]"
                          : "bg-white text-black border-gray-400 hover:border-[#74B559]"
                      }
                    `}
                  >
                    {option.valueOption}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        <Divider sx={{ my: 2 }} />

        {/* Detail */}
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setOpenDetail(!openDetail)}
            className="flex items-center justify-between w-full"
          >
            <div className="text-sm font-bold text-[#5B8E47]">Detail Produk</div>

            <KeyboardArrowDownIcon
              className={`transition-transform duration-300 ${
                openDetail ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`
              overflow-hidden transition-all duration-300
              ${openDetail ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}
            `}
          >
            <div className="flex flex-col gap-1 text-[#2A2A2A]">
              {productDetails.map((detail, index) => (
                <div key={index}>{detail}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
