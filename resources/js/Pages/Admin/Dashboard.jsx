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
            <div class="p-4 sm:ml-64">
                <NavDashboard username={auth.user.name} />
                <div className="mt-5">
                    <div>Welcome, {auth.user.name}</div>
                    <div>
                        <Link
                            method="POST"
                            as="button"
                            href={"/logout"}
                            style={{ textDecoration: "underline" }}
                        >
                            Logout
                        </Link>
                    </div>

                    <ul>
                        <li>
                            <Link
                                href="/admin/dashboard"
                                className={
                                    component === "Admin/Dashboard"
                                        ? "active"
                                        : ""
                                }
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/order"
                                className={
                                    component === "Admin/Order/Index"
                                        ? "active"
                                        : ""
                                }
                            >
                                Order
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/unit"
                                className={
                                    component === "Admin/Unit/Index"
                                        ? "active"
                                        : ""
                                }
                            >
                                Unit
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/testimony"
                                className={
                                    component === "Admin/Testimony/Index"
                                        ? "active"
                                        : ""
                                }
                            >
                                Testimony
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/admin/promo"
                                className={
                                    component === "Admin/Promo/Index"
                                        ? "active"
                                        : ""
                                }
                            >
                                Promo
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div>Welcome, {auth.user.name}</div>
            <div>
                <Link
                    method="POST"
                    as="button"
                    href={"/logout"}
                    style={{ textDecoration: "underline" }}
                >
                    Logout
                </Link>
            </div>

            <ul>
                <li>
                    <Link
                        href="/admin/dashboard"
                        className={
                            component === "Admin/Dashboard" ? "active" : ""
                        }
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/order"
                        className={
                            component === "Admin/Order/Index" ? "active" : ""
                        }
                    >
                        Order
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/unit"
                        className={
                            component === "Admin/Unit/Index" ? "active" : ""
                        }
                    >
                        Unit
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/testimony"
                        className={
                            component === "Admin/Testimony/Index"
                                ? "active"
                                : ""
                        }
                    >
                        Testimony
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/promo-banner"
                        className={
                            component === "Admin/PromoBanner" ? "active" : ""
                        }
                    >
                        Promo Banner
                    </Link>
                </li>
            </ul> */}
        </>
    );
}
