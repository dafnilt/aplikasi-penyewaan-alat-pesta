import { useState } from "react";
import Layout from "../layout/Layout";
import CustomerForm from "../components/order/CustomerForm";
import ShippingInfo from "../components/order/ShippingInfo";
import OrderSummary from "../components/order/OrderSummary";
import { useShipping, useCheckout, useOrderSummary } from "../hooks/useOrder";
import { useNavigate } from "react-router-dom";
import { Empty, Skeleton } from "antd";

function Order() {
  const navigate = useNavigate();

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

  const handleConfirmOrder = () => {
    setTouched({
      name: true,
      address: true,
      city: true,
      phone: true,
    });

    const isValid =
      form.name.trim() && form.address.trim() && form.city && form.phone;

    if (!isValid) return;

    checkout(form, {
      onSuccess: () => {
        navigate("/payment");
      },
    });
  };

  const {
    data: shippingInfo,
    isLoading: isShippingLoading,
    isError: isShippingError,
  } = useShipping(form.city);

  const {
    data: orderSummary,
    isLoading: isSummaryLoading,
    isError: isSummaryError,
  } = useOrderSummary();

  const { mutate: checkout, isPending } = useCheckout();

  return (
    <Layout>
      <div className="pt-6 pb-2 text-sm flex items-center justify-between gap-2 border-b border-gray-300">
        <div className="text-lg font-semibold">Pesanan</div>

        <div className="text-sm text-gray-600">Tanggal Penyewaan :</div>
      </div>

      <div className="grid grid-cols-2 gap-8 py-6">
        <CustomerForm
          form={form}
          setForm={setForm}
          touched={touched}
          setTouched={setTouched}
          onSave={() => console.log(form)}
        />

        <div className="flex flex-col gap-4">
          <ShippingInfo shippingCost={shippingInfo?.shippingCost ?? 0} />

          {isSummaryLoading ? (
            <Skeleton active paragraph={{ rows: 8 }} />
          ) : isSummaryError ? (
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description="Gagal memuat ringkasan pesanan"
            />
          ) : (
            <OrderSummary
              summary={orderSummary}
              shippingCost={shippingInfo?.shippingCost ?? 0}
              variant="order"
              onConfirm={handleConfirmOrder}
            />
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Order;
