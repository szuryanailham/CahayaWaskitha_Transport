import { Head } from "@inertiajs/react";
import ModeToggle from "@/Components/ModeToggle";
import ProductCard from "@/Components/home-page/ProductCard";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home({ categories, units }) {
    console.log(categories, units);
    const renderProduct = () => {
        return Array.from({ length: 9 }, (_, index) =>
            index === 8 ? (
                <div className="col-span-1 md:col-span-2 place-self-center md:place-self-center xl:col-span-1  ">
                    <ProductCard key={index} />
                </div>
            ) : (
                <ProductCard key={index} />
            )
        );
    };
    return (
        <>
            <Head title="Home" />

            <main className="w-full h-full bg-white dark:bg-gray-800">
                <ModeToggle />
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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-4 lg:gap-y-12 place-items-stretch justify-items-center">
                        {renderProduct()}
                    </div>
                </section>
            </main>
            <footer className="w-full flex flex-col items-center ">
                <div className="w-[224px] md:w-[403px] ">
                    <h1 className="font-bold text-[20px] md:text-[30px] xl:text-[36px] leading-[150%] text-center">
                        Cahaya Waskitha Transport
                    </h1>
                </div>
                <div className="flex w-full justify-center space-x-10 md:space-x-16 xl:space-x-20 xl:px-36 py-10">
                    <Instagram className="w-[30px] h-[30px]" />
                    <Youtube className="w-[30px] h-[30px]" />
                    <Facebook className="w-[30px] h-[30px]" />
                    <Facebook className="w-[30px] h-[30px]" />
                </div>
            </footer>
        </>
    );
}
