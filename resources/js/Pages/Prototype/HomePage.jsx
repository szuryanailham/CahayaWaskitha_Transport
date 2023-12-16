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
                <div>
                    <ProductCard key={index} />
                </div>
            )
        );
    };
    return (
        <>
            <Head title="Home" />

            <main className="w-full h-full bg-white dark:bg-gray-900">
                <ModeToggle />
                <section className="w-full" id="hero-section">
                    <div className="w-full h-full">
                        <div className="w-full h-full flex justify-center">
                            <img
                                className="object-cover h-[439px] w-[1171px] object-top rounded-2xl "
                                src="/2880x1800-px-assassins-creed-Assassins-Creed-Black-Flag-video-games-1062323-wallhere.com (1) (1) (1).jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                <section
                    className="w-full h-full py-[50px] px-4"
                    id="products-section"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12 place-items-stretch justify-items-center">
                        {renderProduct()}
                    </div>
                </section>
                <footer className="w-full flex flex-col items-center ">
                    <div className="w-[403px]">
                        <h1 className="font-bold text-[36pt] leading-[150%] text-center">
                            Cahaya Waskitha Transport
                        </h1>
                    </div>
                    <div className="flex space-x-20 px-36 py-10">
                        <Instagram className="w-[30px] h-[30px]" />
                        <Youtube className="w-[30px] h-[30px]" />
                        <Facebook className="w-[30px] h-[30px]" />
                        <Facebook className="w-[30px] h-[30px]" />
                    </div>
                    <Button />
                </footer>
            </main>
        </>
    );
}
