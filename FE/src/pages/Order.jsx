import { useState } from "react";

import Layout from "../layout/Layout";
import CustomerForm from "../components/order/CustomerForm";
import ShippingInfo from "../components/order/ShippingInfo";
import OrderSummary from "../components/order/OrderSummary";
import { useShipping, useCheckout, useOrderSummary } from "../hooks/useOrder";
import { useNavigate } from "react-router-dom";

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

  const { data: shippingInfo } = useShipping(form.city);
  const { data: orderSummary } = useOrderSummary();
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

          <OrderSummary
            summary={summary}
            shippingCost={shippingCost}
            variant="order"
            onConfirm={handleConfirmOrder}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Order;
