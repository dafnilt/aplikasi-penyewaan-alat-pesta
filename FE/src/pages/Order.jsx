import Layout from "../layout/Layout";
import { jabodetabekCities } from "../utils/jabodetabekCities";
import { useState } from "react";
import TruckIcon from "../assets/icon/truck.svg";
import OrderSummary from "../components/OrderSummary";

function Order() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    address: false,
    city: false,
    phone: false,
  });

  return (
    <Layout>
      <div className="py-4 text-sm">
        <div className="flex items-center justify-between gap-2 border-b border-gray-300 py-2">
          <div className="text-lg font-semibold">Pesanan</div>
          <div className=" text-sm text-gray-600">
            Tanggal Penyewaan :
            {/* {formatDateTime(cartData?.rentalStart)} -{" "}
            {formatDateTime(cartData?.rentalEnd)} */}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-6">
          {/* GRID DATA PEMESAN */}
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-lg text-center">
              Data Pemesan
            </div>

            {/* NAMA */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                onBlur={() =>
                  setTouched((prev) => ({
                    ...prev,
                    name: true,
                  }))
                }
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#74B559]
    ${touched.name && !form.name.trim() ? "border-red-500" : "border-gray-300"}
  `}
              />

              {touched.name && !form.name.trim() && (
                <p className="text-xs text-red-500">Nama lengkap wajib diisi</p>
              )}
            </div>

            {/* ALAMAT */}
            <div className="flex flex-col gap-1">
              <label htmlFor="address" className="text-sm">
                Alamat Pengiriman
              </label>
              <input
                type="text"
                id="address"
                value={form.address}
                onChange={(e) =>
                  setForm((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
                onBlur={() =>
                  setTouched((prev) => ({
                    ...prev,
                    address: true,
                  }))
                }
                className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#74B559]
    ${touched.address && !form.address.trim() ? "border-red-500" : "border-gray-300"}
  `}
              />
              {touched.address && !form.address.trim() && (
                <p className="text-xs text-red-500">
                  Alamat pengiriman wajib diisi
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* KOTA/KABUPATEN */}
              <div className="flex flex-col gap-1">
                <label htmlFor="city" className="text-sm">
                  Kota/Kabupaten
                </label>

                <select
                  id="city"
                  value={form.city}
                  onChange={(e) =>
                    setForm((prev) => ({
                      ...prev,
                      city: e.target.value,
                    }))
                  }
                  onBlur={() =>
                    setTouched((prev) => ({
                      ...prev,
                      city: true,
                    }))
                  }
                  className={`w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#74B559] ${
                    touched.city && !form.city
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                >
                  <option value="" disabled>
                    Pilih Kota/Kabupaten
                  </option>

                  {jabodetabekCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>

                {touched.city && !form.city && (
                  <p className="text-xs text-red-500">
                    Kota/Kabupaten wajib dipilih
                  </p>
                )}
              </div>

              {/* NOMOR TELPON */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <label htmlFor="phone" className="text-sm">
                    Nomor Telpon
                  </label>

                  <div
                    className={`flex items-center w-full rounded px-3 py-2 focus-within:ring-1 focus-within:ring-[#74B559] ${
                      touched.phone && !form.phone
                        ? "border border-red-500"
                        : "border border-gray-300"
                    }`}
                  >
                    <span className="text-sm text-gray-500 mr-2">+62</span>

                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) =>
                        setForm((prev) => ({
                          ...prev,
                          phone: e.target.value.replace(/\D/g, ""),
                        }))
                      }
                      onBlur={() =>
                        setTouched((prev) => ({
                          ...prev,
                          phone: true,
                        }))
                      }
                      className="w-full text-sm outline-none"
                    />
                  </div>

                  {touched.phone && !form.phone && (
                    <p className="text-xs text-red-500">
                      Nomor telepon wajib diisi
                    </p>
                  )}
                </div>

                <div className="mt-2 flex justify-end">
                  <button
                    type="button"
                    className="bg-[#7CB95B] hover:bg-[#6BA64C] text-white font-semibold rounded-full px-10 py-2 transition-colors"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* GRID PENGIRIMAN */}
          <div className="flex flex-col gap-4">
            <div className="border border-gray-300 rounded-2xl p-4">
              <div className="text-lg font-semibold mb-4">Pengiriman</div>
              <div className="flex items-center gap-6">
                <img
                  src={TruckIcon}
                  alt="Pengiriman"
                  className="w-[15%] h-[15%] object-contain"
                />

                <div>
                  <div className="text-lg font-semibold">Rp120.000</div>
                  <div className=" text-gray-700">
                    Pengiriman akan diantar oleh kurir kami ke tempat acara
                    Anda.
                  </div>
                </div>
              </div>
            </div>

            <OrderSummary
              totalProducts={20}
              totalProductPrice={4200000}
              totalDays={7}
              shippingCost={120000}
              onConfirm={() => console.log("checkout")}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Order;
