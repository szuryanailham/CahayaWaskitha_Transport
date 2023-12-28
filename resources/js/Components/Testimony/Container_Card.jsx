import React from "react";
import CardTestimony from "./cardTestimony";
import FormTestimony from "./FormTestimony";
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
                <h1 className="text-center mt-5 font-bold text-xl">
                    Form Testimony
                </h1>
                <FormTestimony />
            </div>
            <Footer />
        </>
    );
}

export default Container_Card;
