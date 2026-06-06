import { useState } from "react";

import DatePicker from "react-datepicker";

import filterIcon from "../../assets/icon/filter.svg";
import calenderIcon from "../../assets/icon/calender.svg";
import arrowDownIcon from "../../assets/icon/arrow-down.svg";

function CatalogFilter({ startDate, endDate, setStartDate, setEndDate }) {
  const [isOpen, setIsOpen] = useState(false);

  const [category, setCategory] = useState("All Kategori");

  const categoryList = ["All Kategori", "Tenda", "Kursi", "Meja"];

  return (
    <div className="flex py-4 gap-4">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="bg-white rounded-full flex items-center gap-3 px-2 py-1 border border-gray-300 relative"
      >
        <img src={filterIcon} className="w-4" />

        <div className="text-sm">{category}</div>

        <img src={arrowDownIcon} className="w-4" />

        {isOpen && (
          <div className="absolute mt-2 bg-white border rounded-2xl shadow-md w-40 overflow-hidden z-50">
            {categoryList.map((item, index) => (
              <div
                key={index}
                onClick={() => {
                  setCategory(item);

                  setIsOpen(false);
                }}
                className="px-4 py-2 text-sm hover:bg-gray-100"
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="bg-white rounded-full flex items-center gap-3 px-2 py-1 border border-gray-300">
        <img src={calenderIcon} className="w-4" />

        <DatePicker
          selected={startDate}
          onChange={(dates) => {
            const [start, end] = dates;

            setStartDate(start);
            setEndDate(end);
          }}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          showTimeSelect
          dateFormat="dd MMM yyyy HH:mm"
          className="outline-none text-sm"
        />
      </div>
    </div>
  );
}

export default CatalogFilter;
