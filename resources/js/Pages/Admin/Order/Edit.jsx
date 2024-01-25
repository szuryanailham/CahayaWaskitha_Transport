import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard({ order, units, unit, time }) {
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
            <Head title="Edit Order" />

            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                Edit
            </h1>
            <form onSubmit={submit} className="md:w-2/3 lg:w-1/3 mx-auto mb-2">
                <input
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
                {Object.values(errors).length > 0 ? errors.name : ""}

                <textarea
                    name="address"
                    defaultValue={data.address}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Address"
                    className={`${
                        errors.address ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.address : ""}

                <input
                    type="text"
                    name="phone"
                    defaultValue={data.phone}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Phone"
                    className={`${
                        errors.phone ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.phone : ""}

                <select
                    name="unit_id"
                    defaultValue={data.unit_id}
                    onChange={(e) => onHandleChange(e)}
                    className={`${
                        errors.category_id ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                >
                    <option value="">Select Unit</option>
                    {units.map((unit) => (
                        <option key={unit.id} value={unit.id}>
                            {unit.name}
                        </option>
                    ))}
                </select>
                {Object.values(errors).length > 0 ? errors.unit_id : ""}

                <input
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
                {Object.values(errors).length > 0 ? errors.price : ""}

                <textarea
                    name="pickup_address"
                    defaultValue={data.pickup_address}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Pickup Address"
                    className={`${
                        errors.pickup_address ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.pickup_address : ""}

                <input
                    type="date"
                    name="start_date"
                    defaultValue={data.start_date}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Start Date"
                    className={`${
                        errors.start_date ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.start_date : ""}

                <input
                    type="time"
                    name="start_time"
                    defaultValue={data.start_time}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Start Time"
                    className={`${
                        errors.start_time ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.start_time : ""}

                <input
                    type="date"
                    name="end_date"
                    defaultValue={data.end_date}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="End Date"
                    className={`${
                        errors.end_date ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.end_date : ""}

                <input
                    type="time"
                    name="end_time"
                    defaultValue={data.end_time}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="End Time"
                    className={`${
                        errors.end_time ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.end_time : ""}

                <input
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
                {Object.values(errors).length > 0 ? errors.duration : ""}

                <input
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
                {Object.values(errors).length > 0 ? errors.total_price : ""}

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {processing ? "Loading..." : "Submit"}
                </button>

                <div className="text-center mt-3">
                    <Link className="text-blue-500" href="/admin/order">
                        Back
                    </Link>
                </div>
            </form>
        </>
    );
}
