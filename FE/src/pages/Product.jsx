import { useEffect, useState } from "react";
import Layout from "../layout/Layout";

import ProductGallery from "../components/product/ProductGalery";
import ProductInfo from "../components/product/ProductInfo";
import ProductSummary from "../components/product/ProductSummary";
import UpsellModal from "../components/product/UpsellModal";

import { useAddToCart } from "../hooks/useCart";
import { useProductPage } from "../hooks/useProductPage";
import { useProductDetail } from "../hooks/useProductDetail";
import { getTotalDays } from "../utils/getTotalDays";
import { useUpsellRecommendations } from "../hooks/useUpsellRecommendations";
import ProductSkeleton from "../components/product/ProductSkeleton";

const fallbackImages = [
  "/catalog/kursi/kursi-anak/foto-1.jpeg",
  "/catalog/kursi/kursi-anak/foto-2.jpeg",
];

function Product() {
  const { productId, startDate, endDate } = useProductPage();

  const {
    data: productDetail,
    isFetching,
    isError,
  } = useProductDetail({
    productId,
    startDate,
    endDate,
  });

  const { mutateAsync: addToCart, isPending: isAddingToCart } = useAddToCart(
    startDate,
    endDate,
  );
  const {
    mutateAsync: fetchUpsellRecommendations,
    isPending: isFetchingUpsell,
  } = useUpsellRecommendations();

  const {
    gallery: images = fallbackImages,
    variantTypes = [],
    variantCombinations = [],
    specifications: productDetails = [],
    thumbnail,
    productName,
    productDescription,
    priceRange,
    unitPrice,
  } = productDetail || {};

  const hasVariants = variantTypes.length > 0;

  const firstImage = thumbnail || images[0] || fallbackImages[0];

  const [selectedImage, setSelectedImage] = useState(firstImage);

  useEffect(() => {
    setSelectedImage(firstImage);
  }, [firstImage]);

  const [openDetail, setOpenDetail] = useState(false);

  const [openUpsellModal, setOpenUpsellModal] = useState(false);
  const [upsellMessage, setUpsellMessage] = useState("");
  const [upsellCartId, setUpsellCartId] = useState("");
  const [upsellProduct, setUpsellProduct] = useState(null);

  const [qty, setQty] = useState(1);

  const [selectedVariantOptionIds, setSelectedVariantOptionIds] = useState({});

  useEffect(() => {
    const initialVariants = variantTypes.reduce((acc, variant) => {
      if (variant.options?.[0]) {
        acc[variant.idVariant] = variant.options[0].idOption;
      }

      return acc;
    }, {});

    setSelectedVariantOptionIds(initialVariants);
  }, [variantTypes]);

  const handleVariantSelect = (variantId, optionId) => {
    setSelectedVariantOptionIds((current) => ({
      ...current,
      [variantId]: optionId,
    }));
  };

  const selectedVariantCombination = variantCombinations.find((combination) => {
    const selectedOptionIds = Object.values(selectedVariantOptionIds);

    return selectedOptionIds.every((optionId) =>
      combination.options.includes(optionId),
    );
  });

  const availableStock = hasVariants
    ? (selectedVariantCombination?.stock ?? 0)
    : (productDetail?.availableStock ?? 0);

  const productPrice =
    selectedVariantCombination?.price ?? priceRange?.min ?? 0;

  const productMaxPrice = priceRange?.max ?? 0;

  const hasSelectedAllVariants =
    Object.keys(selectedVariantOptionIds).length === variantTypes.length;

  const totalDays = getTotalDays(startDate, endDate);

  const subtotal = productPrice * qty * totalDays;

  const selectedCombinationId =
    selectedVariantCombination?.idCombination ??
    selectedVariantCombination?.combinationId ??
    selectedVariantCombination?.idVariantCombination;

  const increaseQty = () => {
    if (qty < availableStock) {
      setQty(qty + 1);
    }
  };

  const handleQtyChange = (nextQty) => {
    const numericQty = Number(nextQty);

    if (Number.isNaN(numericQty)) {
      setQty(1);
      return;
    }

    setQty(Math.min(Math.max(1, numericQty), availableStock || 1));
  };

  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleOpenUpsellModal = async () => {
    if (!productId) {
      return;
    }

    if (hasVariants && !selectedCombinationId) {
      return;
    }

    const guestId = localStorage.getItem("guestId");

    if (!guestId) {
      localStorage.setItem("guestId", guestId);
    }

    try {
      const payload = {
        idProduct: productId,
        startDate,
        endDate,
        quantity: qty,
        guestId,
      };

      if (selectedCombinationId) {
        payload.idVariantCombination = selectedCombinationId;
      }

      const recommendations = await fetchUpsellRecommendations(payload);

      const recommendedProduct = recommendations?.[0] ?? null;

      if (!recommendedProduct) {
        setOpenUpsellModal(false);
        setUpsellProduct(null);
        await handleAddToCart();
        return;
      }

      setUpsellProduct(recommendedProduct);
      setUpsellMessage("");
      setUpsellCartId("");
      setOpenUpsellModal(true);
    } catch (error) {
      console.error("Gagal mengambil rekomendasi upsell", error);
    }
  };

  const selectedVariantText = Object.entries(selectedVariantOptionIds)
    .map(([variantId, optionId]) => {
      const variant = variantTypes.find(
        (item) => item.idVariant === Number(variantId),
      );

      const option = variant?.options.find(
        (item) => item.idOption === optionId,
      );

      return option?.valueOption;
    })
    .filter(Boolean)
    .join(", ");

  const handleAddToCart = async () => {
    const guestId = localStorage.getItem("guestId");

    if (!guestId) {
      localStorage.setItem("guestId", guestId);
    }

    if (!productId) {
      return;
    }

    if (hasVariants && !selectedCombinationId) {
      return;
    }

    setUpsellMessage("Sedang menambahkan item ke keranjang...");
    setUpsellCartId("");

    try {
      const payload = {
        guestId,
        idProduct: productId,
        quantity: qty,
        startDate,
        endDate,
      };

      if (selectedCombinationId) {
        payload.combinationId = selectedCombinationId;
      }

      const response = await addToCart(payload);

      if (response?.success) {
        setUpsellMessage(
          response.message || "Item berhasil ditambahkan ke keranjang.",
        );
        setUpsellCartId(response?.data?.cartId ?? "");
      }
    } catch (error) {
      setUpsellMessage("Gagal menambahkan item ke keranjang.");
      console.error("Gagal menambahkan produk ke keranjang", error);
    }
  };

  if (isFetching) {
    return (
      <Layout>
        <ProductSkeleton />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="grid grid-cols-[1.2fr_2fr_1.2fr] gap-6 py-6">
        {isError && <div>Error mengambil data</div>}

        <ProductGallery
          images={images}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />

        <ProductInfo
          productName={productName}
          productDescription={productDescription}
          productPrice={productPrice}
          productMaxPrice={productMaxPrice}
          productPriceUnit={unitPrice}
          variantTypes={variantTypes}
          selectedVariantOptionIds={selectedVariantOptionIds}
          handleVariantSelect={handleVariantSelect}
          openDetail={openDetail}
          setOpenDetail={setOpenDetail}
          productDetails={productDetails}
          startDate={startDate}
          endDate={endDate}
          hasSelectedAllVariants={hasSelectedAllVariants}
        />

        <ProductSummary
          qty={qty}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          onQtyChange={handleQtyChange}
          availableStock={availableStock}
          selectedVariantText={selectedVariantText}
          totalDays={totalDays}
          subtotal={subtotal}
          onOpenUpsellModal={handleOpenUpsellModal}
          canAddToCart={Boolean(
            productId && qty > 0 && (!hasVariants || selectedCombinationId),
          )}
        />
      </div>

      <UpsellModal
        isOpen={openUpsellModal}
        onClose={() => setOpenUpsellModal(false)}
        onAddToCart={handleAddToCart}
        isAddingToCart={isAddingToCart}
        canAddToCart={Boolean(
          productId && qty > 0 && (!hasVariants || selectedCombinationId),
        )}
        upsellProduct={upsellProduct}
        startDate={startDate}
        endDate={endDate}
      />
    </Layout>
  );
}

export default Product;
