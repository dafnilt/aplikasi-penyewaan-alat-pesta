import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import LayoutAdmin from "../layout/LayoutAdmin";
import { useOrderDetail } from "../hooks/useOrderDetail";
import { parseDateTime } from "../utils/parseDateTime";
import OrderDetailInformation from "../components/OrderDetailInformation";
import OrderItemTable from "../components/OrderItemTable";
import OrderDetailSummary from "../components/OrderDetailSummary";

const MS_PER_DAY = 1000 * 60 * 60 * 24;
//
function OrderDetail() {
  const { orderId } = useParams();

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

  const totalDays = (() => {
    const start = parseDateTime(order?.rentalStart);
    const end = parseDateTime(order?.rentalEnd);

    if (!start || !end) return 0;

    const diffDays = Math.ceil(
      (end.getTime() - start.getTime()) / MS_PER_DAY
    );

    return Math.max(1, diffDays);
  })();

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
          Daftar pesanan &gt;{" "}
          <span className="font-medium">
            Detail pesanan - {order?.idOrder} ({order?.recipientName})
          </span>
        </div>

        <div className="bg-white rounded-2xl p-6">
          <OrderDetailInformation order={order} />

          <OrderItemTable items={order?.items || []} />

          <OrderDetailSummary order={order} totalDays={totalDays} />
        </div>
      </div>
    </LayoutAdmin>
  );
}

export default OrderDetail;