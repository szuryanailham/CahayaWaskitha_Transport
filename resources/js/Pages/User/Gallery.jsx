import Footer from "@/Components/home-page/Footer";
import { tourPackages } from "@/asset/tourPackages ";
import Navbar from "@/Components/home-page/Navbar";
import { Head } from "@inertiajs/react";
import Jumbotron from "@/Components/About/Jumbotron";
import { galleryImages } from "@/asset/gallery-images";
import Meta from "@/Components/Meta";

const MAX_COLUMNS = 3;

export default function Gallery() {
    function getColumns(colIndex) {
        return galleryImages.filter((_, idx) => idx % MAX_COLUMNS === colIndex);
    }
    return (
        <>
            <Meta
                title="Gallery"
                description="berikut adalah gallery photo dari mitra kami penyedia jasa rental dan paket wisata jogjakarta."
            />

            <Jumbotron />
            <section className="w-full px-2 xl:px-16 mt-10">
                <div className="grid grid-cols-3 gap-2 xl:gap-4">
                    {[getColumns(0), getColumns(1), getColumns(2)].map(
                        (column, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col gap-2 xl:gap-4"
                            >
                                {column.map((image) => (
                                    <img
                                        className="w-full h-full rounded object-cover"
                                        src={image}
                                        alt="gallery image"
                                    />
                                ))}
                            </div>
                        )
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}
