import { Link } from "@inertiajs/react";
import React, { useState, useRef, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
function SidebarDashboard() {
    const [isOpen, setIsOpen] = useState(true);
    const sidebarRef = useRef(null);
    const btnActive = () => {
        setIsOpen((current) => !current);
    };
    console.log("Nilai saat ini:", isOpen);
    return (
        <>
            {/* button trigger */}
            <button
                onClick={btnActive}
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>
            {/* sidebar component */}
            <aside
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    isOpen ? `-translate-x-full` : ""
                }  sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {/* arrow Back */}
                        <li
                            onClick={btnActive}
                            className="flex justify-end md:hidden"
                        >
                            <img
                                src="/images/dashboard/back.svg"
                                alt="back-icon"
                            />
                        </li>
                        {/* logo brandd */}
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="/images/logo_brand.svg"
                                    className="h-8 mb-3"
                                    alt="Cahaya_waskitha"
                                />
                            </Link>
                        </li>
                        {/* Home */}
                        <li>
                            <Link
                                href="/"
                                className=" flex md:hidden items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"
                            >
                                <img
                                    src="/images/dashboard/Home.svg"
                                    className="h-7 w-7 mt-1"
                                    alt="Dashboard"
                                />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Home
                                </span>
                            </Link>
                        </li>
                        {/* Dashboard  */}
                        <li>
                            <Link
                                href="/admin/dashboard"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:text-black"
                            >
                                <img
                                    src="/images/dashboard/Chart.svg"
                                    className="h-7 mt-1"
                                    alt="Dashboard"
                                />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Dashboard
                                </span>
                            </Link>
                        </li>
                        {/* all unit  */}
                        <li>
                            <Link
                                href="/admin/unit"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="/images/dashboard/car.svg"
                                    className="h-5 mt-1"
                                    alt="Dashboard"
                                />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    All Unit
                                </span>
                            </Link>
                        </li>
                        {/* transaction  */}
                        <li>
                            <Link
                                href="/admin/order"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="/images/dashboard/transaction.svg"
                                    className="h-5 w-6 mt-1"
                                    alt="Dashboard"
                                />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Transaction
                                </span>
                            </Link>
                        </li>
                        {/* feedback */}
                        <li>
                            <Link
                                href="/admin/testimony"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="/images/dashboard/Chat.svg"
                                    className="h-5  mt-1"
                                    alt="Dashboard"
                                />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Feed Back
                                </span>
                            </Link>
                        </li>

                        <h1 className="mr-10 p-3 text-zinc-500">Other</h1>
                        {/* add unit */}
                        <li>
                            <Link
                                href="/admin/unit/create"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="/images/dashboard/ADD.svg"
                                    className="h-5  mt-1"
                                    alt="Dashboard"
                                />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Add Unit
                                </span>
                            </Link>
                        </li>
                        {/* Promo */}
                        <li>
                            <Link
                                href="/admin/promo"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="/images/dashboard/Vector.svg"
                                    className="h-5  mt-1"
                                    alt="Dashboard"
                                />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Promo
                                </span>
                            </Link>
                        </li>
                        {/* Account */}
                        <li>
                            <Link
                                method="POST"
                                as="button"
                                href={"/logout"}
                                className="flex items-center p-2 text-red-500 font-bold rounded-lg  hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <FiLogOut />
                                <span className="flex-1 ms-3 whitespace-nowrap font-bold text-red-500">
                                    Logout
                                </span>
                            </Link>
                        </li>
                        {/* logout */}
                    </ul>
                </div>
            </aside>
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
                        href="/admin/promo"
                        className={
                            component === "Admin/Promo/Index" ? "active" : ""
                        }
                    >
                        Promo
                    </Link>
                </li>
            </ul> */}
        </>
    );
}

export default SidebarDashboard;
