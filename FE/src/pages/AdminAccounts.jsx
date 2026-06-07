import { useState, useEffect } from "react";
import SortableTable from "../components/SortableTable";
import Skeleton from "@mui/material/Skeleton";
import LayoutAdmin from "../layout/LayoutAdmin";
import { useAdminList } from "../hooks/useAdminList";
import { getStatusColor} from "../utils/getStatusColor";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "@mui/material/Button";
import AddIcon from '@mui/icons-material/Add';
import AddAdminModal from "../components/AddAdminModal";
import ChangeAdminModal from "../components/ChangeAdminModal";

function AdminAccounts() {
    const [rows, setRows] = useState([]);
    const [openAddModal, setOpenAddModal] = useState(false);
    const [openChangeModal, setOpenChangeModal] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleOpenAddModal = () => {
        setOpenAddModal(true);
    };

    const handleOpenChangeModal = (admin) => {
        setSelectedAdmin(admin);
        setOpenChangeModal(true);
    };

    const columns = [
        { id: "no", label:"No.", 
            render: (_, __, index) => index + 1 },
        { id: "username", label: "Username"},
        { id: "fullName", label: "Full Name"},
        { id: "role", label: "Role"},
        { id: "isActive" , label: "Status", 
            render: (value) => (
                <div 
                    className="px-1 py-1 rounded-full text-xs text-white text-center"
                    style={{ backgroundColor: getStatusColor(value) }}
                >
                    {value ? "Aktif" : "Non-Aktif"}
                </div>        
            ), 
        },
        {
            id: "actions",
            label: "Actions",
            render: (_, row) => (
                <div className="flex item-center gap-2">
                    <IconButton
                        size="small"
                        color="success"
                        onClick={() => handleOpenChangeModal(row)}
                    >
                        <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        size="small"
                        color="error"
                    >
                        <DeleteIcon fontSize="small" />
                    </IconButton>
                </div>
            )
        }
    ]

    const fetchAdminAccounts = async () => {
        try {
            setLoading(true);
            const response = await useAdminList();
            setRows(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchAdminAccounts();
    }, []);

    if (loading) {
        return (
            <LayoutAdmin className = "bg-[#F3F3F3] min-h-screen">
                <div className="text-sm font-semibold text-[#1f1f1f] mb-6">
                    Daftar Akun Admin
                </div>
                <Skeleton variant="rounded" height={350} />
            </LayoutAdmin>
        )
    }
    return (
        <LayoutAdmin className = "bg-[#F3F3F3] min-h-screen">
            <div className="text-sm font-semibold text-[#1f1f1f] mb-6">
                <span>Daftar Admin</span>
                <span className="float-right">
                    <Button 
                        variant="contained" 
                        disableElevation
                        size="small"
                        sx={{
                            backgroundColor: "#72B957",
                            textTransform: "none",
                            fontSize: "14px"
                        }}
                        startIcon={<AddIcon />}
                        onClick={() => handleOpenAddModal()}
                    >
                        Tambah Admin
                    </Button>
                </span>
            </div>
            <SortableTable
                columns={columns}
                rows={rows}
                defaultSort={{ columnId: "username", direction: "asc" }}
                emptyMessage="Tidak ada akun admin yang tersedia."
            />
            <AddAdminModal
                open={openAddModal}
                onClose={() => setOpenAddModal(false)}
                onSuccess={fetchAdminAccounts}
            />
            <ChangeAdminModal
                open={openChangeModal}
                onClose={() => setOpenChangeModal(false)}
                onSuccess={fetchAdminAccounts}
                adminData={selectedAdmin}
            />    
        </LayoutAdmin>        
    )
}

export default AdminAccounts;