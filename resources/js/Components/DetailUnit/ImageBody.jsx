import React from "react";
import Image from "@/Components/DetailUnit/Image";
function ImageBody() {
    return (
        <div className="mt-4 xl:mt-14 flex flex-wrap justify-center xl:justify-center gap-4 md:gap-7 xl:gap-9 px-2 xl:px-28">
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
