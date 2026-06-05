export const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "#E53935";
    case "DP":
      return "#FDD835";
    case "Paid":
      return "#43A047";
    case "Completed":
      return "#43A047";
    case "Cancelled":
      return "#9E9E9E";
    default:
      return "#9E9E9E";
  }
};