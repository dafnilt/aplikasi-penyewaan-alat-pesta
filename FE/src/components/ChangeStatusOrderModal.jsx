import {
  Dialog,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useChangeStatusOrder } from "../hooks/useChangeStatusOrder";
import { useEffect } from "react";

function ChangeStatusOrderModal({ open, onClose, orderId, currentStatus, onSuccess }) {
  const [status, setStatus] = useState(currentStatus || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStatus(currentStatus || "");
  }, [currentStatus]);

  const handleSave = async () => {
    try {
      setLoading(true);
      await useChangeStatusOrder(orderId, status);
      if (onSuccess) {
        onSuccess();
      }
      onClose();
    } catch (error) {
      console.error("Gagal mengubah status pesanan:", error);
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
          <div>Ganti status pembayaran ke:</div>
        </div>

        <FormControl fullWidth size="small">
          <Select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            displayEmpty
            sx={{
              borderRadius: "10px",
              height: "40px",
            }}
          >
            <MenuItem value="1">Belum Bayar</MenuItem>
            <MenuItem value="2">Sudah bayar 50%</MenuItem>
            <MenuItem value="3">Sudah bayar lunas</MenuItem>
            <MenuItem value="4">Completed</MenuItem>
          </Select>
        </FormControl>

        <div className="flex justify-between mt-8">
          <Button
            variant="contained"
            onClick={onClose}
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
            disabled={loading}
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