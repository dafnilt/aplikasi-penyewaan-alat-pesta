import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PaymentsIcon from '@mui/icons-material/Payments';
import { useOrderPage } from "../hooks/useOrderPage";
import LayoutAdmin from "../layout/LayoutAdmin";
import ChangeStatusOrderModal from "../components/admin/ChangeStatusOrderModal";
import ServerSortableTable from "../components/admin/ServerSortableTable";
import { getStatusColor } from "../utils/getStatusColor";
import { formatPrice } from "../utils/formatPrice";
import { formatDateTimeOrder } from "../utils/formatDateTime";
import TextField from "@mui/material/TextField";
import { textFieldStyle } from "../utils/textFieldStyle";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function OrderList() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [openStatusModal, setOpenStatusModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orders, setOrders] = useState([]);
  const [pagination, setPagination] = useState({
    totalItems: 0,
  });

  const [page, setPage] = useState(0);
  const rowsPerPage = 10;
  const [orderBy, setOrderBy] = useState("updatedAt");
  const [order, setOrder] = useState("desc");
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");

  const handleOpenStatusModal = (row) => {
    setSelectedOrder(row);
    setOpenStatusModal(true);
    setIsModalOpen(true);
  };

  const handleDetailOrder = async (orderId) => {
    try {
      navigate(`/orders/${orderId}`);
    } catch (error) {
      console.error("Gagal mengambil detail order:", error);
    }
  };

  const handleCloseStatusModal = () => {
    setOpenStatusModal(false);
    setIsModalOpen(false);
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
    { id: "phoneNumber", label: "Nomor Telepon", sortable: false },
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
          {value}
        </div>
      ),
    },
    {
      id: "action",
      label: "Aksi",
      sortable: false,
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

  const fetchOrders = async (showLoading = true) => {
    try {
      if (showLoading) setLoading(true);

      const response = await useOrderPage({
        page,
        pageSize: rowsPerPage,
        sortBy: orderBy,
        sortOrder: order,
        search,
      });
      setOrders(response.data.orders);
      setPagination(response.data.pagination)
    } catch (error) {
      console.error(error);
    } finally {
      if (showLoading) setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [page, orderBy, order, search]);

  const handleSort = (property, newOrder) => {
    setOrderBy(property);
    setOrder(newOrder);
    setPage(0);
  };

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  if (loading) {
    return (
      <LayoutAdmin className="bg-[#F3F3F3] min-h-screen" isModalOpen={isModalOpen}>
        <div className="text-sm font-semibold text-[#1f1f1f] mb-6">
          Daftar Pesanan
        </div>
        <Skeleton variant="rounded" height={350} />
      </LayoutAdmin>
    );
  }
  return (
    <LayoutAdmin className="bg-[#F3F3F3] min-h-screen" isModalOpen={isModalOpen}>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm font-semibold text-[#1f1f1f]">
            Daftar Pesanan
          </div>

          <TextField
            size="small"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearch(searchInput.trim());
                setPage(0);
              }
            }}
            sx={textFieldStyle}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      edge="end"
                      size="small"
                      onClick={() => {
                        setSearch(searchInput.trim());
                        setPage(0);
                      }}
                    >
                      <SearchIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>
        <ServerSortableTable
          columns={columns}
          rows={orders}
          totalItems={pagination.totalItems}
          page={page}
          rowsPerPage={rowsPerPage}
          order={order}
          orderBy={orderBy}
          onSort={handleSort}
          onPageChange={handleChangePage}
          emptyMessage="Belum ada data pesanan"
        />
      </div>
    <ChangeStatusOrderModal
      open={openStatusModal}
      onClose={handleCloseStatusModal}
      orderId={selectedOrder?.idOrder}
      currentStatus={selectedOrder?.status}
      onSuccess={() => fetchOrders(false)}
    />
    </LayoutAdmin>
  );
}
export default OrderList;
