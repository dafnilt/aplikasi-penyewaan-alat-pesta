export const getStatusColor = (status) => {
  switch (status) {
    case "Pending Payment":
      return "#E53935";
    case "Down Payment 50%":
      return "#FDD835";
    case "Fully Paid":
      return "#43A047";
    case "Completed":
      return "#43A047";
    case "Cancelled":
      return "#9E9E9E";
    case true:
      return "#43A047";
    case false:
      return "#9E9E9E";
    default:
      return "#9E9E9E";
  }
};