import { useState, useEffect } from "react";
import SortableTable from "../components/SortableTable";
import Skeleton from "@mui/material/Skeleton";
import LayoutAdmin from "../layout/LayoutAdmin";
import { useAdminList } from "../hooks/useAdminList";
import { getStatusColor} from "../utils/getStatusColor";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function AdminAccounts() {
    const [rows, setRows] = useState([])
    const [loading, setLoading] = useState(false);
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
                Daftar Akun Admin
            </div>
            <SortableTable
                columns={columns}
                rows={rows}
                defaultSort={{ columnId: "username", direction: "asc" }}
                emptyMessage="Tidak ada akun admin yang tersedia."
            />
        </LayoutAdmin>        
    )
}

export default AdminAccounts;