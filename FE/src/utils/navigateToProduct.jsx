export const navigateToProduct = ({
  navigate,
  idProduct,
  startDate,
  endDate,
}) => {
  if (!idProduct || !startDate || !endDate) {
    return;
  }

  const queryString = new URLSearchParams({
    startDate,
    endDate,
  }).toString();

  navigate(`/product/${idProduct}?${queryString}`, {
    state: {
      idProduct,
      startDate,
      endDate,
    },
  });
};
