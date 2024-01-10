import React from "react";

function CardTransaction() {
    return (
        <div className="w-full h-fit rounded-md shadow-md divide-x divide-slate-400 p-2 flex justify-evenly gap-1 mb-5">
            {/* card photo  and kode transaction */}
            <div className="w-[20%] pt-5">
                <h1 className="mb-5 font-bold text-md md:text-xl">TR-001</h1>
                <img
                    className=" w-15 h-15 md:w-25 md:h-20"
                    src="/pngwing.com_3_1.png"
                    alt=""
                />
            </div>
            {/* info unit and  penyewa */}
            <div className="p-5 w-[40%]">
                <h2 className="font-bold text-md md:text-xl">Toyotta Innova</h2>
                <p className="text-sm md:text-xl">
                    <span className="font-bold">Bambang Sugeni </span>||
                    0868686557
                </p>
                <p>Alamat : Yogyakarata, Bantul, Nitikan</p>
                {/* durasi dan harga */}
                <div className="mt-[30%] flex flex-col md:flex-row gap-5 text-sm md:text-2xl">
                    <p className="font-bold text-xs md:text-sm md:w-16">
                        1 hari (24 jam)
                    </p>
                    <p className="mr-20 text-md md:text-xl font-bold">
                        Rp.1.200.0000
                    </p>
                </div>
            </div>
            {/* lokasi dan waktu  detail  */}
            <div className="w-[20%] p-3">
                {/* from date and time */}
                <div className="mt-10">
                    <p className=" w-15 md:w-24 break-words text-sm md:text-md">
                        <span className="font-bold">Senin</span>, 15 January
                        2024 09.00
                    </p>
                    {/* until date and time */}
                    <p className=" w-15 md:w-24 break-words mt-10 text-sm md:text-md">
                        <span className="font-bold">Selasa</span>, 16 January
                        2024 09.00
                    </p>
                </div>
            </div>
            {/* location detail */}
            <div className=" w-[20%] flex  items-center gap-0 md:gap-3 border-black">
                <img
                    className="w-10 hidden md:block"
                    src="/images/dashboard/pin_location.svg"
                    alt=""
                />
                <p className="break-words md:w-20 text-xs md:text-sm font-bold">
                    Station Tugu Yogyakarta
                </p>
            </div>
            {/* action */}

            <div className=" w-[20%] flex justify-center m-auto">
                <div className="flex justify-between flex-col md:flex-row gap-2">
                    <a href="#">
                        <img
                            className="sm:w-20 md:w-7"
                            src="/images/dashboard/edit.svg"
                            alt="edit_icon"
                        />
                    </a>
                    <a href="#">
                        <img
                            className="w-7"
                            src="/images/dashboard/trash.svg"
                            alt="edit_icon"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CardTransaction;
