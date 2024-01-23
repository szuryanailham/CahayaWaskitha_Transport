import React from "react";
import { Button } from "../ui/button";
import { Link } from "@inertiajs/react";
function Detail({ name, description, href, capacity }) {
    return (
        <section className="flex items-center flex-col-reverse md:flex-row  lg:mb-5 md:px-4 xl:px-14 ">
            <div className="p-6 md:p-8 w-full md:w-1/2">
                <h1 className="text-3xl font-bold mb-3">{name}</h1>
                <p className="mb-1 leading-8">{description}</p>

                <div className="flex mt-4 gap-4">
                    <h1>
                        Steering : <strong>Manual</strong>
                    </h1>
                    <h1>
                        Capacitas : <strong>{capacity} orang</strong>
                    </h1>
                </div>
                <div className="flex gap-6 justify-center md:justify-start p-8 md:p-16">
                    <Link href={"/"}>
                        <Button className="w-28" variant="outline">
                            Kembali
                        </Button>
                    </Link>
                    <Link href={href}>
                        <Button className="w-28">Sewa segera</Button>
                    </Link>
                </div>
            </div>
            <div className="h-full flex w-full min-w-[399px]  md:w-1/2  overflow-hidden">
                <img
                    className="object-cover p-10 md:p-0 xl:p-5 "
                    src="/pngwing.com_3_1.png"
                    alt="card-img"
                    loading="lazy"
                />
            </div>
        </section>
    );
}

export default Detail;
