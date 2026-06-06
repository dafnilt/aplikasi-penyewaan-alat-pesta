import { useState } from "react";

import DatePicker from "react-datepicker";

import filterIcon from "../../assets/icon/filter.svg";
import calenderIcon from "../../assets/icon/calender.svg";
import arrowDownIcon from "../../assets/icon/arrow-down.svg";

function CatalogFilter({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  category,
  setCategory,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const categoryList = ["Semua Kategori", "Tenda", "Kursi", "Meja"];

  return (
    <div className="flex py-2 gap-4">
      <div className="relative inline-block">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="
      flex items-center gap-2
      rounded-full border border-gray-300
      bg-white px-4 py-1
      text-sm text-gray-700
      shadow-sm
      hover:border-[#74B559]
      hover:bg-[#F8FCF6]
      transition-all duration-200
      cursor-pointer
    "
        >
          <img src={filterIcon} alt="Filter" className="w-4 h-4" />

          <span>{category}</span>

          <img
            src={arrowDownIcon}
            alt="Arrow"
            className={`w-4 h-4 transition-transform duration-100 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div
            className="
        absolute left-0 top-[calc(100%+8px)]
        w-48
        overflow-hidden
        rounded-2xl
        border border-gray-200
        bg-white
        shadow-lg
        z-50
      "
          >
            {categoryList.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setCategory(item);
                  setIsOpen(false);
                }}
                className="
            w-full px-4 py-3
            text-left text-sm text-gray-700
            hover:bg-[#F8FCF6]
            hover:text-[#74B559]
            transition-colors
          "
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <div
        className="
    flex items-center gap-2
    rounded-full border border-gray-300
    bg-white px-4
    hover:border-[#74B559]
    hover:bg-[#F8FCF6]
    transition-all duration-200
  "
      >
        <img src={calenderIcon} alt="Calendar" className="w-4 h-4 shrink-0" />

        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
            if (start) {
              localStorage.setItem("lastStartDate", start.toISOString());
            }

            if (end) {
              localStorage.setItem("lastEndDate", end.toISOString());
            }
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          showTimeSelect
          dateFormat="dd MMM yyyy HH:mm"
          className="
      bg-transparent
      outline-none
      text-sm
      min-w-[270px]
    "
        />
      </div>
    </div>
  );
}

export default CatalogFilter;
