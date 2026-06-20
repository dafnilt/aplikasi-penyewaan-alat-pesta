import {
  Dialog,
  DialogContent,
  Button,
  TextField,
  Checkbox,
} from "@mui/material";
import { useState } from "react";
import { useAddAdmin } from "../hooks/useAddAdmin";
import { notification } from "antd";
import { textFieldStyle } from "../utils/textFieldStyle";
import { checkboxStyle } from "../utils/checkboxStyle";

function AddAdminModal ({ open, onClose, onSuccess }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [isActive, setIsActive] = useState(true);
    const [loading, setLoading] = useState(false);
    const [usernameError, setUsernameError] = useState("");
    const addAdmin = useAddAdmin;

    const handleSave = async () => {
        if (!username || !password || !fullName) return;

        try {
            setLoading(true);
            await addAdmin(username, password, fullName, isActive);
            onSuccess();
            onClose();
            notification.success({
                message: "Admin berhasil ditambahkan",
                description: `Admin dengan username "${username}" berhasil ditambahkan.`,
                placement: "topRight",
                style: {
                  borderRadius: "16px",
                  border: "1px solid #74B559",
                  background: "#F8FCF6",
                },
            });    
        } catch (error) {
            const errorData = error.response?.data;

            if (errorData?.message === "Username already exists.") {
              setUsernameError("Username sudah digunakan.");
              return;
            }
            notification.error({
                message: "Gagal menambahkan admin",
                description: errorData?.message || "Terjadi kesalahan saat menambahkan admin.",
                placement: "topRight",
                style: {
                  borderRadius: "16px",
                  border: "1px solid #FFCCC7",
                  background: "#FFF2F0",
                },
            });    

            console.error("Gagal menambahkan admin:", errorData || error);
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
                    Tambah Admin
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
                        disabled={loading || !username || !password || !fullName || Boolean(usernameError)}
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

export default AddAdminModal;