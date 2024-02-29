import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { Head, usePage } from "@inertiajs/react";

export default function Testimony({ testimonies }) {
    console.log(testimonies);
    const { auth } = usePage().props;

    return (
        <>
            <Head title="Testimony" />
            <SidebarDashboard />
            <div className="p-4 sm:ml-64">
                <NavDashboard username={auth.user.name} />
                <div className="mt-5">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[70px]">No</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Rating</TableHead>
                                <TableHead>Pesan</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {testimonies.map((testimony) => (
                                <TableRow key={Testimony.id}>
                                    <TableCell>1</TableCell>
                                    <TableCell>{testimony.name}</TableCell>
                                    <TableCell>{testimony.email}</TableCell>
                                    <TableCell>{testimony.rating}</TableCell>
                                    <TableCell>{testimony.testimony}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}
