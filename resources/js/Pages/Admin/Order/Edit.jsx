import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { useEffect, useState } from "react";
import { Button } from "@/Components/ui/button";

export default function Dashboard({ order, units, unit, time }) {
    const { auth } = usePage().props;

    const { data, setData, get, processing } = useForm({
        ...order,
        start_time: time.start_time,
        end_time: time.end_time,
    });

    const { errors } = usePage().props;

    const [selectUnit, setSelectUnit] = useState(false);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    useEffect(() => {
        // tidak dijalankan ketika pertama kali onload
        if (selectUnit !== false) {
            const delay = setTimeout(() => {
                get(`/admin/order/${order.id}/edit`, {
                    preserveState: true,
                    replace: true,
                });
            }, 500);

            return () => clearTimeout(delay);
        }
    }, [selectUnit]);

    useEffect(() => {
        if (startDate && endDate) {
            const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            const newData = {
                ...data,
                duration: diffDays,
                total_price: unit.price * diffDays,
            };

            setData(newData);
        }
    }, [startDate, endDate]);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);

        if (event.target.name === "unit_id") {
            setSelectUnit(event.target.value);
        }

        if (event.target.name === "start_date") {
            setStartDate(event.target.value);
        }

        if (event.target.name === "end_date") {
            setEndDate(event.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        router.post("/admin/order/" + order.id, {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <>
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard username={auth.user.name} />
                <div className="mt-5">
                    <Head title="Edit Order" />
                    <form onSubmit={submit} className=" w-full md:w-[70%]">
                        {/* title */}
                        <div className="w-full">
                            <h1 className="font-bold text-2xl text-center">
                                Edit transaction
                            </h1>
                        </div>
                        {/* name */}
                        <div>
                            <label className="font-bold" htmlFor="name">
                                Nama
                            </label>
                            <Input
                                type="text"
                                name="name"
                                defaultValue={data.name}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Name"
                                className={`${
                                    errors.name ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                                autoFocus
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.name
                                    : ""}
                            </span>
                        </div>

                        {/* adress */}
                        <div>
                            <label className="font-bold" htmlFor="alamat">
                                Alamat
                            </label>
                            <Textarea
                                name="address"
                                id="alamat"
                                defaultValue={data.address}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Address"
                                className={`${
                                    errors.address ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            />
                        </div>
                        {/* phone */}
                        <div>
                            <label className="font-bold" htmlFor="phone">
                                Phone
                            </label>
                            <Input
                                type="text"
                                name="phone"
                                defaultValue={data.phone}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Phone"
                                className={`${
                                    errors.phone ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.name
                                    : ""}
                            </span>
                        </div>
                        {/* unit_id */}
                        <div>
                            <label className="font-bold" htmlFor="phone">
                                Unit
                            </label>
                            <Select
                                name="unit_id"
                                id="unit_id"
                                defaultValue={data.unit_id}
                                onChange={(e) => onHandleChange(e)}
                                className={`${
                                    errors.category_id ? "is-invalid" : ""
                                } border bg-white dark:bg-grey-800 border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Unit" />
                                </SelectTrigger>
                                <SelectContent>
                                    {units.map((unit) => (
                                        <SelectItem
                                            key={unit.id}
                                            value={unit.id}
                                        >
                                            {unit.name}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>

                        {/* price */}
                        <div>
                            <label className="font-bold" htmlFor="price">
                                Price
                            </label>
                            <Input
                                type="text"
                                name="price"
                                defaultValue={data.price}
                                placeholder="Price"
                                value={unit ? unit.price : order.price}
                                className={`${
                                    errors.price ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                                disabled
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.name
                                    : ""}
                            </span>
                        </div>
                        {/* pickup_address */}
                        <div>
                            <label className="font-bold" htmlFor="alamat">
                                alamat penjemputan
                            </label>
                            <Textarea
                                name="pickup_address"
                                defaultValue={data.pickup_address}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Pickup Address"
                                className={`${
                                    errors.pickup_address ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            />
                            {Object.values(errors).length > 0
                                ? errors.pickup_address
                                : ""}
                        </div>
                        {/* start_date */}
                        <div>
                            <label className="font-bold" htmlFor="name">
                                tanggal sewa
                            </label>
                            <Input
                                type="date"
                                name="start_date"
                                defaultValue={data.start_date}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Start Date"
                                className={`${
                                    errors.start_date ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.end_date
                                    : ""}
                            </span>
                        </div>
                        {/* start_time */}
                        <div>
                            <label className="font-bold" htmlFor="price">
                                waktu sewa
                            </label>
                            <Input
                                type="time"
                                name="start_time"
                                defaultValue={data.start_time}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Start Time"
                                className={`${
                                    errors.start_time ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.name
                                    : ""}
                            </span>
                        </div>
                        {/* end_date */}
                        <div>
                            <label className="font-bold" htmlFor="price">
                                waktu kembali
                            </label>
                            <Input
                                type="time"
                                name="end_time"
                                defaultValue={data.end_time}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="End Time"
                                className={`${
                                    errors.end_time ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.end_time
                                    : ""}
                            </span>
                        </div>
                        {/* duration */}
                        <div>
                            <label className="font-bold" htmlFor="price">
                                durasi(hari)
                            </label>
                            <Input
                                type="text"
                                name="duration"
                                defaultValue={data.duration}
                                value={data.duration}
                                placeholder="Duration"
                                className={`${
                                    errors.duration ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                                readOnly
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.end_time
                                    : ""}
                            </span>
                        </div>
                        {/* total_price */}
                        <div>
                            <label className="font-bold" htmlFor="price">
                                total
                            </label>
                            <Input
                                type="text"
                                name="total_price"
                                defaultValue={data.total_price}
                                value={data.total_price}
                                placeholder="Total Price"
                                className={`${
                                    errors.total_price ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                                disabled
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.total_price
                                    : ""}
                            </span>
                        </div>
                        {/* button submit */}
                        <div className="flex gap-2">
                            <Button
                                type="submit"
                                disabled={processing}
                                className=" py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {processing ? "Loading..." : "Submit"}
                            </Button>

                            <Button className="text-center">
                                <Link href="/admin/order">Back</Link>
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
