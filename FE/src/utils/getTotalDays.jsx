import { parseDateTime } from "./parseDateTime";

const MS_PER_DAY = 1000 * 60 * 60 * 24;

export function getTotalDays(startDate, endDate) {
  const start = parseDateTime(startDate);
  const end = parseDateTime(endDate);

  if (!start || !end) return 0;

  const startOnlyDate = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
  );

  const endOnlyDate = new Date(
    end.getFullYear(),
    end.getMonth(),
    end.getDate(),
  );

  const diffDays = Math.floor(
    (endOnlyDate.getTime() - startOnlyDate.getTime()) / MS_PER_DAY,
  );
  
  return diffDays + 1;
}

export default getTotalDays;