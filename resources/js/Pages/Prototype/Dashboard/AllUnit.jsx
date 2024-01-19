import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import React from "react";
import { FaPenToSquare } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/Components/ui/button";
function AllUnit() {
    return (
        <>
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <div className="">
                    {/* button add unit */}
                    <div className="flex justify-end p-3">
                        <Button className="bg-blue-700 dark:text-white mt-5">
                            <IoMdAddCircle className="text-lg m-1" />
                            <p>Add Unit</p>
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
                            <TableRow>
                                <TableCell className="font-medium">1</TableCell>
                                <TableCell className="font-medium">
                                    Unit001
                                </TableCell>
                                <TableCell>
                                    <a href="" className="text-red-500">
                                        Innova
                                    </a>
                                </TableCell>
                                <TableCell>
                                    <img
                                        className="w-18 h-12"
                                        src="/images/promo.png"
                                        alt="Promo lebaran"
                                    />
                                </TableCell>
                                <TableCell>Rp.30000</TableCell>
                                <TableCell>Mobil</TableCell>
                                <TableCell className="flex justify-evenly gap-1 flex-col md:flex-row">
                                    {/* update button */}
                                    <Button className="bg-yellow-400">
                                        <FaPenToSquare className="text-md" />
                                    </Button>
                                    {/* deelte button */}
                                    <Button className="bg-red-600">
                                        <MdDeleteOutline className="text-lg" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    {/* END OF TABLE */}
                </div>
            </div>
        </>
    );
}

export default AllUnit;
