import { Box, Grid } from "@mui/material";

function ProductGallery({ images, selectedImage, setSelectedImage }) {
  return (
    <Box>
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

      <Grid container spacing={1} sx={{ mt: 1 }}>
        {images.map((img, index) => (
          <Grid key={index}>
            <Box
              component="img"
              src={img}
              alt={`Thumbnail ${index}`}
              onClick={() => setSelectedImage(img)}
              sx={{
                width: 70,
                height: 70,
                objectFit: "cover",
                borderRadius: 2,
                cursor: "pointer",
                border:
                  selectedImage === img
                    ? "3px solid #1976d2"
                    : "2px solid transparent",
                transition: "0.2s",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ProductGallery;
