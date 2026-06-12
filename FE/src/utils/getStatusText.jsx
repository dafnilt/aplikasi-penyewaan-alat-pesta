export const getStatusText = (status) => {
  switch (status) {
    case "Pending Payment":
      return "Belum Bayar";
    case "Down Payment 50%":
      return "Bayar 50%";
    case "Fully Paid":
      return "Bayar Lunas";
    case "Completed":
      return "Completed";
    case "Cancelled":
      return "Cancelled";
    default:
      return "Status tidak dikenal";
  }
};