import { Head } from "@inertiajs/react";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { ArrowLeft } from "lucide-react";

export default function Checkout() {
    return (
        <>
            <Head title="Checkout" />

            <main className="w-full md:px-8 py-12">
                <section className="w-full flex flex-col items-center gap-5">
                    <div className="w-[150px] h-[150px]">
                        <img
                            className="object-cover"
                            src="/images/Whatsapp.png"
                            alt="whatsapp.png"
                        />
                    </div>
                    <div className="w-full md:w-[710px]">
                        <h1 className="text-xl font-bold text-center">
                            Bayu Waskitha
                        </h1>
                        <p className="text-center mt-5">
                            NISMO has become the embodiment of Nissan's
                            outstanding performance, inspired by the most
                            unforgiving proving ground, the "race track".
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <Button>Contact Us</Button>
                        <Button>
                            <ArrowLeft />
                        </Button>
                    </div>
                </section>
                <section className="w-full py-8">
                    <form>
                        <div className="flex flex-col px-4 gap-6 mb-4">
                            <div className="w-full flex justify-between">
                                <div className="w-full">
                                    <h2 className="font-bold">
                                        Info pembayaran
                                    </h2>
                                    <p className="text-neutral-500">
                                        Masukan info penyewaan
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-neutral-500 whitespace-nowrap">
                                        Step 1 of 4
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="nama">Nama</Label>
                                <Input type="text" name="nama" id="nama" />
                                <Label htmlFor="alamat">Alamat</Label>
                                <Input type="text" name="alamat" id="alamat" />
                                <Label htmlFor="hp">No.Handphone</Label>
                                <Input type="text" name="hp" id="hp" />
                                <Label htmlFor="kota">Kota</Label>
                                <Input type="text" name="kota" id="kota" />
                            </div>
                        </div>
                        <div className="flex flex-col px-4 gap-6 mb-4">
                            <div className="w-full flex justify-between">
                                <div className="w-full">
                                    <h2 className="font-bold">Rental Info</h2>
                                    <p className="text-neutral-500">
                                        Masukan info rental anda
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-neutral-500 whitespace-nowrap">
                                        Step 2 of 4
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="lokasi">Lokasi</Label>
                                <Input type="text" name="lokasi" id="lokasi" />
                                <Label htmlFor="time">Time</Label>
                                <Input type="text" name="time" id="time" />
                                <Label htmlFor="date">Date</Label>
                                <Input type="text" name="date" id="date" />
                            </div>
                        </div>
                    </form>
                </section>
            </main>
        </>
    );
}
