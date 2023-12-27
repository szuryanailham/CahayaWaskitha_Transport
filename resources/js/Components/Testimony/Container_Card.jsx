import React from "react";
import CardTestimony from "./cardTestimony";
import FormTestimony from "./FormTestimony";
function Container_Card() {
    return (
        <>
            <h1 className="text-2xl font-bold text-center mt-2 mb-5">
                Top Testimony
            </h1>
            <div className="flex flex-col md:flex-row justify-center">
                <CardTestimony />
                <CardTestimony />
                <CardTestimony />
            </div>
            <FormTestimony />
        </>
    );
}

export default Container_Card;
