export function getColorHex(colorName) {
  const colors = {
    merah: "#E53935",
    biru: "#1E88E5",
    "biru muda": "#64B5F6",
    hijau: "#43A047",
    kuning: "#FDD835",
    hitam: "#212121",
    putih: "#FFFFFF",
    ungu: "#8E24AA",
    pink: "#EC407A",
    orange: "#FB8C00",
    oranye: "#FB8C00",
    abu: "#9E9E9E",
    coklat: "#795548",
    gold: "#D4AF37",
    "warna-warni": "/images/warna-warni.jpg",
  };

  const key = colorName?.toLowerCase()?.trim();
  return colors[key] || "#CCCCCC";
}
