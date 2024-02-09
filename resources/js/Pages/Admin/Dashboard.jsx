import LandingPage_dash from "@/Components/DashboardComponent/LandingPage_dash";
import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState, useRef, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
export default function Dashboard({ total }) {
    const { auth } = usePage().props;
    const { component } = usePage();
    return (
        <>
            <SidebarDashboard />
            <div className="p-4 sm:ml-64">
                <NavDashboard username={auth.user.name} />
                <div className="mt-5">
                    <LandingPage_dash order={total.order} total={total.price} />
                </div>
            </div>
        </>
    );
}
