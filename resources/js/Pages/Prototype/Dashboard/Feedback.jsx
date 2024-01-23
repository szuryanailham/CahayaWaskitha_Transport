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

function Feedback() {
    return (
        <>
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-10">
                    <h1 className="text-xl font-bold text-center">
                        All feedback
                    </h1>
                    {/* table data feedback */}
                    <Table className="mt-5">
                        <TableHeader>
                            <TableRow>
                                <TableHead>no</TableHead>
                                <TableHead>nama</TableHead>
                                <TableHead>email</TableHead>
                                <TableHead>nilai</TableHead>
                                <TableHead>comment</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium">1</TableCell>
                                <TableCell className="font-medium">
                                    bambang
                                </TableCell>
                                <TableCell>
                                    <a href="" className="text-red-500">
                                        bambang@gmail.com
                                    </a>
                                </TableCell>
                                <TableCell>9/10</TableCell>
                                <TableCell>
                                    <p className="font-bold">
                                        Category : kebersihan{" "}
                                    </p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Excepturi sint dolore
                                    perferendis porro omnis eveniet placeat ad
                                    possimus velit assumenda.
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    {/* end of table */}
                </div>
            </div>
        </>
    );
}

export default Feedback;
