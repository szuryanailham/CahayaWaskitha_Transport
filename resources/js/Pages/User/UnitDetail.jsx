import Detail from "@/Components/DetailUnit/Detail";
import Image from "@/Components/DetailUnit/Image";
import Meta from "@/Components/Meta";
import Footer from "@/Components/home-page/Footer";
import Navbar from "@/Components/home-page/Navbar";
import { Head, Link } from "@inertiajs/react";
export default function UnitDetail({ unit }) {
    const items = unit.data.images;
    console.log(items);
    return (
        <>
            <Meta
                title={unit.data.name}
                description={`deskripsi pemesanan unit ${unit.data.name}`}
            />
            <Head title="Unit Detail" />
            <Navbar />
            <main className="w-full h-full mt-20">
                <Detail
                    description={unit.data.description}
                    name={unit.data.name}
                    href={`/checkout/${unit.data.id}`}
                    capacity={unit.data.capacity}
                    image={unit.data.featured_image}
                />

                <div className="w-full flex flex-wrap px-2 md:px-4 gap-4 md:gap-10 justify-center ">
                    {/* <Image image={items.image} /> */}
                    {items.map((img, index) => {
                        return (
                            <Image
                                image={`/storage/${img.image}`}
                                key={index}
                            />
                        );
                    })}
                </div>
            </main>
            <Footer />
        </>
    );
}
