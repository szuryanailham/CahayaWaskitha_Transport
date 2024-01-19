import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import React from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

function PromoForm() {
    return (
        <>
            <SidebarDashboard />
            <div className="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-5">
                    {/* List Promo */}
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[150px]">
                                    KD-promo
                                </TableHead>
                                <TableHead>Nama Promo</TableHead>
                                <TableHead>Image</TableHead>
                                <TableHead className="w-[150px]">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">
                                    INV001
                                </TableCell>
                                <TableCell>Promo lebaran</TableCell>
                                <TableCell>
                                    <img
                                        className="w-18 h-12"
                                        src="/images/promo.png"
                                        alt="Promo lebaran"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>

                    {/* Input New Kode Promo */}
                    <div className="w-[75%] m-auto mt-10">
                        <h1 className="text-2xl font-bold text-center">
                            Upload New Promo
                        </h1>
                        {/* Input New Nama Promo */}
                        <Input
                            id="kode_promo"
                            type="text"
                            placeholder="Nama Promo"
                            className="mt-5"
                        />
                        {/* Upload File Promo */}
                        <div className="flex items-center justify-evenly  w-full mt-5 gap-2">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-[50%] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center p-6">
                                    <svg
                                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            Click to upload
                                        </span>{" "}
                                        your promo here
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        PNG, JPG, or GIF (MAX. 800x400px)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>

                            {/* kriteria uploud */}
                            <div className="w-[50%] p-5">
                                <h1 className=" text-sm md:text-2xl font-bold mb-4">
                                    Ketentuan Unggah Gambar:
                                </h1>
                                <ul className="list-disc text-xs md:text-xl pl-5">
                                    <li className="mb-2">
                                        Unggah gambar dengan ukuran ....
                                    </li>
                                    <li className="mb-2">
                                        Unggah gambar dengan resolusi ....
                                    </li>
                                    <li>
                                        edit gambar dan unggah ulang jika gambar
                                        mengalami kerusakan atau lag
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* button */}
                        <div className=" flex justify-center mt-10">
                            <Button className="m-auto">Uploud</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PromoForm;
