import Footer from "@/Components/home-page/Footer";
import { NavigationMenuDemo } from "@/Components/home-page/NavMenu";
import Navbar from "@/Components/home-page/Navbar";
import ProductCard from "@/Components/home-page/ProductCard";
import { Button } from "@/Components/ui/button";
import { Head, Link } from "@inertiajs/react";

export default function HomePage({ categories, units }) {
    return (
        <>
            <Head title="Home" />
            <Navbar />
            <main className="relative h-full bg-white dark:bg-gray-800 pt-16 shadow-blur">
                <section
                    className="w-full px-4 md:px-6 xl:px-14"
                    id="hero-section"
                >
                    <div className="w-full h-full">
                        <div className="w-full h-full flex justify-center">
                            <img
                                className="object-cover h-[124px] md:h-[330px] xl:h-[439px] w-full object-top rounded-2xl"
                                src="/2880x1800-px-assassins-creed-Assassins-Creed-Black-Flag-video-games-1062323-wallhere.com (1) (1) (1).jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full mt-2 md:mt-0 xl:hidden">
                    <div className="w-full px-6 flex md:hidden">
                        <h2 className="text-[12pt] font-bold">
                            Pencarian Terbaru
                        </h2>
                    </div>
                    <div className="flex w-full items-center justify-center mt-2 gap-6">
                        <Button className="rounded-2xl py-3 px-3 h-5 text-[10pt] font-light">
                            Mobil Murah
                        </Button>
                        <Button className="rounded-2xl py-3 px-3 h-5 text-[10pt] font-light">
                            Mobil Murah
                        </Button>
                        <Button className="rounded-2xl py-3 px-3 h-5 text-[10pt] font-light">
                            Mobil Murah
                        </Button>
                    </div>
                </section>
                <section
                    className="w-full h-full py-[30px] xl:py-[50px] px-2 xl:px-4"
                    id="products-section"
                >
                    <div className="w-full px-8 py-4">
                        <NavigationMenuDemo
                            categories={categories?.data}
                            units={units.data}
                        />
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
