import React from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

function CardTestimony({ name, rating, comment }) {
    return (
        <div className="w-[60%] max-h-[20%] md:w-[30%] md:gap-5 bg-white dark:bg-gray-800 mt-3 flex flex-col justify-center items-center p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] mx-auto">
            {/*  photo icon */}
            <img
                src="/images/avatar.png"
                alt="avatar-1"
                className="h-16 w-16 object-cover rounded-full"
            />
            {/* rating bintang */}
            <div className="">
                <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
            </div>
            {/* nama penulis */}
            <p className="font-bold text-center">{name}</p>
            <p className="italic text-center text-sm  p-2">" {comment} "</p>
            {/* isi penulis */}
        </div>
    );
}

export default CardTestimony;
