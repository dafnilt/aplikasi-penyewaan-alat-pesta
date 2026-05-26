import LayoutAdmin from "../layout/LayoutAdmin";

function Pesanan() {
  return (
    <LayoutAdmin className="bg-[#F3F3F3] min-h-screen">
      <div className="pt-6">
        <h1 className="text-2xl font-bold text-[#1f1f1f] mb-6">Pesanan</h1>

        <div className="overflow-x-auto rounded-2xl bg-white border border-gray-200">
          <table className="min-w-full text-sm text-left text-gray-700">
            <thead className="bg-gray-50 text-gray-800">
              <tr>
                <th className="px-4 py-3 font-semibold">ID Pesanan</th>
                <th className="px-4 py-3 font-semibold">Nama Pelanggan</th>
                <th className="px-4 py-3 font-semibold">Tanggal Penyewaan</th>
                <th className="px-4 py-3 font-semibold">Produk</th>
                <th className="px-4 py-3 font-semibold">Alamat</th>
                <th className="px-4 py-3 font-semibold">Total Harga</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-gray-400">
                  Belum ada data pesanan.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default Pesanan;
