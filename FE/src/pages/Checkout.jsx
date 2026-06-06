import Layout from "../layout/Layout";
import { formatDateTime } from "../utils/formatDateTime";
import { useCartDetail } from "../hooks/useCart";

function Checkout() {
  return (
    <Layout>
      <div className="py-4 text-sm">
        <div className="flex items-center justify-between gap-2 border-b border-gray-300 pb-2">
          <div className="text-lg font-semibold">Pesanan</div>
          <div className=" text-sm text-gray-600">
            Tanggal Penyewaan :
            {/* {formatDateTime(cartData?.rentalStart)} -{" "}
            {formatDateTime(cartData?.rentalEnd)} */}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 py-2">
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-center">Data Pemesan</div>
            <div>Nama Lengkap</div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#74B559]"
            />
            <div>Alamat Pengiriman</div>
            <input
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#74B559]"
            />
            <div className="grid grid-cols-2">
              <div className="flex flex-">Kabupaten/Kota</div>
              <div>Nomor Telpon</div>
            </div>
          </div>
          <div>Pengiriman</div>
        </div>
      </div>
    </Layout>
  );
}

export default Checkout;
