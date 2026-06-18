import { Box, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useEffect, useRef, useState } from "react";

function ProductGallery({ images, selectedImage, setSelectedImage }) {
  const scrollRef = useRef(null);

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const needScroll = images.length > 4;

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el || !needScroll) {
      setShowLeft(false);
      setShowRight(false);
      return;
    }

    const isAtLeft = el.scrollLeft <= 0;
    const isAtRight =
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;

    setShowLeft(!isAtLeft);
    setShowRight(!isAtRight);
  };

  useEffect(() => {
    checkScrollPosition();

    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollPosition);
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      el.removeEventListener("scroll", checkScrollPosition);
      window.removeEventListener("resize", checkScrollPosition);
    };
  }, [images]);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -120,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 120,
      behavior: "smooth",
    });
  };

  return (
    <Box sx={{ width: 250 }}>
      <Box
        component="img"
        src={selectedImage}
        alt="Product"
        sx={{
          width: 250,
          height: 250,
          objectFit: "cover",
          borderRadius: 3,
        }}
      />

      <Box sx={{ position: "relative", mt: 1 }}>
        {showLeft && (
          <IconButton
            onClick={scrollLeft}
            size="small"
            sx={{
              position: "absolute",
              left: -12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "white",
              boxShadow: 1,
            }}
          >
            <ChevronLeft />
          </IconButton>
        )}

        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 1,
            py: 0.5,

            overflowX: needScroll ? "auto" : "hidden",

            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {images.map((img, index) => (
            <Box
              key={index}
              component="img"
              src={img}
              onClick={() => setSelectedImage(img)}
              sx={{
                width: 55,
                height: 55,
                objectFit: "cover",
                borderRadius: 2,
                cursor: "pointer",
                flexShrink: 0,
                border:
                  selectedImage === img
                    ? "2px solid #1976d2"
                    : "2px solid transparent",
              }}
            />
          ))}
        </Box>

        {showRight && (
          <IconButton
            onClick={scrollRight}
            size="small"
            sx={{
              position: "absolute",
              right: -12,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              bgcolor: "white",
              boxShadow: 1,
            }}
          >
            <ChevronRight />
          </IconButton>
        )}
      </Box>
    </Box>
  );
}

export default ProductGallery;