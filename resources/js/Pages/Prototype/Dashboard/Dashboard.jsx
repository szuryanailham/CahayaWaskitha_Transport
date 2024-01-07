import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import React from "react";
function Dashboard() {
    return (
        <>
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <h1>Hallo world</h1>
            </div>
        </>
    );
}

export default Dashboard;
