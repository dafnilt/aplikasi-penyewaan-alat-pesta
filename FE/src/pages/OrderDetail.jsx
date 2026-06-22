import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import LayoutAdmin from "../layout/LayoutAdmin";
import { useOrderDetail } from "../hooks/useOrderDetail";
import { getTotalDays } from "../utils/getTotalDays";
import OrderDetailInformation from "../components/admin/OrderDetailInformation";
import OrderItemTable from "../components/admin/OrderItemTable";
import OrderDetailSummary from "../components/admin/OrderDetailSummary";

function OrderDetail() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrderDetail = async () => {
      try {
        const response = await useOrderDetail(orderId);
        setOrder(response.data);
      } catch (error) {
        console.error("Gagal mengambil detail pesanan:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrderDetail();
  }, [orderId]);

  if (loading) {
    return (
      <LayoutAdmin className="bg-[#F3F3F3] min-h-screen">
        <Skeleton variant="rounded" height={350} />
      </LayoutAdmin>
    );
  }

  return (
    <LayoutAdmin className="bg-[#F3F3F3] min-h-screen">
      <div>
        <div className="text-sm mb-4 text-[#1f1f1f]">
            <span
                className="cursor-pointer hover:text-green-600 hover:underline"
                onClick={() => navigate("/orders")}
            >
                Daftar pesanan
            </span>
            {" > "}
            <span className="font-semibold">
                Detail pesanan - {order?.idOrder} ({order?.recipientName})
            </span>
        </div>

        <div className="bg-white rounded-2xl p-6">
          <OrderDetailInformation order={order} />

          <OrderItemTable items={order?.items || []} />

          <OrderDetailSummary order={order} totalDays={getTotalDays(order?.rentalStart, order?.rentalEnd)} />
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default OrderDetail;