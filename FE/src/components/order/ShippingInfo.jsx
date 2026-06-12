import TruckIcon from "../../assets/icon/truck.svg";

function ShippingInfo({ shippingCost }) {
  return (
    <div className="border border-gray-300 rounded-2xl p-4">
      <div className="text-lg font-semibold mb-4">
        Pengiriman
      </div>

      <div className="flex items-center gap-6">
        <img
          src={TruckIcon}
          alt="Pengiriman"
          className="w-[15%] h-[15%] object-contain"
        />

        <div>
          <div className="text-lg font-semibold">
            Rp{shippingCost.toLocaleString("id-ID")}
          </div>

          <div className="text-gray-700">
            Pengiriman akan diantar oleh kurir kami ke
            tempat acara Anda.
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShippingInfo;