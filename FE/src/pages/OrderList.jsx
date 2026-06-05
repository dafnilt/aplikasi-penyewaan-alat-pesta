import LayoutAdmin from "../layout/LayoutAdmin";
import SortableTable from "../components/SortableTable";
import { getStatusColor } from "../utils/getStatusColor";
import { getStatusText } from "../utils/getStatusText";

const columns = [
  { id: "id", label: "ID Pesanan" },
  { id: "customerName", label: "Nama Pelanggan" },
  { id: "rentalDate", label: "Tanggal Penyewaan" },
  { id: "phoneNumber", label: "Nomor Telepon" },
  { id: "address", label: "Alamat" },
  {
    id: "totalPrice",
    label: "Total Harga",
    render: (value) => `Rp ${value.toLocaleString("id-ID")}`,
  },
  {
    id: "status",
    label: "Status",
    render: (value) => (
      <span
        style={{
          backgroundColor: getStatusColor(value),
          padding: "4px 12px",
          borderRadius: "999px",
          display: "inline-block",
          fontSize: "12px",
          fontWeight: 500,
          color: "#fff",
        }}
      >
        {getStatusText(value)}
      </span>
    ),
  }
];

const rows = [
  {
    id: 1,
    customerName: "Haya Qonita",
    rentalDate: "2026-01-01",
    phoneNumber: "08123456789",
    product: "Meja",
    address: "Bandung",
    totalPrice: 100000,
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Amani",
    rentalDate: "2026-01-02",
    phoneNumber: "08123456789",
    product: "Kursi",
    address: "Bandung",
    totalPrice: 150000,
    status: "DP",
  },
  {
    id: 3,
    customerName: "Hehe",
    rentalDate: "2026-01-03",
    phoneNumber: "08123456789",
    product: "Tenda",
    address: "Bandung",
    totalPrice: 80000,
    status: "Completed",
  },
];

function OrderList() {

  return (
    <LayoutAdmin className="bg-[#F3F3F3] min-h-screen">
      <div>
        <div className="text-lg font-medium text-[#1f1f1f] mb-6">Daftar Pesanan</div>

        <SortableTable
          columns={columns}
          rows={rows}
          defaultOrderBy="id"
          emptyMessage="Belum ada data pesanan"
        />
      </div>
    </LayoutAdmin>
  );
}

export default OrderList;
