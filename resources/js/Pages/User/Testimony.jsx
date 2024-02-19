import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/home-page/Navbar";
import Jumbotron from "@/Components/About/Jumbotron";
import CardTestimony from "@/Components/Testimony/CardTestimony";
import FormTestimony from "@/Components/Testimony/FormTestimony";
import Footer from "@/Components/home-page/Footer";
CardTestimony;
function Testimony({ testimonies }) {
    console.log(testimonies);
    return (
        <>
            <Head title="Testimony" />
            <Navbar />
            <Jumbotron />
            <h1 className="text-center text-2xl font-bold p-3">
                Top Testimony
            </h1>
            <div className="flex flex-col  mt-3 md:flex-row">
                <CardTestimony />
                <CardTestimony />
                <CardTestimony />
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
