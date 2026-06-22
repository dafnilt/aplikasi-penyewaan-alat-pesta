export const getStatusColor = (status) => {
  switch (status) {
    case "Belum Bayar":
      return "#E53935";
    case "Bayar 50%":
      return "#FDD835";
    case "Bayar Lunas":
      return "#43A047";
    case "Selesai":
      return "#43A047";
    case "Dibatalkan":
      return "#9E9E9E";
    case true:
      return "#43A047";
    case false:
      return "#9E9E9E";
    default:
      return "#9E9E9E";
  }
};