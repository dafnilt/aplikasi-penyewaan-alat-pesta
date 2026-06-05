export const getStatusText = (status) => {
  switch (status) {
    case "Pending":
      return "Belum Bayar";
    case "DP":
      return "Bayar 50%";
    case "Paid":
      return "Bayar Lunas";
    case "Completed":
      return "Completed";
    case "Cancelled":
      return "Cancelled";
    default:
      return "Status tidak dikenal";
  }
};