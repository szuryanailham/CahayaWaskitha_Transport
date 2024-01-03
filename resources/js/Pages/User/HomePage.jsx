import Footer from "@/Components/home-page/Footer";
import { NavigationMenuDemo } from "@/Components/home-page/NavMenu";
import Navbar from "@/Components/home-page/Navbar";
import ProductCard from "@/Components/home-page/ProductCard";
import { Button } from "@/Components/ui/button";
import { Head, Link } from "@inertiajs/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function HomePage({ categories, units }) {
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
            <Head title="Home" />
            <Navbar />
            <main className="w-full dark:bg-gray-800">
                <section
                    className="w-full px-4 md:px-6 xl:px-14"
                    id="hero-section"
                >
                    {/* SLIDER AUTO FOR PROMO */}
                    <div className="w-full h-full mt-16">
                        <Slider {...settings}>
                            <div className="bg-re">
                                <img
                                    className="object-cover h-[124px] md:h-[330px] xl:h-[439px] w-full object-top rounded-2xl"
                                    src="/2880x1800-px-assassins-creed-Assassins-Creed-Black-Flag-video-games-1062323-wallhere.com (1) (1) (1).jpg"
                                    alt="promo-1"
                                />
                            </div>
                            <div>
                                <img
                                    className="object-cover h-[124px] md:h-[330px] xl:h-[439px] w-full object-top rounded-2xl"
                                    src="https://c4.wallpaperflare.com/wallpaper/582/192/1024/assassin-s-creed-assassin-s-creed-black-flag-video-games-ship-wallpaper-preview.jpg"
                                    alt="promo-2"
                                />
                            </div>
                            <div>
                                <img
                                    className="object-cover h-[124px] md:h-[330px] xl:h-[439px] w-full object-top rounded-2xl"
                                    src="https://i.pinimg.com/originals/e1/97/f7/e197f7366496bfbf6653b76e5665c4cd.jpg"
                                    alt="promo-3"
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
                    {/* category */}
                    <div className="w-full">
                        <NavigationMenuDemo
                            categories={categories?.data}
                            units={units.data}
                            className="P-10"
                        />
                        {/* category */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-4 lg:gap-y-12 place-items-stretch justify-items-center">
                        {units?.data?.map((unit, index) =>
                            index === units?.data?.length - 1 ? (
                                <div className="col-span-1 md:col-span-2 place-self-center md:place-self-center xl:col-span-1 ">
                                    <ProductCard
                                        name={unit.name}
                                        capacity={unit.capacity}
                                        key={unit.slug}
                                        price={unit.price}
                                    />
                                </div>
                            ) : (
                                <ProductCard
                                    name={unit.name}
                                    capacity={unit.capacity}
                                    key={unit.slug}
                                    price={unit.price}
                                />
                            )
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
