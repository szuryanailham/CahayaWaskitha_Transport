import Navbar from "@/Components/home-page/Navbar";
import { Head } from "@inertiajs/react";
import Detail from "@/Components/DetailUnit/Detail";
import ImageBody from "@/Components/DetailUnit/ImageBody";
import Footer from "@/Components/home-page/Footer";
export default function UnitDetail() {
    return (
        <>
            <Head title="Unit Detail" />
            <Navbar />
            <main className="w-full h-full">
                <Detail />
                <ImageBody />
            </main>
            <Footer />
        </>
    );
}
