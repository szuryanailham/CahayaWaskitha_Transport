import CardTransaction from "@/Components/DashboardComponent/CardTransaction";
import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import React from "react";

function AllTransaction_Des() {
    return (
        <>
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-5">
                    {/* table transaction */}
                    <CardTransaction />
                    <CardTransaction />
                    <CardTransaction />
                </div>
            </div>
        </>
    );
}

export default AllTransaction_Des;
