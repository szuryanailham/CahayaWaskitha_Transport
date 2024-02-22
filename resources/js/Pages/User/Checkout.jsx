import Footer from "@/Components/home-page/Footer";
import Navbar from "@/Components/home-page/Navbar";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Textarea } from "@/Components/ui/textarea";
import { Head, Link, useForm } from "@inertiajs/react";
import { ArrowBigLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { FormatRupiah } from "@arismun/format-rupiah";

export default function Checkout({ unit }) {
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 7); // Adjust for GMT+7

    const [startDate, setStartDate] = useState(
        currentDate.toISOString().split("T")[0]
    );
    const [endDate, setEndDate] = useState(
        currentDate.toISOString().split("T")[0]
    );

    const [startTime, setStartTime] = useState(
        currentDate.toISOString().split("T")[1].slice(0, 5)
    );
    const [endTime, setEndTime] = useState(
        currentDate.toISOString().split("T")[1].slice(0, 5)
    );

    const { data, setData, post, processing, errors } = useForm({
        name: "",
        address: "",
        phone: "",
        unit_id: unit.data.id,
        unit: unit.data.name,
        price: unit.data.price,
        pickup_address: "",
        start_date: currentDate.toISOString().split("T")[0], // Current date in "YYYY-MM-DD" format
        start_time: currentDate.toISOString().split("T")[1].slice(0, 5), // Current time in "HH:mm" format
        end_date: currentDate.toISOString().split("T")[0], // Current date in "YYYY-MM-DD" format
        end_time: currentDate.toISOString().split("T")[1].slice(0, 5), // Current time in "HH:mm" format
        duration: 0,
        total_price: 0,
    });

    useEffect(() => {
        if (startDate && endDate && startTime && endTime) {
            const startDateTime = new Date(`${startDate} ${startTime}`);
            const endDateTime = new Date(`${endDate} ${endTime}`);

            const diffTime = Math.abs(endDateTime - startDateTime);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            const newData = {
                ...data,
                duration: diffDays,
                total_price: unit.data.price * diffDays,
            };

            setData(newData);
        }
    }, [startDate, endDate, startTime, endTime]);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);

        if (event.target.name === "start_date") {
            setStartDate(event.target.value);
        }

        if (event.target.name === "end_date") {
            setEndDate(event.target.value);
        }

        if (event.target.name === "start_time") {
            setStartTime(event.target.value);
        }

        if (event.target.name === "end_time") {
            setEndTime(event.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post("/checkout");
    };

    // change format rupiah

    return (
        <>
            <Head title="Checkout" />
            <Navbar />
            <main className="w-full mt-24">
                <section className="w-full h-full flex flex-col items-center justify-center gap-4 mb-10">
                    <img
                        className="p-5"
                        src="/images/Whatsapp.png"
                        alt="whatsapp-img"
                    />
                    <div className="p-4 md:p-0 w-full md:w-[710px] flex flex-col gap-4 justify-center text-center ">
                        <h1 className="font-bold text-3xl">Bayu Waskitha</h1>
                        <p>
                            Silakan hubungi kami melalui kontak admin jika Anda
                            ingin berkonsultasi sebelum melakukan pemesanan
                            penyewaan. Kami siap membantu dan menjawab
                            pertanyaan Anda. Terima kasih
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <Button className="dark:bg-blue-700 dark:text-white">
                            <a href="https://wa.link/3iqnd5">Contact Us</a>
                        </Button>
                        <Link href="/">
                            <Button className="w-fit p-2">
                                <ArrowBigLeft />
                            </Button>
                        </Link>
                    </div>
                </section>
                {/* form input data  */}
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
                                {/* Nama */}
                                <Label htmlFor="name">Nama</Label>
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Name"
                                    className={`form-control ${
                                        errors.name ? "is-invalid" : ""
                                    } w-full dark:bg-gray-800`}
                                    autoFocus
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0
                                        ? errors.name
                                        : ""}
                                </span>
                            </div>
                            {/* alamat */}
                            <div>
                                <Label htmlFor="address">Alamat</Label>
                                <Textarea
                                    id="address"
                                    name="address"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Alamat"
                                    className={`form-control ${
                                        errors.address ? "is-invalid" : ""
                                    } w-full resize-none bg-gray-100 dark:bg-gray-800`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0
                                        ? errors.address
                                        : ""}
                                </span>
                            </div>
                            {/* no phone */}
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
                                    }w-full dark:bg-gray-800`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0
                                        ? errors.phone
                                        : ""}
                                </span>
                            </div>

                            <div className="w-full flex gap-4">
                                <div>
                                    Unit: <strong>{unit.data.name}</strong>
                                </div>
                                <div>
                                    Price:{" "}
                                    <strong>
                                        <FormatRupiah value={unit.data.price} />
                                        / Hari
                                    </strong>
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
                            {/* lokasi penjemputan */}
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
                                    }w-full resize-none bg-gray-100 dark:bg-gray-800`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0
                                        ? errors.pickup_address
                                        : ""}
                                </span>
                            </div>
                            {/* waktu penjemputan */}
                            <div>
                                <Label htmlFor="start_time">
                                    Waktu Penjemputan
                                </Label>
                                <Input
                                    id="start_time"
                                    type="time"
                                    name="start_time"
                                    value={data.start_time}
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Start Time"
                                    className={`form-control ${
                                        errors.start_time ? "is-invalid" : ""
                                    }w-full text-muted-foreground dark:bg-gray-800 p-2`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0
                                        ? errors.start_time
                                        : ""}
                                </span>
                            </div>
                            {/* tanggal penjemputan  */}
                            <div>
                                <Label htmlFor="start_date">
                                    Tanggal Penjemputan
                                </Label>
                                <Input
                                    id="start_date"
                                    type="date"
                                    name="start_date"
                                    value={data.start_date}
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Start Date"
                                    className={`form-control ${
                                        errors.start_date ? "is-invalid" : ""
                                    }w-full p-2 text-muted-foreground dark:bg-gray-800`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0
                                        ? errors.start_date
                                        : ""}
                                </span>
                            </div>
                        </div>
                    </section>
                    {/* akhir sewa ..... */}
                    <section className="w-full flex flex-col gap-8 items-center">
                        <div className="text-center">
                            <h2 className="font-bold text-xl md:text-2xl underline">
                                akhir sewa
                            </h2>
                            <p className="text-muted-foreground">
                                Masukan akhir sewa
                            </p>
                        </div>
                        <div className="w-full flex flex-col gap-4">
                            {/* waktu akhir sewa */}
                            <div>
                                <Label htmlFor="end_time">
                                    Waktu akhir sewa
                                </Label>
                                <Input
                                    id="end_time"
                                    type="time"
                                    name="end_time"
                                    value={data.end_time}
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="End Time"
                                    className={`form-control ${
                                        errors.end_time ? "is-invalid" : ""
                                    }w-full text-muted-foreground dark:bg-gray-800 p-2`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0
                                        ? errors.end_time
                                        : ""}
                                </span>
                            </div>
                            {/* tanggal akhir sewa */}
                            <div>
                                <Label htmlFor="end_date">
                                    Tanggal akhir sewa
                                </Label>
                                <Input
                                    id="end_date"
                                    type="date"
                                    name="end_date"
                                    value={data.end_date}
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="End Date"
                                    className={`form-control ${
                                        errors.end_date ? "is-invalid" : ""
                                    }w-full text-muted-foreground dark:bg-gray-800 p-2`}
                                />
                                <span className="text-xs text-destructive">
                                    {Object.values(errors).length > 0
                                        ? errors.end_date
                                        : ""}
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
                            {/* durasi penyewaan */}
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
                                    }w-full text-muted-foreground dark:bg-gray-800 p-2`}
                                    value={data.duration}
                                    readOnly
                                />
                            </div>
                            {/* total harga */}
                            <div>
                                <Label htmlFor="total_price">Total Harga</Label>
                                <Input
                                    type="text"
                                    name="total_price"
                                    onChange={(e) => onHandleChange(e)}
                                    placeholder="Total Price"
                                    className={`form-control ${
                                        errors.total_price ? "is-invalid" : ""
                                    }w-full text-muted-foreground dark:bg-gray-800 p-2`}
                                    value={data.total_price}
                                    readOnly
                                />
                            </div>
                        </div>
                    </section>

                    <Button
                        className="self-center text-md dark:bg-blue-500 dark:text-white "
                        size="lg"
                        type="submit"
                        disabled={processing}
                    >
                        {processing ? "Loading..." : "Order"}
                    </Button>
                </form>
            </main>
            <Footer />
            {/* get first error message */}
            {Object.values(errors).length > 0 && Object.values(errors)[0]}
        </>
    );
}
