import {
  Dialog,
  DialogContent,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useDeleteAdmin } from "../../hooks/useDeleteAdmin";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { notification } from "antd";

function DeleteAdminModal ({ open, onClose, onSuccess, adminData }) {
    const [loading, setLoading] = useState(false);
    const deleteAdmin = useDeleteAdmin;
    const handleDelete = async () => {
        if (!adminData?.id) return;

        try {
            setLoading(true);
            await deleteAdmin(adminData.id);
            onSuccess();
            onClose();
            notification.success({
                message: "Admin berhasil dihapus",
                description: `Admin dengan username "${adminData.username}" berhasil dihapus.`,
                placement: "topRight",
                style: {
                    borderRadius: "16px",
                    border: "1px solid #74B559",
                    background: "#F8FCF6",
                },
            });
        } catch (error) {
            console.error("Gagal menghapus admin:", error.response?.data || error);
            notification.error({
                message: "Gagal menghapus admin",
                description: error.response?.data || "Terjadi kesalahan saat menghapus admin.",
                placement: "topRight",
                style: {
                    borderRadius: "16px",
                    border: "1px solid #FFCCC7",
                    background: "#FFF2F0",
                },
            });
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
                        py: 1,
                    },
                },
            }}
        >
            <DialogContent>
                <div className="text-center text-base font-medium mb-6">
                    Hapus Admin
                </div>
                <div className="border-t border-gray-500 mb-10" />
                <div className="flex justify-center mb-6">
                <ErrorOutlineOutlinedIcon
                    sx={{
                    fontSize: 100,
                    color: "#ef4444",
                    }}
                />
                </div>
                <div className="text-center text-sm text-gray-600">
                    Hapus {adminData?.username} dari daftar admin?
                </div>
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
                        onClick={handleDelete}
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
                        {loading ? "Menghapus..." : "Hapus"}
                    </Button>
                    </div>
            </DialogContent>                
        </Dialog>
    )

}
export default DeleteAdminModal;