import React from "react";
import Navbar from "@/Components/home-page/Navbar";
import Jumbotron from "@/Components/About/Jumbotron";
import CardTestimony from "@/Components/Testimony/CardTestimony";
import FormTestimony from "@/Components/Testimony/FormTestimony";
import Footer from "@/Components/home-page/Footer";
import Meta from "@/Components/Meta";
CardTestimony;
function Testimony({ testimonies }) {
    console.log(testimonies);
    return (
        <>
            <Meta
                description="Deskripsi Testimony dari client tentang pelayanan kami "
                title="Testimony"
            />
            <Navbar />
            <Jumbotron />
            <h1 className="text-center text-2xl font-bold p-3">
                Top Testimony
            </h1>
            <div className="flex flex-col  mt-3 md:flex-row">
                {testimonies.slice(0, 3).map((testimony) => (
                    <CardTestimony
                        rating={testimony.rating}
                        name={testimony.name}
                        comment={testimony.testimony}
                    />
                ))}
            </div>
            <h1 className="text-center text-2xl font-bold mt-3">
                Testimony Form
            </h1>
            <FormTestimony />
            <Footer />
        </>
    );
}

export default Testimony;
