import Footer from "@/Components/home-page/Footer";
import Navbar from "@/Components/home-page/Navbar";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowBigLeft } from "lucide-react";
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
            <Navbar />
            <main className="w-full mt-24">
                <section className="w-full h-full flex flex-col items-center justify-center gap-4 mb-10">
                    <img src="/images/Whatsapp.png" alt="whatsapp-img" />
                    <div className="p-4 md:p-0 w-full md:w-[710px] flex flex-col gap-4 justify-center text-center ">
                        <h1 className="font-bold text-3xl">Bayu Waskitha</h1>
                        <p>
                            NISMO has become the embodiment of Nissan's
                            outstanding performance, inspired by the most
                            unforgiving proving ground, the "race track".
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Button>Contact Us</Button>
                        <Link href="/">
                            <Button className="w-fit p-2">
                                <ArrowBigLeft />
                            </Button>
                        </Link>
                    </div>
                </section>
                <form className="px-10 flex flex-col gap-8" onSubmit={submit}>
                    <section className="w-full flex flex-col gap-8 items-center">
                        <div className="text-center">
                            <h2 className="font-bold text-xl md:text-2xl underline">
                                Form Penyewaan
                            </h2>
                            <p className="text-muted-foreground">
                                Masukan info penjemputan
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <div>
                                <Label htmlFor="name">Nama</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Name"
                                    className={`form-control ${
                                        errors.name ? "is-invalid" : ""
                                    } w-full`}
                                    autoFocus
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0 &&
                                        Object.values(errors)[0]}
                                </span>
                            </div>
                            <div>
                                <Label htmlFor="address">Alamat</Label>
                                <Textarea
                                    id="address"
                                    name="address"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Alamat"
                                    className={`form-control ${
                                        errors.address ? "is-invalid" : ""
                                    } w-full resize-none bg-gray-100`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0 &&
                                        Object.values(errors)[1]}
                                </span>
                            </div>

                            <div>
                                <Label htmlFor="phone">No.Handphone</Label>
                                <Input
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Phone"
                                    className={`form-control ${
                                        errors.phone ? "is-invalid" : ""
                                    }w-full`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0 &&
                                        Object.values(errors)[2]}
                                </span>
                            </div>
                            <div className="w-full flex gap-4">
                                <div>
                                    Unit: <strong>{unit.data.name}</strong>
                                </div>
                                <div>
                                    Price:{" "}
                                    <strong>{unit.data.price} / Hari</strong>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="w-full flex flex-col gap-8 items-center">
                        <div className="text-center">
                            <h2 className="font-bold text-xl md:text-2xl underline">
                                Penjemputan
                            </h2>
                            <p className="text-muted-foreground">
                                Masukan info penjemputan
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <div>
                                <Label htmlFor="pickup_address">
                                    Lokasi Penjemputan
                                </Label>
                                <Textarea
                                    id="pickup_address"
                                    name="pickup_address"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Pickup Address"
                                    className={`form-control ${
                                        errors.pickup_address
                                            ? "is-invalid"
                                            : ""
                                    }w-full resize-none bg-gray-100`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0 &&
                                        Object.values(errors)[3]}
                                </span>
                            </div>
                            <div>
                                <Label htmlFor="start_time">
                                    Waktu Penjemputan
                                </Label>
                                <Input
                                    id="start_time"
                                    type="time"
                                    name="start_time"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Start Time"
                                    className={`form-control ${
                                        errors.start_time ? "is-invalid" : ""
                                    }w-full text-muted-foreground`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0 &&
                                        Object.values(errors)[5]}
                                </span>
                            </div>
                            <div>
                                <Label htmlFor="start_date">
                                    Tanggal Penjemputan
                                </Label>
                                <Input
                                    id="start_date"
                                    type="date"
                                    name="start_date"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Start Date"
                                    className={`form-control ${
                                        errors.start_date ? "is-invalid" : ""
                                    }w-full text-muted-foreground`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0 &&
                                        Object.values(errors)[4]}
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className="w-full flex flex-col gap-8 items-center">
                        <div className="text-center">
                            <h2 className="font-bold text-xl md:text-2xl underline">
                                Pengembalian
                            </h2>
                            <p className="text-muted-foreground">
                                Masukan info penyewaan
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            <div>
                                <Label htmlFor="end_time">
                                    Waktu Pengambilan
                                </Label>
                                <Input
                                    id="end_time"
                                    type="time"
                                    name="end_time"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="End Time"
                                    className={`form-control ${
                                        errors.end_time ? "is-invalid" : ""
                                    }w-full text-muted-foreground`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0 &&
                                        Object.values(errors)[7]}
                                </span>
                            </div>
                            <div>
                                <Label htmlFor="end_date">
                                    Tanggal Pengambilan
                                </Label>
                                <Input
                                    id="end_date"
                                    type="date"
                                    name="end_date"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="End Date"
                                    className={`form-control ${
                                        errors.end_date ? "is-invalid" : ""
                                    }w-full text-muted-foreground`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0 &&
                                        Object.values(errors)[6]}
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className="w-full flex flex-col gap-8 items-center">
                        <div className="text-center">
                            <h2 className="font-bold text-xl md:text-2xl underline">
                                Durasi & Total Harga
                            </h2>
                            <p className="text-muted-foreground">
                                Total Harga Dikali Lama Hari Penyewaan
                            </p>
                        </div>

                        <div className="w-full flex flex-col gap-4">
                            <div>
                                <Label htmlFor="duration">
                                    Durasi Penyewaan / Hari
                                </Label>
                                <Input
                                    id="duration"
                                    type="text"
                                    name="duration"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Duration"
                                    className={`form-control ${
                                        errors.duration ? "is-invalid" : ""
                                    }w-full text-muted-foreground`}
                                    value={data.duration}
                                    readOnly
                                />
                            </div>

                            <div>
                                <Label htmlFor="total_price">Total Harga</Label>
                                <Input
                                    type="text"
                                    name="total_price"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Total Price"
                                    className={`form-control ${
                                        errors.total_price ? "is-invalid" : ""
                                    }w-full text-muted-foreground`}
                                    value={data.total_price}
                                    readOnly
                                />
                            </div>
                        </div>
                    </section>

                    <Button
                        className="self-center"
                        size="lg"
                        type="submit"
                        disabled={processing}
                    >
                        {processing ? "Loading..." : "Submit"}
                    </Button>
                </form>
            </main>
            <Footer />
            {/* get first error message */}
            {Object.values(errors).length > 0 && Object.values(errors)[0]}
        </>
    );
}
