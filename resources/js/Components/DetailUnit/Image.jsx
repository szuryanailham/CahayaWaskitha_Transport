import React from "react";

function Image() {
    return (
        <div className="h-[268px] md:h-[200px] xl:h-[300px] w-full md:w-[350px] lg:w-[383px] xl:w-[500px] overflow-hidden rounded-2xl">
            <img
                className="object-cover w-full h-full "
                src="/images/image-detail.jpg"
                alt="card-img"
                loading="lazy"
            />
        </div>
    );
}

export default Image;
