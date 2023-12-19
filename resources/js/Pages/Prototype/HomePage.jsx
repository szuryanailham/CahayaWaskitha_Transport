import { Head } from "@inertiajs/react";
import ProductCard from "@/Components/home-page/ProductCard";
import Navbar from "@/Components/home-page/Navbar";
import Footer from "@/Components/home-page/Footer";

export default function Home({ categories, units }) {
    const renderProduct = () => {
        return Array.from({ length: 9 }, (_, index) =>
            index === 8 ? (
                <div className="md:col-span-2 md:place-self-center ">
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
            <main className="w-full h-full bg-blue  dark:bg-gray-900">
                <Navbar />
                <section className="w-full mt-20" id="hero-section">
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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-stretch justify-items-center">
                        {renderProduct()}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
