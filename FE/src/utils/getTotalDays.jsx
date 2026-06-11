import { parseDateTime } from "./parseDateTime";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function getTotalDays(startDate, endDate) {
  const start = parseDateTime(startDate);
  const end = parseDateTime(endDate);

  if (!start || !end) return 0;

  const diffDays = Math.ceil(
    (end.getTime() - start.getTime()) / MS_PER_DAY,
  );

  return Math.max(1, diffDays);
}

export default getTotalDays;