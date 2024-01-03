import React from "react";

function Image() {
    return (
        <>
            <img
                className="object-cover w-[30%] h-30 rounded-md"
                src="/images/image-detail.jpg"
                alt="card-img"
                loading="lazy"
            />
        </>
    );
}

export default Image;
