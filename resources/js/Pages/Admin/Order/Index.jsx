import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import CardTransaction from "@/Components/DashboardComponent/CardTransaction";
import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import React from "react";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

export default function Index({ statusMessage, orders }) {
    const {
        delete: destroy,
        put,
        get,
        data,
        setData,
    } = useForm({
        q: new URLSearchParams(window.location.search).get("q") || "",
    });

    const [searchQuery, setSearchQuery] = useState(false);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
        setSearchQuery(event.target.value);
    };

    const onHandleDelete = (id) => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this data?"
        );

        if (confirmation) {
            destroy(`/admin/order/${id}`);
        }
    };

    useEffect(() => {
        // tidak dijalankan ketika pertama kali onload
        if (searchQuery !== false) {
            const delay = setTimeout(() => {
                get("/admin/order", {
                    preserveState: true,
                    replace: true,
                });
            }, 500);

            return () => clearTimeout(delay);
        }
    }, [searchQuery]);
    {
    }
    console.log(orders.data);
    return (
        <>
            <Head title="Order" />
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-5">
                    <div className="w-full flex gap-2 justify-end mt-10">
                        <Link
                            className="ml-2 text-blue-500"
                            href="/admin/order/create"
                        >
                            <Button className="dark:bg-blue-600 dark:text-white">
                                Create
                            </Button>
                        </Link>
                        {/* search input */}
                        <Input
                            type="text"
                            name="q"
                            onChange={(e) => onHandleChange(e)}
                            value={data.q}
                            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white flex"
                            placeholder="Search transaction ...."
                        />
                    </div>

                    {/* table transaction */}
                    {orders.data.map((order) => {
                        console.log(order.is_deleted); // Moved console.log here
                        return (
                            <div key={order.id}>
                                <CardTransaction
                                    nama_unit={order.unit}
                                    kode_unit={order.no_order}
                                    pemesan_unit={order.name}
                                    no_pemesan={order.phone}
                                    alamat={order.address}
                                    total_hari={order.duration}
                                    total_harga={order.total_price}
                                    tgl_mulai={order.start_date}
                                    tgl_akhir={order.end_date}
                                    lokasi_penjemputan={order.pickup_address}
                                    id={order.id}
                                    is_deleted={order.is_deleted}
                                    image={order.unit_image}
                                />
                            </div>
                        );
                    })}
                    <div className="pagination">
                        {orders.meta.links.map((data) => {
                            return (
                                <Link
                                    key={data.label}
                                    href={data.url}
                                    className={`px-3 py-1 hover:bg-indigo-500 text-white-700 rounded-md ${
                                        data.active ? "bg-indigo-500" : ""
                                    }`}
                                >
                                    {data.label === "&laquo; Previous"
                                        ? "«"
                                        : data.label === "Next &raquo;"
                                        ? "»"
                                        : data.label}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            {statusMessage?.message && alert(statusMessage.message)}
        </>
    );
}
