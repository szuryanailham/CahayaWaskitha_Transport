import React from "react";

function Jumbotron() {
    return (
        <div className="relative mt-14 w-full bg-cover">
            <img
                className="w-full h-[250px] md:h-[500px]"
                src="/images/Jumbotron.jpg"
                alt="Jumbotron_image"
            />
            <div className="absolute top-0 left-0 w-full h-[25 0px] md:h-[500px] bg-slate-800 opacity-25"></div>

            <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-10 drop-shadow-md">
                <h1 className="w-[300px] md:w-[600px] text-3xl md:text-6xl font-bold mb-[2px] shd">
                    Cahaya Waskitha Transport
                </h1>
                <span className="mt-20 text-lg md:text-xl">
                    Solusi rental andalan anda
                </span>
            </div>
        </div>
    );
}

export default Jumbotron;
