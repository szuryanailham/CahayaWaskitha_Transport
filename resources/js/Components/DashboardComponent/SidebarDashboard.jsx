import React, { useState, useRef, useEffect } from "react";
import { FiLogOut } from "react-icons/fi";
import { Head, Link, usePage } from "@inertiajs/react";

function SidebarDashboard() {
    const [isOpen, setIsOpen] = useState(true);
    const sidebarRef = useRef(null);
    const { auth } = usePage().props;
    const { component } = usePage();

    // function for change statae by button
    const btnActive = () => {
        setIsOpen((current) => !current);
    };

    return (
        <>
            {/* button trigger */}

            {/* button trigger */}
            {/* ... (unchanged) */}

            {/* sidebar component */}
            <aside
                ref={sidebarRef}
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${
                    isOpen ? `-translate-x-full` : ""
                }  sm:translate-x-0`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
                    {/* logo  */}
                    <Link
                        href="#"
                        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                    >
                        <img
                            src="/images/logo_brand.svg"
                            className="h-10 w-[50%] mt-1"
                            alt="Transaction"
                        />
                    </Link>
                    {/* end logo  */}
                    <ul className="space-y-2 font-medium">
                        {/* logo  */}
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="/images/logo_brand"
                                    className="h-5 w-6 mt-1"
                                    alt="Transaction"
                                />
                            </Link>
                        </li>
                        {/* end logo  */}
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="/images/dashboard/transaction.svg"
                                    className="h-5 w-6 mt-1"
                                    alt="Transaction"
                                />
                            </Link>
                        </li>
                        {/* dashboard */}

                        {/* end dashboard  */}

                        {/* All unit */}
                        <li>
                            <Link
                                href="#"
                                className="flex items-center p-2 text-white rounded-lg dark:text-white hover:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <img
                                    src="/images/dashboard/transaction.svg"
                                    className="h-5 w-6 mt-1"
                                    alt="Transaction"
                                />
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Transaction
                                </span>
                            </Link>
                        </li>
                        {/* All unit */}

                        {/* trnasaction */}

                        {/*  end trnasaction */}

                        {/* Testimony */}

                        {/* end Testimony */}

                        {/* add Unit  */}

                        {/* Promo */}

                        {/* account */}
                    </ul>
                </div>
            </aside>
        </>
    );
}

export default SidebarDashboard;
