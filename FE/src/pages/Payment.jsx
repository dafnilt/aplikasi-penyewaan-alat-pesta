import Layout from "../layout/Layout";
import OrderSummary from "../components/order/OrderSummary";
import timerIcon from "../assets/icon/timer.svg";
import briIcon from "../assets/icon/bri.svg";
import PaymentInstruction from "../components/payment/PaymentInstruction";
import { paymentInstructions } from "../utils/paymentInstructions";

function Payment() {
  return (
    <Layout>
      <div className="pt-6 pb-2 text-sm flex items-center justify-between font-semibold gap-2 border-b border-gray-300">
        <div className="text-lg">Pembayaran</div>
        <div className="text-sm">ID Pesanan :</div>
      </div>

      <div className="grid grid-cols-2 gap-8 py-6">
        <div className="flex flex-col gap-3">
          <div className="border border-gray-300 rounded-2xl p-4">
            <div className="flex items-center gap-6">
              <img
                src={timerIcon}
                alt="Pengiriman"
                className="w-[10%] h-[10%] object-contain"
              />
              <div>
                <div className="text-sm text-gray-500">Transfer Sebelum</div>
                <div className="text-lg font-semibold">28 Februari - 19.27</div>
              </div>
            </div>
          </div>

          <div className="border border-gray-300 rounded-2xl p-4">
            <div className="flex items-center gap-6">
              <img
                src={briIcon}
                alt="BRI"
                className="w-[10%] h-[5%] object-contain"
              />
              <div>
                <div className="text-lg font-semibold">13xx xxxx xxxx</div>
                <div className="text-xs text-gray-500">
                  Lakukan pembayaran dengan melakukan transfer ke rekening di
                  atas sebelum waktu Anda habis.
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {paymentInstructions.map((instruction) => (
              <PaymentInstruction
                key={instruction.id}
                title={instruction.title}
                steps={instruction.steps}
              />
            ))}
          </div>
        </div>

        <OrderSummary
          totalProducts={20}
          totalProductPrice={4200000}
          totalDays={7}
          shippingCost={120000}
          onConfirm={() => console.log("checkout")}
        />
      </div>
    </Layout>
  );
}

export default Payment;
