import { useState } from "react";
import SortableTable from "../components/SortableTable";
import Skeleton from "@mui/material/Skeleton";
import LayoutAdmin from "../layout/LayoutAdmin";

function AdminAccounts() {
    // const [loading, setLoading] = useState([]);
    const columns = [
        { id: "username", label: "Username"},
        { id: "fullName", label: "Full Name"},
        { id: "role", label: "Role"},
        { id: "isActive" , label: "Status", render: (value) => value ? "Active" : "Inactive" },
    ]

    // if (loading) {
    //     return (
    //         <LayoutAdmin className = "bg-[#F3F3F3] min-h-screen">
    //             <div className="text-sm font-semibold text-[#1f1f1f] mb-6">
    //                 Daftar Akun Admin
    //             </div>
    //             <Skeleton variant="rounded" height={350} />
    //         </LayoutAdmin>
    //     )
    // }
    return (
        <LayoutAdmin className = "bg-[#F3F3F3] min-h-screen">
            <div className="text-sm font-semibold text-[#1f1f1f] mb-6">
                Daftar Akun Admin
            </div>
            <SortableTable
                columns={columns}
                rows={[]} // Ganti dengan data akun admin yang sebenarnya
                defaultSort={{ columnId: "username", direction: "asc" }}
                emptyMessage="Tidak ada akun admin yang tersedia."
            />
        </LayoutAdmin>        
    )
}

export default AdminAccounts;