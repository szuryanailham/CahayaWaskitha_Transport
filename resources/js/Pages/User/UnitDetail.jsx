import Detail from "@/Components/DetailUnit/Detail";
import ImageBody from "@/Components/DetailUnit/ImageBody";
import Footer from "@/Components/home-page/Footer";
import Navbar from "@/Components/home-page/Navbar";
import { Head, Link } from "@inertiajs/react";

export default function UnitDetail({ unit }) {
    console.log(unit);
    return (
        <>
            <Head title="Unit Detail" />
            <Navbar />
            <main className="w-full h-full mt-20">
                <Detail
                    description={unit.data.description}
                    name={unit.data.name}
                    href={`/checkout/${unit.data.id}`}
                    capacity={unit.data.capacity}
                />
                <ImageBody />
            </main>
            <Footer />
        </>
    );
}
