import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/Components/ui/textarea";
import React from "react";
Input;
function AddTransaction() {
    return (
        <>
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-7">
                    <h1 className="text-center text-2xl mt-5 font-bold">
                        Form add Transaction
                    </h1>
                    {/* form trnsaction */}
                    <form className=" w-full md:w-[70%] m-auto" action="">
                        {/* nama pemesan*/}
                        <div>
                            <label className="font-bold" htmlFor="nama_unit">
                                Nama
                            </label>
                            <Input
                                id="nama_pemesan"
                                className="dark:bg-gray-800 mt-2 "
                                type="text"
                                placeholder="name pemesan....."
                            />
                        </div>
                        {/* alamat*/}
                        <div className="mt-2">
                            <label
                                className="font-bold mt-2"
                                htmlFor="slug_unit"
                            >
                                Alamat
                            </label>
                            <Textarea
                                id="alamat_pemesan"
                                className="dark:bg-gray-800 mt-3"
                                type="text"
                                placeholder="alamat....."
                            />
                        </div>

                        {/* no.hp*/}
                        <div className="mt-2">
                            <label className="font-bold" htmlFor="nama_unit">
                                No.hp
                            </label>
                            <Input
                                id="no_hp"
                                className="dark:bg-gray-800 mt-2 "
                                type="text"
                                placeholder="No_hp..."
                            />
                        </div>
                        {/* unit pilihan */}
                        <div className="mt-2">
                            <label
                                className="font-bold mb-3"
                                htmlFor="nama_unit"
                            >
                                Pilihan unit
                            </label>
                            <Select className="dark:bg-gray-800">
                                <SelectTrigger className="w-full dark:bg-gray-800 mt-2">
                                    <SelectValue placeholder="Unit pilihan" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">
                                        avanza
                                    </SelectItem>
                                    <SelectItem value="dark">brio</SelectItem>
                                    <SelectItem value="dark">
                                        fortuner
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        {/* harga */}
                        <div className="mt-2">
                            <label className="font-bold" htmlFor="harga_unit">
                                Harga
                            </label>
                            <Input
                                id="harga_unit"
                                className="dark:bg-gray-800 mt-3 "
                                type="number"
                                placeholder="harga unit....."
                            />
                        </div>

                        {/* tanggal sewa */}
                        <div className="mt-2">
                            <label
                                className="font-bold"
                                htmlFor="tanggal_mulai"
                            >
                                Tanggal Sewa
                            </label>
                            <Input
                                id="tanggal_mulai"
                                className="dark:bg-gray-800 mt-3 p-2 "
                                type="date"
                                placeholder="tanggal sewa....."
                            />
                        </div>
                        {/* jam sewa */}
                        <div className="mt-2">
                            <label className="font-bold" htmlFor="jam_sewa">
                                jam sewa
                            </label>
                            <Input
                                id="tanggal_mulai"
                                className="dark:bg-gray-800 mt-3 p-2 "
                                type="time"
                                placeholder="tanggal sewa....."
                            />
                        </div>
                        {/* tanggal berakhir */}
                        <div className="mt-2">
                            <label
                                className="font-bold"
                                htmlFor="tanggal_mulai"
                            >
                                Tanggal berakhir
                            </label>
                            <Input
                                id="tanggal_mulai"
                                className="dark:bg-gray-800 mt-3 p-2 "
                                type="date"
                                placeholder="tanggal berakhir....."
                            />
                        </div>

                        {/* jam berakhir */}
                        <div className="mt-2">
                            <label
                                className="font-bold"
                                htmlFor="tanggal_mulai"
                            >
                                jam berakhir
                            </label>
                            <Input
                                id="tanggal_mulai"
                                className="dark:bg-gray-800 mt-3 p-2 "
                                type="time"
                                placeholder="tanggal sewa....."
                            />
                        </div>
                        {/* titik jemput */}
                        <div className="mt-2">
                            <label
                                className="font-bold mt-2"
                                htmlFor="titik_jemput"
                            >
                                titik Jemput
                            </label>
                            <Textarea
                                id="titik_jemput"
                                className="dark:bg-gray-800 mt-3"
                                type="text"
                                placeholder="alamat....."
                            />
                        </div>
                        {/* total harga */}
                        <div className="mt-2">
                            <label
                                className="font-bold"
                                htmlFor="tanggal_mulai"
                            >
                                Total
                            </label>
                            <Input
                                id="tanggal_mulai"
                                className="dark:bg-gray-800 mt-3 p-2 "
                                type="number"
                                placeholder="tanggal sewa....."
                            />
                        </div>
                        {/* submit button */}
                        <div className="flex justify-center mt-5">
                            <Button className="m-auto bg-blue-600 text-white">
                                Submit
                            </Button>
                        </div>
                    </form>
                    {/* add form transaction */}
                </div>
            </div>
        </>
    );
}

export default AddTransaction;
