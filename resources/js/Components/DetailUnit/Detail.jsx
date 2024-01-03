import React from "react";
import { Button } from "../ui/button";
function Detail() {
    return (
        <>
            {/* DETAIL IMAGE */}
            <div className="mt-5">
                <img
                    className="object-cover w-full md:w-[45%] p-10"
                    src="/pngwing.com_3_1.png"
                    alt="card-img"
                    loading="lazy"
                />
            </div>
            {/* DETAIL IMAGE */}

            {/* DETAIL TEXT */}
            <div className="p-2">
                {/* detail unit text  */}
                <h1 className="text-3xl font-bold mb-3">Toyota Innova</h1>
                {/* detial unit description */}
                <p className="mb-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Saepe voluptatibus nam sequi autem ratione vel cumque facere
                    alias ipsam perferendis.
                </p>
                {/* list detial */}
                <div className="mt-4">
                    <h1>Steering : Manual</h1>
                    <h1>Capacitas : 7 orang</h1>
                </div>
                <Button>Sewa segera</Button>
            </div>
            {/* END DETAIL TEXT */}
        </>
    );
}

export default Detail;
