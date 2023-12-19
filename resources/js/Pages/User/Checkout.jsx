import { Head, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Checkout({ unit }) {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        address: "",
        phone: "",
        unit_id: unit.data.id,
        unit: unit.data.name,
        price: unit.data.price,
        pickup_address: "",
        start_date: "",
        start_time: "",
        end_date: "",
        end_time: "",
        duration: 0,
        total_price: 0,
    });

    useEffect(() => {
        if (startDate && endDate) {
            const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            const newData = {
                ...data,
                duration: diffDays,
                total_price: unit.data.price * diffDays,
            };

            setData(newData);
        }
    }, [startDate, endDate]);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);

        if (event.target.name === "start_date") {
            setStartDate(event.target.value);
        }

        if (event.target.name === "end_date") {
            setEndDate(event.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post("/checkout");
    };

    return (
        <>
            <Head title="Checkout" />

            {/* get first error message */}
            {Object.values(errors).length > 0 && Object.values(errors)[0]}
            <br />
            <br />

            <form onSubmit={submit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="Name"
                        className={`form-control ${
                            errors.name ? "is-invalid" : ""
                        }`}
                        autoFocus
                    />
                </div>

                <div>
                    <textarea
                        name="address"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="Address"
                        className={`form-control ${
                            errors.address ? "is-invalid" : ""
                        }`}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name="phone"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="Phone"
                        className={`form-control ${
                            errors.phone ? "is-invalid" : ""
                        }`}
                    />
                </div>

                <div>Unit: {unit.data.name}</div>

                <div>Price: {unit.data.price} / Hari</div>

                <div>
                    <textarea
                        name="pickup_address"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="Pickup Address"
                        className={`form-control ${
                            errors.pickup_address ? "is-invalid" : ""
                        }`}
                    />
                </div>

                <div>
                    <input
                        type="date"
                        name="start_date"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="Start Date"
                        className={`form-control ${
                            errors.start_date ? "is-invalid" : ""
                        }`}
                    />
                </div>

                <div>
                    <input
                        type="time"
                        name="start_time"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="Start Time"
                        className={`form-control ${
                            errors.start_time ? "is-invalid" : ""
                        }`}
                    />
                </div>

                <div>
                    <input
                        type="date"
                        name="end_date"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="End Date"
                        className={`form-control ${
                            errors.end_date ? "is-invalid" : ""
                        }`}
                    />
                </div>

                <div>
                    <input
                        type="time"
                        name="end_time"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="End Time"
                        className={`form-control ${
                            errors.end_time ? "is-invalid" : ""
                        }`}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name="duration"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="Duration"
                        className={`form-control ${
                            errors.duration ? "is-invalid" : ""
                        }`}
                        value={data.duration}
                        readOnly
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name="total_price"
                        onChange={(e) => onHandleChange(e)}
                        style={{ border: "1px solid black" }}
                        placeholder="Total Price"
                        className={`form-control ${
                            errors.total_price ? "is-invalid" : ""
                        }`}
                        value={data.total_price}
                        readOnly
                    />
                </div>

                <button
                    type="submit"
                    style={{ border: "1px solid black" }}
                    disabled={processing}
                >
                    {processing ? "Loading..." : "Submit"}
                </button>
            </form>
        </>
    );
}
