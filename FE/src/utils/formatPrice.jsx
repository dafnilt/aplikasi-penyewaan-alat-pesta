export function formatPrice(value) {
  const numericValue = Number(value);

  if (Number.isNaN(numericValue)) {
    return value;
  }

  return new Intl.NumberFormat("id-ID").format(numericValue);
}
