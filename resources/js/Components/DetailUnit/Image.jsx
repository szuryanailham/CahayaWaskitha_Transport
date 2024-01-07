import React from "react";

function Image() {
    return (
        <div className="w-full max-w-full md:max-w-[320px] lg:max-w-[450px] xl:max-w-[500px] overflow-hidden rounded-2xl">
            <img
                className="object-cover aspect-[4/3] md:aspect-[5/3] h-full w-full"
                src="/images/image-detail.jpg"
                alt="card-img"
                loading="lazy"
            />
        </div>
    );
}

export default Image;
