import {
  Dialog,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useChangeStatusOrder } from "../hooks/useChangeStatusOrder";

const statusIdMap = {
  "Pending Payment": "1",
  "Down Payment 50%": "2",
  "Fully Paid": "3",
  "Completed": "4",
};

const statusOptionsByCurrentStatus = {
  "Pending Payment": [
    { value: "2", label: "Sudah bayar 50%" },
  ],
  "Down Payment 50%": [
    { value: "1", label: "Belum bayar" },
    { value: "3", label: "Sudah bayar lunas" },
  ],
  "Fully Paid": [
    { value: "2", label: "Sudah bayar 50%" },
    { value: "4", label: "Completed" },
  ],
  "Completed": [
    { value: "3", label: "Sudah bayar lunas" },
  ],
};

function ChangeStatusOrderModal({ open, onClose, orderId, currentStatus, onSuccess }) {
  const [statusId, setStatusId] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStatusId("");
  }, [currentStatus, open]);

  const changeStatusOrder = useChangeStatusOrder;

  const options = statusOptionsByCurrentStatus[currentStatus] || [];

  const handleSave = async () => {
    if (!statusId) return;

    try {
      setLoading(true);
      await changeStatusOrder(orderId, statusId);
      onSuccess();
      onClose();
    } catch (error) {
      console.error("Gagal mengubah status:", error.response?.data || error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            borderRadius: "30px",
            width: "450px",
            maxWidth: "95%",
            px: 3,
            py: 2,
          },
        },
      }}
    >
      <DialogContent>
        <div className="text-center text-base font-medium mb-6">
          Ganti status pesanan
        </div>

        <div className="border-t border-gray-500 mb-10" />

        <div className="text-center text-sm mb-4">
          <div>ID pesanan: {orderId}</div>
          <div>Status saat ini: {currentStatus}</div>
          <div>Ganti status pembayaran ke:</div>
        </div>

        <FormControl fullWidth size="small">
          <Select
            value={statusId}
            onChange={(e) => setStatusId(e.target.value)}
            displayEmpty
            sx={{
              borderRadius: "10px",
              height: "40px",
            }}
          >
            <MenuItem value="" disabled>
              Pilih status baru
            </MenuItem>

            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <div className="flex justify-between mt-8">
          <Button
            variant="contained"
            onClick={onClose}
            disabled={loading}
            sx={{
              backgroundColor: "#2B2B2B",
              borderRadius: "999px",
              px: 5,
              py: 1,
              textTransform: "none",
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "#1f1f1f",
              },
            }}
          >
            Batal
          </Button>

          <Button
            variant="contained"
            onClick={handleSave}
            disabled={loading || !statusId}
            sx={{
              backgroundColor: "#72B957",
              borderRadius: "999px",
              px: 5,
              py: 1,
              textTransform: "none",
              fontSize: "14px",
              "&:hover": {
                backgroundColor: "#5B9941",
              },
            }}
          >
            {loading ? "Menyimpan..." : "Simpan"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ChangeStatusOrderModal;