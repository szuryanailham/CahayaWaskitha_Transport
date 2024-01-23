import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import LandingPage_dash from "@/Components/DashboardComponent/LandingPage_dash";
import React from "react";
function Dashboard() {
    return (
        <>
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-5">
                    <LandingPage_dash />
                </div>
            </div>
        </>
    );
}

export default Dashboard;
