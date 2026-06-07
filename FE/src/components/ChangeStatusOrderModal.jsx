import {
  Dialog,
  DialogContent,
  FormControl,
  Select,
  MenuItem,
  Button,
} from "@mui/material";
import { useState } from "react";

function ChangeStatusOrderModal({ open, onClose, orderId, currentStatus, onSave }) {
  const [status, setStatus] = useState(currentStatus || "");

  const handleSave = () => {
    onSave(status);
    onClose();
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
            <MenuItem value="Pending Payment">Belum Bayar</MenuItem>
            <MenuItem value="Down Payment 50%">Sudah bayar 50%</MenuItem>
            <MenuItem value="Fully Paid">Sudah bayar lunas</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
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
            Simpan
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ChangeStatusOrderModal;