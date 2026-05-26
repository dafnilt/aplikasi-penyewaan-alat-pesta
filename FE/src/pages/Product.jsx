import { useEffect, useState } from "react";

import Layout from "../layout/Layout";

import ProductGallery from "../components/ProductGalery";
import ProductInfo from "../components/ProductInfo";
import ProductSummary from "../components/ProductSummary";
import UpsellModal from "../components/UpsellModal";

import { useAddToCart } from "../hooks/useAddToCart";
import { useProductPage } from "../hooks/useProductPage";
import { useProductDetail } from "../hooks/useProductDetail";

const fallbackImages = [
  "/catalog/kursi/kursi-anak/foto-1.jpeg",
  "/catalog/kursi/kursi-anak/foto-2.jpeg",
];

const MS_PER_DAY = 1000 * 60 * 60 * 24;

const parseDateTime = (value) => {
  if (!value) {
    return null;
  }

  const normalizedValue = value.includes(" ") ? value.replace(" ", "T") : value;

  const parsedDate = new Date(normalizedValue);

  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
};

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

  const { mutateAsync: addToCart, isPending: isAddingToCart } = useAddToCart();

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

  const firstImage = thumbnail || images[0] || fallbackImages[0];

  const [selectedImage, setSelectedImage] = useState(firstImage);

  useEffect(() => {
    setSelectedImage(firstImage);
  }, [firstImage]);

  const [openDetail, setOpenDetail] = useState(false);

  const [openUpsellModal, setOpenUpsellModal] = useState(false);
  const [upsellMessage, setUpsellMessage] = useState("");
  const [upsellCartId, setUpsellCartId] = useState("");

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
  const availableStock = selectedVariantCombination?.stock ?? 0;

  const productPrice =
    selectedVariantCombination?.price ?? priceRange?.min ?? 0;

  const productMaxPrice = priceRange?.max ?? 0;

  const hasSelectedAllVariants =
    Object.keys(selectedVariantOptionIds).length === variantTypes.length;

  const totalDays = (() => {
    const start = parseDateTime(startDate);
    const end = parseDateTime(endDate);

    if (!start || !end) {
      return 0;
    }

    const diffDays = Math.ceil((end.getTime() - start.getTime()) / MS_PER_DAY);

    return Math.max(1, diffDays);
  })();

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
    const existingGuestId = localStorage.getItem("guestId");
    const guestId = existingGuestId || crypto.randomUUID();

    if (!existingGuestId) {
      localStorage.setItem("guestId", guestId);
    }

    if (!productId || !selectedCombinationId) {
      return;
    }

    setUpsellMessage("Sedang menambahkan item ke keranjang...");
    setUpsellCartId("");
    setOpenUpsellModal(true);

    try {
      const response = await addToCart({
        guestId,
        idProduct: productId,
        combinationId: selectedCombinationId,
        quantity: qty,
      });

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

  return (
    <Layout>
      <div className="grid grid-cols-[1.2fr_2fr_1.2fr] gap-6 py-6">
        {isFetching && <div>Loading...</div>}

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
          productId={productId}
          onAddToCart={handleAddToCart}
          isAddingToCart={isAddingToCart}
          canAddToCart={Boolean(productId && selectedCombinationId && qty > 0)}
        />
      </div>

      <UpsellModal
        isOpen={openUpsellModal}
        onClose={() => setOpenUpsellModal(false)}
        message={upsellMessage}
        cartId={upsellCartId}
      />
    </Layout>
  );
}

export default Product;
