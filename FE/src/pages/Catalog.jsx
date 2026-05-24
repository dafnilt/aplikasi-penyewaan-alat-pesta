import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Layout from "../layout/Layout";
import CalendarModal from "../components/CalenderModal";
import filterIcon from "../assets/icon/filter.svg";
import calenderIcon from "../assets/icon/calender.svg";
import arrowDownIcon from "../assets/icon/arrow-down.svg";
import { privateApi } from "../utils/axios";

const productsEndpoint = import.meta.env.VITE_PRODUCTS_API_PATH || "/products/";

const formatPrice = (value) => {
  const numericValue = Number(value);

  if (Number.isNaN(numericValue)) {
    return value;
  }

  return new Intl.NumberFormat("id-ID").format(numericValue);
};

const formatDateTime = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

function Catalog() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [category, setCategory] = useState("All Kategori");
  const categoryList = [
    "All Kategori",
    "Tenda",
    "Perlengkapan",
    "Kursi",
    "Meja",
    "Multimedia",
    "Karpet",
    "Panggung",
    "Utilitas",
  ];

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [requestParams, setRequestParams] = useState(null);

  const {
    data: products = [],
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["products", requestParams],
    enabled: !!requestParams,
    queryFn: async ({ signal }) => {
      const response = await privateApi.post(productsEndpoint, requestParams, {
        signal,
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data?.data ?? [];
    },
  });

  const handleSaveCalendar = async () => {
    if (!startDate || !endDate) {
      return;
    }

    setRequestParams({
      startDate: formatDateTime(startDate),
      endDate: formatDateTime(endDate),
    });
    setIsCalendarOpen(false);
  };

  return (
    <Layout className="bg-[#f3f3f3]">
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        onSave={handleSaveCalendar}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        isLoading={isFetching && !isError}
      />

      <div className="bg-[#f3f3f3]">
        <div className="mb-4 px-4 md:px-6 lg:px-8 mx-auto max-w-6xl">
          {/* Filter */}
          <div className="flex py-4 gap-4">
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white rounded-full flex items-center gap-3 px-2 py-1 border border-gray-300 w-max hover:cursor-pointer relative"
            >
              <img
                src={filterIcon}
                alt="Filter Icon"
                className="w-4 opacity-80"
              />
              <div className="text-sm font-medium pr-4">{category}</div>
              <img
                src={arrowDownIcon}
                alt="Arrow Down"
                className="w-4 opacity-70"
              />

              {isOpen && (
                <div className="absolute mt-2 bg-white border border-gray-200 rounded-2xl shadow-md w-40 overflow-hidden z-50">
                  {categoryList.map((item, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setCategory(item);
                        setIsOpen(false);
                      }}
                      className="px-4 py-2 text-sm hover:bg-gray-100 hover:cursor-pointer transition-all"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white rounded-full flex items-center gap-3 px-2 py-1 border border-gray-300 w-max">
              <img
                src={calenderIcon}
                alt="Calendar Icon"
                className="w-4 opacity-80"
              />
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
                placeholderText="Date & Time"
                className="outline-none text-sm font-medium bg-transparent min-w-[260px]"
              />
            </div>
          </div>

          {/* {isError && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              Gagal memuat data produk. Cek endpoint mockoon dan coba lagi.
            </div>
          )}
          
          {!isFetching && products.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center text-sm text-gray-500">
              Pilih tanggal lalu tekan Simpan untuk memuat produk dari API.
            </div>
          ) : null} */}

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-3 shadow-sm hover:shadow-md transition"
              > 
                <div className="w-full aspect-square rounded-xl bg-gray-100 overflow-hidden flex items-center justify-center">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src="/catalog/kursi/kursi-anak/foto-1.jpeg"
                      alt={product.name}
                      className="w-full h-full object-cover opacity-90"
                    />
                  )}
                </div>
                <div className="mt-3">
                  <div className="text-xs font-medium">{product.name}</div>
                  <div className="flex items-end gap-1 mt-1">
                    <div className="text-[#74B559] text-sm font-bold">
                      Rp{formatPrice(product.price)}
                    </div>
                    <div className="text-xs">/{product.price_unit}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Catalog;
