import { useEffect, useRef, useState } from "react";

import { formatApiDateTime } from "../utils/formatApiDateTime";

import { parseDateTime } from "../utils/parseDateTime";

const LAST_START_DATE_KEY = "lastStartDate";

const LAST_END_DATE_KEY = "lastEndDate";

export function useCatalogPage() {
  const called = useRef(false);

  const [isCalendarOpen, setIsCalendarOpen] = useState(true);

  const [startDate, setStartDate] = useState(null);

  const [endDate, setEndDate] = useState(null);

  const [requestParams, setRequestParams] = useState(null);

  useEffect(() => {
    if (called.current) return;

    called.current = true;

    let guestId = localStorage.getItem("guestId");

    if (!guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem("guestId", guestId);
      return;
    }

    const lastStartDate = localStorage.getItem(LAST_START_DATE_KEY);

    const lastEndDate = localStorage.getItem(LAST_END_DATE_KEY);

    const parsedStartDate = parseDateTime(lastStartDate);

    const parsedEndDate = parseDateTime(lastEndDate);

    if (!parsedStartDate || !parsedEndDate) {
      return;
    }

    setStartDate(parsedStartDate);
    setEndDate(parsedEndDate);

    setRequestParams({
      startDate: lastStartDate,
      endDate: lastEndDate,
    });

    setIsCalendarOpen(false);
  }, []);

  const handleSaveCalendar = () => {
    if (!startDate || !endDate) return;

    const formattedStartDate = formatApiDateTime(startDate);

    const formattedEndDate = formatApiDateTime(endDate);

    localStorage.setItem(LAST_START_DATE_KEY, formattedStartDate);

    localStorage.setItem(LAST_END_DATE_KEY, formattedEndDate);

    setRequestParams({
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    });

    setIsCalendarOpen(false);
  };

  return {
    startDate,
    endDate,

    setStartDate,
    setEndDate,

    requestParams,

    isCalendarOpen,
    setIsCalendarOpen,

    handleSaveCalendar,
  };
}
