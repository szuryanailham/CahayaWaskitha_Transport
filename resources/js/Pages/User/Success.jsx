import { Head } from "@inertiajs/react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/Components/ui/button";
import { FormatRupiah } from "@arismun/format-rupiah";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { useRef } from "react";
export default function Success({ order }) {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        documentTitle: "Struct penyewaan",

        content: () => componentRef.current,
    });
    const formatter = new Intl.DateTimeFormat("id-ID", {
        hour: "numeric",
        minute: "numeric",
        timeZone: "Asia/Jakarta", // Zona waktu Indonesia
    });
    const startTimeUTC = new Date(order.data.start_time);
    const end_TimeUTC = new Date(order.data.end_time);
    return (
        <>
            <Head title="Success" />

            <main className="w-full h-screen flex justify-evenly items-center">
                <Card className=" mt-[15%] w-[80%] h-fit  md:w-[40%] bg-transparent xl:bg-gray-100 dark:bg-gray-800/50 rounded-lg shadow-md relative">
                    {/* cart content */}
                    <CardContent
                        ref={componentRef}
                        className="relative pt-8 flex flex-col justify-center items-center"
                    >
                        <div>
                            {/* cart content */}
                            <div className="w-full p-3">
                                <img
                                    src="/images/logo_brand.svg"
                                    className="h-8"
                                    alt="Cahaya_waskitha"
                                />
                            </div>
                        </div>
                        <svg
                            className="checkmark"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 52 52"
                        >
                            <circle
                                className="checkmark__circle"
                                cx="26"
                                cy="26"
                                r="25"
                                fill="none"
                            />
                            <path
                                className="checkmark__check"
                                fill="none"
                                d="M14.1 27.2l7.1 7.2 16.7-16.8"
                            />
                            <path
                                className="checkmark__check"
                                fill="none"
                                d="L 8,8"
                            />
                        </svg>
                        <h3 className="pt-3 text-2xl font-bold">
                            Pemesanan berhasil
                        </h3>
                        <div className="text-center">
                            <p className="text-sm">total order</p>
                            <h3 className="font-bold text-xl">
                                IDR
                                <span className="ml-1">
                                    <FormatRupiah
                                        value={order.data.total_price}
                                    />
                                </span>
                            </h3>
                        </div>

                        {/* contain  */}
                        <div className="mt-5 w-full p-5">
                            {/* kode transaksi */}
                            <div className="flex justify-between">
                                <p>Kode Transaksi :</p>
                                <p className="font-bold">
                                    {order.data.no_order}
                                </p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Nama Pemesaan :</p>
                                <p className="font-bold">{order.data.name}</p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Nama Unit :</p>
                                <p className="font-bold">{order.data.unit}</p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>tanggal sewa :</p>
                                <p className="font-bold">
                                    {order.data.start_date}
                                </p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>tanggal kembali :</p>
                                <p className="font-bold">
                                    {order.data.end_date}
                                </p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Jam Sewa:</p>
                                <p className="font-bold">
                                    {formatter.format(startTimeUTC)} WIB
                                </p>
                            </div>
                            <div className="flex justify-between mt-3">
                                <p>Jam kembali:</p>
                                <p className="font-bold">
                                    {formatter.format(end_TimeUTC)} WIB
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-5">
                            <p className="text-base italic">
                                silahkan cetak struck bukti pemesanan rental dan
                                hubungi admin di link di bawah ini
                            </p>
                            <a
                                className="text-blue-600"
                                href="https://wa.link/3iqnd5"
                            >
                                Hubungi Admin
                            </a>
                        </div>
                        {/* end contain */}
                    </CardContent>
                    {/* footer */}
                    <CardFooter className="">
                        <div className="w-full flex flex-col justify-evenly text-center">
                            <div>
                                <a href={"/"}>
                                    <Button
                                        size="lg"
                                        className="rounded-none text-lg font-bold"
                                    >
                                        Home
                                    </Button>
                                </a>

                                <Button
                                    onClick={handlePrint}
                                    size="lg"
                                    className="bg-gray-300 hover:bg-gray-300/80 dark:bg-blue-800 dark:text-gray-100  rounded-none text-lg font-semibold"
                                    variant="secondary"
                                >
                                    Cetak
                                </Button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </main>
        </>
    );
}
