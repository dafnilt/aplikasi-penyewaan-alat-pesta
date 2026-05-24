import { useState } from "react";
import { Box, Grid, Divider } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Layout from "../layout/Layout";

function Product() {
  const images = [
    "/catalog/kursi/kursi-anak/foto-1.jpeg",
    "/catalog/kursi/kursi-anak/foto-2.jpeg",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const colors = [
    "#c62828",
    "#1565c0",
    "#2e7d32",
    "#f9a825",
    "#6a1b9a",
    "#000000",
  ];
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const options = ["Polos", "Cover", "Cover + Pita"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const productDetails = [
    "Ukuran dudukan : 40x40cm",
    "Ukuran senderan : 35x43,5cm",
    "Ukuran dari dudukan ke bawah : 39x47,5cm",
  ];
  const [openDetail, setOpenDetail] = useState(false);

  const [qty, setQty] = useState(15);
  const decreaseQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };
  const increaseQty = () => {
    setQty(qty + 1);
  };

  return (
    <Layout>
      <div className="grid grid-cols-[1.2fr_2fr_1.2fr] gap-6 py-6">
        {/* Grid 1 */}
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
              <Grid item key={index}>
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

        {/* Grid 2 */}
        <div className="flex flex-col gap-4">
          {/* Section 1 */}
          <div className="flex flex-col gap-1 text-xs">
            <div className="text-lg font-semibold">Kursi Futura</div>
            <div className="">Kursi lipat sederhana tanpa cover</div>
            <div className="flex items-center pt-2 gap-2">
              <img
                className="w-6 h-6"
                src="src\assets\icon\price-tag.svg"
                alt="Price Tag"
              />
              <div className="text-lg font-semibold">Rp 10.000 - 15.000</div>
              <div className="text-sm self-end">/pcs</div>
            </div>
            <Divider className="py-2"></Divider>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-1 text-xs gap-2">
            <div className="flex items-center gap-2">
              <div className="">Tanggal : </div>
              <div className="border border-[#B9B9B9] bg-[#F5F5F5] px-3 py-0.5 rounded-xl">
                1 Maret 2026 - 7 Maret 2026
              </div>
            </div>

            <div className="pt-4">Option : </div>
            <div className="flex items-center gap-2">
              {options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOption(option)}
                  className={`
              text-xs px-3 py-1 rounded-xl border transition-all duration-200
              ${
                selectedOption === option
                  ? "bg-[#74B559] text-white border-[#74B559]"
                  : "bg-white text-black border-gray-400 hover:border-[#74B559] hover:cursor-pointer"
              }
            `}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="pt-4">Warna : </div>
            <div className="flex items-center gap-4">
              {colors.map((color, index) => (
                <Box
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  sx={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    bgcolor: color,
                    cursor: "pointer",
                    border:
                      selectedColor === color
                        ? "3px solid #2A2A2A"
                        : "2px solid #ccc",
                    transition: "0.2s",
                    transform:
                      selectedColor === color ? "scale(1.1)" : "scale(1)",
                  }}
                />
              ))}
            </div>

            <Divider sx={{ my: 2 }} />

            <div className="flex flex-col gap-2">
              <button
                onClick={() => setOpenDetail(!openDetail)}
                className="flex items-center justify-between w-full"
              >
                <div className="font-bold text-[#5B8E47]">Detail Produk</div>

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
        {/* Grid 3 */}
        <div className="flex flex-col gap-3 text-xs border border-[#B9B9B9] rounded-xl p-4 self-start">
          <div className="">Atur Jumlah :</div>
          <div className="">Polos, Merah</div>
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-between w-[50%] px-4 border border-[#B9B9B9] rounded-xl">
              <button
                onClick={decreaseQty}
                className="
          text-[#74B559]
          text-sm
          font-bold
          hover:scale-110
          transition
          cursor-pointer
        "
              >
                -
              </button>
              <div className="text-sm text-[#4A4A4A]">{qty}</div>
              <button
                onClick={increaseQty}
                className="
          text-[#74B559]
          text-sm
          font-bold
          hover:scale-110
          transition
          cursor-pointer
        "
              >
                +
              </button>
            </div>
            <div className="font-semibold text-[#74B559]">Stok : 20</div>
          </div>
          <div>Total Hari : 7</div>
          <div className="grid grid-cols-2 items-center gap-2">
            <div>Subtotal : </div>
            <div className="text-base font-semibold">Rp. 1.050.000</div>
          </div>
          <button className="bg-[#74B559] text-white font-semibold py-2 px-4 rounded-xl hover:bg-[#5B8E47] transition">
            Masukkan ke keranjang
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
