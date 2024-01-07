import React from "react";
import Image from "@/Components/DetailUnit/Image";
function ImageBody() {
    return (
        <div className="w-full flex flex-wrap px-2 md:px-4 gap-4 md:gap-10 justify-center ">
            {/* image satu */}
            <Image />
            {/* image dua */}
            <Image />
            {/* image tiga */}
            <Image />
        </div>
    );
}

export default ImageBody;
