import { getStatusColor } from "../utils/getStatusColor";
import { formatDateTimeOrder } from "../utils/formatDateTime";

function OrderDetailInformation({ order }) {
  return (
    <>
      <div className="text-base font-semibold mb-5">Informasi Pesanan</div>

      <div className="grid grid-cols-4 gap-6 border-b pb-5">
        <div>
          <div className="font-semibold text-sm">ID Pesanan</div>
          <div className="text-sm">{order?.idOrder}</div>
        </div>

        <div>
          <div className="font-semibold text-sm">Tanggal Pesan</div>
          <div className="text-sm">{formatDateTimeOrder(order?.createdAt)}</div>
        </div>

        <div>
          <div className="font-semibold text-sm">Alamat</div>
          <div className="text-sm">{order?.shippingAddress}</div>
        </div>

        <div>
          <div className="font-semibold text-sm">Status</div>
          <span
            className="inline-block px-4 py-1 rounded-full text-xs text-white"
            style={{ backgroundColor: getStatusColor(order?.status) }}
          >
            {order?.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 mt-5">
        <div>
          <div className="text-base font-semibold mb-5">
            Informasi Pelanggan
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-semibold text-sm">Nama pelanggan</div>
              <div className="text-sm">{order?.recipientName}</div>
            </div>

            <div>
              <div className="font-semibold text-sm">No. Telepon</div>
              <div className="text-sm">{order?.phoneNumber}</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-base font-semibold mb-5">
            Informasi Jadwal Penyewaan
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="font-semibold text-sm">Tanggal Mulai</div>
              <div className="text-sm">
                {formatDateTimeOrder(order?.rentalStart)}
              </div>
            </div>

            <div>
              <div className="font-semibold text-sm">Tanggal Selesai</div>
              <div className="text-sm">
                {formatDateTimeOrder(order?.rentalEnd)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetailInformation;