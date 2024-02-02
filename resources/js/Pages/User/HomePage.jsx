import Footer from "@/Components/home-page/Footer";
import { NavigationMenuDemo } from "@/Components/home-page/NavMenu";
import Navbar from "@/Components/home-page/Navbar";
import ProductCard from "@/Components/home-page/ProductCard";
import { Head, Link } from "@inertiajs/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

export default function HomePage({ categories, units, banners }) {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    console.log(banners);
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <main className="w-full ">
                <section
                    className="w-full px-4 md:px-6 xl:px-14"
                    id="hero-section"
                >
                    {/* SLIDER AUTO FOR PROMO */}
                    <div className="w-full h-full mt-16">
                        <Slider {...settings}>
                            {banners.map((banner) => {
                                console.log(banner.image);
                                return (
                                    <div>
                                        <img
                                            className=" md:object-cover h-[300px] md:h-[430px] xl:h-[439px] w-full object-top rounded-2xl"
                                            src={`/storage/${banner.image}`}
                                            alt="promo-1"
                                        />
                                    </div>
                                );
                            })}
                        </Slider>
                    </div>
                    {/* END FOR SLIDER PROMO */}
                </section>
                <section
                    className="w-full h-full py-[30px] xl:py-[50px] px-2 xl:px-4 "
                    id="products-section"
                >
                    {/* category */}
                    <div className="w-full flex justify-center  mb-4  ">
                        <NavigationMenuDemo
                            categories={categories?.data}
                            units={units.data}
                            className="p-10"
                        />
                        {/* category */}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-6 gap-y-4 lg:gap-y-12 place-items-stretch justify-items-center mt-5">
                        {units?.data?.map((unit, index) =>
                            index === units?.data?.length ? (
                                <div className="col-span-1 md:col-span-2 place-self-center md:place-self-center xl:col-span-1 ">
                                    <ProductCard
                                        name={unit.name}
                                        capacity={unit.capacity}
                                        key={unit.slug}
                                        image={unit.featured_image}
                                        price={unit.price}
                                        href={`/unit/${unit.slug}`}
                                        href_sewa={`/checkout/${unit.id}`}
                                    />
                                    ;
                                </div>
                            ) : (
                                <div className="col-span-1 md:col-span-2 place-self-center md:place-self-center xl:col-span-1 ">
                                    <ProductCard
                                        name={unit.name}
                                        capacity={unit.capacity}
                                        key={unit.slug}
                                        price={unit.price}
                                        image={unit.featured_image}
                                        href_detail={unit.slug}
                                        href_sewa={`/checkout/${unit.id}`}
                                    />
                                </div>
                            )
                        )}
                    </div>
                </section>
                <div className="flex justify-center ">
                    {units.meta.links.map((data) => {
                        return (
                            <Link
                                key={data.label}
                                href={data.url}
                                className={`px-3 py-1 hover:bg-black hover:text-white text-white-700 rounded-md ${
                                    data.active
                                        ? "bg-black text-white hover:text-white"
                                        : ""
                                }`}
                            >
                                {data.label === "&laquo; Previous"
                                    ? "«"
                                    : data.label === "Next &raquo;"
                                    ? "»"
                                    : data.label}
                            </Link>
                        );
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
}
