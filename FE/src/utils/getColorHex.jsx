export function getColorHex(colorName) {
  const colors = {
    merah: "#E53935",
    biru: "#1E88E5",
    hijau: "#43A047",
    kuning: "#FDD835",
    hitam: "#212121",
    putih: "#FFFFFF",
    ungu: "#8E24AA",
    pink: "#EC407A",
    orange: "#FB8C00",
    abu: "#9E9E9E",
    gold: "#D4AF37",
  };

  return colors[colorName?.toLowerCase()] || "#CCCCCC";
}
