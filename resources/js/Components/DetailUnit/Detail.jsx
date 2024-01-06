import React from "react";
import { Button } from "../ui/button";
function Detail() {
    return (
        <section className="flex flex-col-reverse md:flex-row h-full mt-24 md:px-4 xl:px-14">
            <div className="p-6 md:p-8 w-full md:w-1/2">
                <h1 className="text-3xl xl:text-4xl font-bold mb-3">
                    Toyota Innova
                </h1>
                <p className="mb-1 leading-8">
                    NISMO has become the embodiment of Nissan's outstanding
                    performance, inspired by the most unforgiving proving
                    ground, the "race track".
                </p>

                <div className="flex mt-4 gap-4">
                    <h1>
                        Steering : <strong>Manual</strong>
                    </h1>
                    <h1>
                        Capacitas : <strong>7 orang</strong>
                    </h1>
                </div>
                <div className="flex items-center justify-center p-8 md:p-16">
                    <Button>Sewa segera</Button>
                </div>
            </div>
            <div className="h-full xl:h-[330px] w-full min-w-[399px] md:w-1/2 pt-4 xl:p-4 overflow-hidden">
                <img
                    className="object-cover w-full h-full"
                    src="/pngwing.com_3_1.png"
                    alt="card-img"
                    loading="lazy"
                />
            </div>
        </section>
    );
}

export default Detail;
