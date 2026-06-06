import { useEffect, useState } from "react";
import { useOrderPage } from "../hooks/useOrderPage";
import LayoutAdmin from "../layout/LayoutAdmin";
import SortableTable from "../components/SortableTable";
import { getStatusColor } from "../utils/getStatusColor";
import { getStatusText } from "../utils/getStatusText";
import { formatPrice } from "../utils/formatPrice";
import { formatDateTimeOrder } from "../utils/formatDateTime";
import Skeleton from "@mui/material/Skeleton";

const columns = [
  { id: "idOrder", label: "ID Pesanan" },
  { id: "recipientName", label: "Nama Pelanggan" },
  { id: "rentalStart", label: "Tanggal Penyewaan",
    render: (_,row) => 
      <div className="flex flex-col">
        <span>{formatDateTimeOrder(row.rentalStart)} -</span>
        <span>{formatDateTimeOrder(row.rentalEnd)}</span>
      </div>
  },
  { id: "phoneNumber", label: "Nomor Telepon" },
  // { id: "shippingAddress", label: "Alamat" },
  {
    id: "totalPrice",
    label: "Total Harga",
    render: (value) => `Rp ${formatPrice(value)}`,
  },
  {
  id: "status",
  label: "Status",
  render: (value) => (
    <span
      className="px-3 py-1 rounded-full text-xs text-white"
      style={{
        backgroundColor: getStatusColor(value),
      }}
    >
    {getStatusText(value)}
    </span>
  ),
}
];

function OrderList() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
  const fetchOrders = async () => {
    try {
      const response = await useOrderPage();

      setRows(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  fetchOrders();
}, []);
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
