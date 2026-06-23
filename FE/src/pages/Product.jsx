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
import { notification } from "antd";
import EmptyImage from "../assets/empty-image.svg";
import { useLocation } from "react-router-dom";

const fallbackImages = [EmptyImage, EmptyImage];

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

  const [notes, setNotes] = useState("");

  useEffect(() => {
    if (!variantTypes.length) return;

    setSelectedVariantOptionIds((prev) => {
      if (Object.keys(prev).length > 0) {
        return prev;
      }

      const initialVariants = variantTypes.reduce((acc, variant) => {
        if (variant.options?.[0]) {
          acc[variant.idVariant] = variant.options[0].idOption;
        }

        return acc;
      }, {});

      return initialVariants;
    });
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
    selectedVariantCombination?.idVariantCombination ??
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
    if (!productId) return;
    if (hasVariants && !selectedCombinationId) return;

    const guestId = localStorage.getItem("guestId");

    const storedCartDates = localStorage.getItem("cartDates");
    let parsedCartDates = null;

    try {
      parsedCartDates = storedCartDates ? JSON.parse(storedCartDates) : null;
    } catch (e) {
      parsedCartDates = null;
    }

    const isSameDate =
      parsedCartDates &&
      parsedCartDates.startDate === startDate &&
      parsedCartDates.endDate === endDate;

    if (!isSameDate) {
      await handleAddToCart();
      return;
    }

    try {
      const payload = {
        idProduct: productId,
        startDate,
        endDate,
        quantity: qty,
        guestId,
        notes,
        isFromRecommendation,
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
      setOpenUpsellModal(true);
    } catch (error) {
      console.error("Gagal mengambil rekomendasi upsell", error);
    }
  };

  const location = useLocation();
  const isFromRecommendation = location.state?.isFromRecommendation === true;

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
        notes,
      };

      if (selectedCombinationId) {
        payload.idVariantCombination = selectedCombinationId;
      }

      const response = await addToCart(payload);

      if (response?.cartId) {
        setUpsellMessage("Item berhasil ditambahkan ke keranjang.");
        setUpsellCartId(response.cartId);

        const existing = localStorage.getItem("cartDates");
        if (!existing) {
          const cartDates = {
            startDate,
            endDate,
          };
          localStorage.setItem("cartDates", JSON.stringify(cartDates));
        }

        notification.success({
          title: "Produk berhasil ditambahkan ke keranjang",
          placement: "topRight",
          style: {
            borderRadius: "16px",
            border: "1px solid #74B559",
            background: "#F8FCF6",
          },
        });
      }
    } catch (error) {
      setUpsellMessage("Gagal menambahkan item ke keranjang.");
      notification.error({
        title:
          "Lengkapi keranjang belanja Anda sebelum mengubah tanggal penyewaan.",
        placement: "topRight",
        style: {
          borderRadius: "16px",
          border: "1px solid #FFCCC7",
          background: "#FFF2F0",
        },
      });

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
      <div className="grid grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)_minmax(0,1.2fr)] gap-6 py-6">
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
          notes={notes}
          setNotes={setNotes}
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
