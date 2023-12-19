import TestimonyCard from "@/Components/testimony-page/TestimonyCard";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Head } from "@inertiajs/react";

export default function Testimony() {
    return (
        <>
            <Head title="Testimony" />

            <main className="w-full min-h-screen py-10 bg-white dark:bg-gray-800">
                <section className="w-full px-0 md:px-6 xl:px-10 ">
                    <div className="w-full h-full relative">
                        <div className="w-full h-full flex justify-center">
                            <img
                                className="object-cover h-[446px] w-full"
                                src="/hero-section-mobile.png"
                                alt=""
                            />
                        </div>
                        <div className="bg-[#2D2D36]/60 absolute z-[2] w-full h-full top-0" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white z-[3]">
                            <div className="font-semibold text-[27px] md:text-5xl text-center h-24 md:h-[120px] flex w-full leading-[40px] md:leading-[50px]">
                                <h1>
                                    Cahaya Waskitha <br /> Transport
                                </h1>
                            </div>
                            <p className="text-xl text-center">
                                Solusi rental andalan anda
                            </p>
                        </div>
                    </div>
                </section>
                <section className="w-full mt-6 flex flex-col items-center">
                    <div className="flex items-center h-11 ">
                        <h2 className="font-medium text-2xl">Top Testimony</h2>
                    </div>
                    <div className="flex mt-16 w-full items-center md:justify-center flex-col md:flex-row gap-5 xl:gap-12">
                        <TestimonyCard />
                        <TestimonyCard />
                        <TestimonyCard className="hidden md:block" />
                    </div>
                </section>
                <section className="w-full mt-10 ">
                    <div className="w-full h-full flex justify-center mt-5">
                        <div className="text-center">
                            <h1 className="font-bold text-[28px] leading-[120%] underline">
                                Form Testimony
                            </h1>

                            <p className="font-medium text-slate-400">
                                Masukan info penyewaan
                            </p>
                        </div>
                    </div>
                    <form className="px-6 odd:">
                        <Label htmlFor="nama">Nama</Label>
                        <Input
                            type="text"
                            id="nama"
                            name="nama"
                            placeholder="Nama Lengkap"
                        />
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                        />
                        <Label htmlFor="phone-number">No Handphone</Label>
                        <Input
                            type="text"
                            id="phone-number"
                            name="phone-number"
                            placeholder="No Handphone"
                        />
                    </form>
                </section>
            </main>
        </>
    );
}
