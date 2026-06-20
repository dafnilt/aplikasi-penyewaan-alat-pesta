import {
  Dialog,
  DialogContent,
  Button,
  TextField,
  Checkbox,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useChangeAdmin } from "../../hooks/useChangeAdmin";
import { notification } from "antd";
import { textFieldStyle } from "../../utils/textFieldStyle";
import { checkboxStyle } from "../../utils/checkboxStyle";

function ChangeAdminModal ({ open, onClose, onSuccess, adminData }) {
    const [id, setId] = useState("");
    const [fullName, setFullName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [loading, setLoading] = useState(false);
    const [usernameError, setUsernameError] = useState("");
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

            notification.success({
                message: "Admin berhasil diubah",
                description: `Admin dengan username "${username}" berhasil diubah.`,
                placement: "topRight",
                style: {
                  borderRadius: "16px",
                  border: "1px solid #74B559",
                  background: "#F8FCF6",
                },
            });

            onSuccess();
            onClose();
        } catch (error) {
            const errorData = error.response?.data;

            if (errorData?.message === "Username already taken by another account.") {
                setUsernameError("Username sudah digunakan oleh akun lain.");
                return;
            }
            notification.error({
                message: "Gagal mengubah admin",
                description: errorData?.message || "Terjadi kesalahan saat mengubah admin.",
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

    const handleUsernameChange = (e) => {
      const value = e.target.value;

      setUsername(value);

      if (/\s/.test(value)) {
        setUsernameError("Username tidak boleh mengandung spasi.");
      } else {
        setUsernameError("");
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
                      sx={textFieldStyle}
                    />
                  </div>
                  
                  <div className="grid grid-cols-[90px_1fr] items-center gap-4">
                    <label>Username:</label>
                    <TextField
                      size="small"
                      value={username}
                      onChange={handleUsernameChange}
                      error={Boolean(usernameError)}
                      helperText={usernameError}
                      sx={textFieldStyle}
                    />
                  </div>

                  <div className="grid grid-cols-[90px_1fr] items-center gap-4">
                    <label>Password:</label>
                    <TextField
                      size="small"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Kosongkan jika tidak ingin diubah"
                      sx={textFieldStyle}
                    />
                  </div>

                  <div className="grid grid-cols-[90px_1fr] items-center gap-4">
                    <label>Aktif:</label>
                    <Checkbox
                      checked={isActive}
                      onChange={(e) => setIsActive(e.target.checked)}
                      sx={checkboxStyle}
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
                        disabled={loading || !fullName || !username || Boolean(usernameError)}
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