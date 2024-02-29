import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { FormatRupiah } from "@arismun/format-rupiah";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Button } from "@/Components/ui/button";

export default function Index({ units }) {
    console.log(units.data);
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
            destroy(`/admin/unit/${id}`);
        }
    };

    useEffect(() => {
        // tidak dijalankan ketika pertama kali onload
        if (searchQuery !== false) {
            const delay = setTimeout(() => {
                get("/admin/unit", {
                    preserveState: true,
                    replace: true,
                });
            }, 500);

            return () => clearTimeout(delay);
        }
    }, [searchQuery]);

    return (
        <>
            <Head title="Unit" />
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <div className="">
                    {/* button add unit */}
                    <div className="flex justify-end p-3">
                        <Button className="bg-blue-700 dark:text-white mt-5">
                            <Link href="/admin/unit/create" className="flex">
                                <IoMdAddCircle className="text-lg m-1" />
                                <p>Add Unit</p>
                            </Link>
                        </Button>
                    </div>
                    {/* end button */}
                    <h1 className="text-xl font-bold text-center">
                        List All Unit
                    </h1>
                    {/* TABEL */}
                    <Table className="mt-3">
                        <TableHeader>
                            <TableRow>
                                <TableHead>no</TableHead>
                                <TableHead className="w-[150px]">
                                    KD-unit
                                </TableHead>
                                <TableHead>Nama Unit</TableHead>
                                <TableHead>Image</TableHead>
                                <TableHead>price</TableHead>
                                <TableHead>Category</TableHead>
                                <TableHead className="w-[150px]">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {/* content of table */}
                            {units.data.map((unit) => (
                                <TableRow
                                    key={unit.id}
                                    className={unit.is_deleted ? "hidden" : ""}
                                >
                                    <TableCell className="font-medium">
                                        1
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {unit.id}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {unit.name}
                                    </TableCell>
                                    <TableCell>
                                        {console.log(unit.featured_image)}
                                        <img
                                            className="w-18 h-12"
                                            src={`/storage/${unit.featured_image}`}
                                            alt="unit"
                                        />
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {<FormatRupiah value={unit.price} />}
                                    </TableCell>
                                    <TableCell className="font-medium">
                                        {unit.category}
                                    </TableCell>
                                    {/* button update */}
                                    <TableCell className="font-medium flex gap-1">
                                        <Link
                                            href={`/admin/unit/${unit.id}/edit`}
                                        >
                                            <Button className=" bg-yellow-500  flex justify-center">
                                                <FaPenToSquare className="text-md text-black" />
                                            </Button>
                                        </Link>

                                        {/* deleted  button */}
                                        <Button
                                            className="bg-red-600"
                                            onClick={() => {
                                                unit.is_deleted
                                                    ? put(
                                                          `/admin/unit/${unit.id}/restore`
                                                      )
                                                    : onHandleDelete(unit.id);
                                            }}
                                        >
                                            <MdDeleteOutline className="text-lg" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <TableRow className="w-full ">
                                <TableCell>
                                    <div className="pagination">
                                        {units.meta.links.map((data) => {
                                            return (
                                                <Link
                                                    key={data.label}
                                                    href={data.url}
                                                    className={`px-3 py-1 hover:bg-indigo-500 text-white-700 rounded-md ${
                                                        data.active
                                                            ? "bg-indigo-500"
                                                            : ""
                                                    }`}
                                                >
                                                    {data.label ===
                                                    "&laquo; Previous"
                                                        ? "«"
                                                        : data.label ===
                                                          "Next &raquo;"
                                                        ? "»"
                                                        : data.label}
                                                </Link>
                                            );
                                        })}
                                    </div>
                                </TableCell>
                            </TableRow>
                            {/* end  content of table */}
                        </TableBody>
                    </Table>
                    {/* END OF TABLE */}
                </div>
            </div>
        </>
    );
}
