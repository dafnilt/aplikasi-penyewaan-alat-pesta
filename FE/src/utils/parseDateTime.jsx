export function parseDateTime(value) {
  if (!value) {
    return null;
  }

  const normalizedValue = value.includes(" ") ? value.replace(" ", "T") : value;

  const parsedDate = new Date(normalizedValue);

  return Number.isNaN(parsedDate.getTime()) ? null : parsedDate;
}
