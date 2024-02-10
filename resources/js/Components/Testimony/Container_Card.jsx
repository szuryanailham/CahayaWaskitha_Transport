import React from "react";
import CardTestimony from "@/Components/Testimony/Container_Card";
import FormTestimony from "@/Components/Testimony/FormTestimony";
import Footer from "../home-page/Footer";
function Container_Card() {
    return (
        <>
            <h1 className="text-2xl font-bold text-center mt-5 mb-2">
                Top Testimony
            </h1>
            <div className="flex flex-col md:flex-row justify-center">
                <CardTestimony />
                <CardTestimony />
                <CardTestimony />
            </div>
            <div>
                <h1 className="text-center mt-10 font-bold text-xl">
                    Form Testimony
                </h1>
                <FormTestimony />
            </div>
            <Footer />
        </>
    );
}

export default Container_Card;
