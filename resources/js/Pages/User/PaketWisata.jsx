import Footer from "@/Components/home-page/Footer";
import { tourPackages } from "@/asset/tourPackages ";
import Navbar from "@/Components/home-page/Navbar";

import { Head, Link } from "@inertiajs/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PaketWisataCard from "@/Components/home-page/PaketWisataCard";

export default function PaketWisata() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <Head title="PaketWisata" />
            <Navbar />
            <main className="w-full ">
                <section
                    className="w-full px-4 md:px-6 xl:px-14"
                    id="hero-section"
                >
                    {/* SLIDER AUTO FOR PROMO */}
                    <div className="w-full h-full mt-16">
                        <Slider {...settings}>
                            <div>
                                <img
                                    className=" md:object-cover h-[300px] md:h-[430px] xl:h-[439px] w-full object-top rounded-2xl"
                                    src="/images/promo-1.jpg "
                                    alt="promo-1"
                                />
                            </div>
                            <div>
                                <img
                                    className=" md:object-cover h-[300px] md:h-[430px] xl:h-[439px] w-full  rounded-2xl"
                                    src="/images/promo-2.jpg "
                                    alt="promo-1"
                                />
                            </div>
                            <div>
                                <img
                                    className=" md:object-cover h-[300px] md:h-[430px] xl:h-[439px] w-full  rounded-2xl"
                                    src="/images/promo-3.jpg "
                                    alt="promo-1"
                                />
                            </div>
                        </Slider>
                    </div>
                    {/* END FOR SLIDER PROMO */}
                </section>
                <section
                    className="w-full h-full py-[30px] xl:py-[50px] px-2 xl:px-4 "
                    id="products-section"
                >
                    <div className="w-full flex flex-col gap-2 items-center justify-center mb-8 ">
                        <h2 className="text-lg md:text-2xl font-bold">
                            Start Jogja
                        </h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold whitespace-nowrap">
                            PAKET WISATA POPULER
                        </h1>
                        <h3 className="text-base md:text-lg font-semibold text-black/70">
                            HARGA MURAH PROMO 2024
                        </h3>
                    </div>
                    <div className=" px-4 md:px-8 xl:px-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-8">
                        {tourPackages.map((tourPackage, index) => {
                            return (
                                <PaketWisataCard
                                    includes={tourPackage.includes}
                                    destinations={tourPackage.destinations}
                                    title={tourPackage.title}
                                    lists={tourPackage.lists}
                                    key={index}
                                    src={tourPackage.image}
                                />
                            );
                        })}
                    </div>
                    <p className="text-center mt-10 italic">
                        silahkan hubungi kontak admin untuk informasi lebih
                        lanjut
                    </p>
                </section>
            </main>
            <Footer />
        </>
    );
}
