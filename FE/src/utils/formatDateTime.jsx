export function formatDateTime(dateString) {
  if (!dateString) return "-";

  const date = new Date(dateString);

  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

// export function formatDateTime(dateString) {
//   if (!dateString) return "-";

//   const date = new Date(dateString);

//   const options = {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//   };

//   return date.toLocaleDateString("id-ID", options);
// }
