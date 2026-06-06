import { useState } from "react";

import Layout from "../layout/Layout";
import CustomerForm from "../components/order/CustomerForm";
import ShippingInfo from "../components/order/ShippingInfo";
import OrderSummary from "../components/order/OrderSummary";

function Order() {
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
            <ShippingInfo shippingCost={120000} />

            <OrderSummary
              totalProducts={20}
              totalProductPrice={4200000}
              totalDays={7}
              shippingCost={120000}
              onConfirm={() => console.log("checkout")}
            />
          </div>
        </div>
    </Layout>
  );
}

export default Order;
