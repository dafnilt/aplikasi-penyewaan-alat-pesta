import {
  Dialog,
  DialogContent,
  Button,
  TextField,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useChangeAdmin } from "../hooks/useChangeAdmin";

function ChangeAdminModal ({ open, onClose, onSuccess, adminData }) {
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [loading, setLoading] = useState(false);
    const changeAdmin = useChangeAdmin;

    useEffect(() => {
        setId(adminData?.id || "");
        setFullName(adminData?.fullName || "");
        setUsername(adminData?.username || "");
        setPassword("");
        setIsActive(adminData?.isActive || false);
    }, [adminData]);

    const handleSave = async () => {
        if (!id || !fullName || !username ) return;

        try {
            setLoading(true);
            await changeAdmin(id, fullName, username, password, isActive);
            onSuccess();
            onClose();
        } catch (error) {
            console.error("Gagal mengubah admin:", error.response?.data || error);
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
                    Ubah Admin
                </div>
                <div className="border-t border-gray-500 mb-10" />
                <div className="space-y-3 max-w-[430px] mx-auto">
                  <div className="grid grid-cols-[90px_1fr] items-center gap-4">
                    <label>Nama:</label>
                    <TextField
                      size="small"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "999px",
                          height: "28px",
                        },
                      }}
                    />
                  </div>
                  
                  <div className="grid grid-cols-[90px_1fr] items-center gap-4">
                    <label>Username:</label>
                    <TextField
                      size="small"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "999px",
                          height: "28px",
                        },
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-[90px_1fr] items-center gap-4">
                    <label>Password:</label>
                    <TextField
                      size="small"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "999px",
                            height: "28px",
                        }
                      }}
                    />
                  </div>

                  <div className="grid grid-cols-[90px_1fr] items-center gap-4">
                    <label>Aktif:</label>
                    <Checkbox
                      checked={isActive}
                      onChange={(e) => setIsActive(e.target.checked)}
                      sx={{
                        p: 0,
                        color: "#1f1f1f",
                        "&.Mui-checked": {
                          color: "#1f1f1f",
                        },
                      }}
                    />
                  </div>
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
                        onClick={handleSave}
                        disabled={loading || !fullName || !username }
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
    )
}

export default ChangeAdminModal;