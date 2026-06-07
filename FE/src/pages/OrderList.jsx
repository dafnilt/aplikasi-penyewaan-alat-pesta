import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PaymentsIcon from '@mui/icons-material/Payments';
import { useOrderPage } from "../hooks/useOrderPage";
import LayoutAdmin from "../layout/LayoutAdmin";
import ChangeStatusOrderModal from "../components/ChangeStatusOrderModal";
import SortableTable from "../components/SortableTable";
import { getStatusColor } from "../utils/getStatusColor";
import { getStatusText } from "../utils/getStatusText";
import { formatPrice } from "../utils/formatPrice";
import { formatDateTimeOrder } from "../utils/formatDateTime";

function OrderList() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleOpenStatusModal = (row) => {
    setSelectedOrder(row);
    setOpenStatusModal(true);
  };

  const handleSaveStatus = (newStatus) => {
    console.log("Status baru:", newStatus);
  };

  const handleDetailOrder = async (orderId) => {
    try {
      navigate(`/orders/${orderId}`);
    } catch (error) {
      console.error("Gagal mengambil detail order:", error);
    }
  };

  const columns = [
    { id: "idOrder", label: "ID Pesanan" },
    { id: "recipientName", label: "Nama Pelanggan" },
    {
      id: "rentalStart",
      label: "Tanggal Penyewaan",
      render: (_, row) => (
        <div className="flex flex-col">
          <div>{formatDateTimeOrder(row.rentalStart)} -</div>
          <div>{formatDateTimeOrder(row.rentalEnd)}</div>
        </div>
      ),
    },
    { id: "phoneNumber", label: "Nomor Telepon" },
    {
      id: "totalPrice",
      label: "Total Harga",
      render: (value) => `Rp ${formatPrice(value)}`,
    },
    {
      id: "status",
      label: "Status",
      render: (value) => (
        <div
          className="px-3 py-1 rounded-full text-xs text-white text-center"
          style={{ backgroundColor: getStatusColor(value) }}
        >
          {getStatusText(value)}
        </div>
      ),
    },
    {
      id: "action",
      label: "Aksi",
      render: (_, row) => (
        <div className="flex items-center gap-1">
          <IconButton
            size="small"
            color="success"
            onClick={() => handleOpenStatusModal(row)}
          >
            <PaymentsIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="primary"
            onClick={() => handleDetailOrder(row.idOrder)}
          >
            <InfoOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await useOrderPage();
        setRows(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <LayoutAdmin className="bg-[#F3F3F3] min-h-screen">
        <div className="text-sm font-semibold text-[#1f1f1f] mb-6">
          Daftar Pesanan
        </div>
        <Skeleton variant="rounded" height={350} />
      </LayoutAdmin>
    );
  }
  return (
    <LayoutAdmin className="bg-[#F3F3F3] min-h-screen">
      <div>
        <div className="text-sm font-semibold text-[#1f1f1f] mb-6">
          Daftar Pesanan
        </div>

        <SortableTable
          columns={columns}
          rows={rows}
          defaultOrderBy="createdAt"
          emptyMessage="Belum ada data pesanan"
        />
      </div>
    <ChangeStatusOrderModal
      open={openStatusModal}
      onClose={() => setOpenStatusModal(false)}
      orderId={selectedOrder?.idOrder}
      currentStatus={selectedOrder?.status}
      onSave={handleSaveStatus}
    />
    </LayoutAdmin>
  );
}
export default OrderList;
