import React from "react";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
function AboutDesc() {
    return (
        <div className="w-full h-fit md:mt-10">
            <h1 className="text-2xl font-bold text-center mt-7 mb-2">
                About Us
            </h1>
            <div className=" text-center mx-auto w-[90%]">
                <div className="p-3">
                    <p class="text-md text-gray-800 dark:text-white leading-relaxed text-left">
                        Cahaya Waskitha Jogja dengan senang hati melayani
                        berbagai kebutuhan perjalanan Anda. Kami menyediakan
                        armada mobil untuk keperluan perjalanan pribadi,
                        keluarga, atau bisnis. Dengan berbagai paket Wisata yang
                        kami tawarkan, Anda dapat memilih sesuai dengan
                        kebutuhan Anda Kami menawarkan armada terlengkap dengan
                        pilihan transmisi manual maupun otomatis (matic). Semua
                        unit kendaraan kami dalam kondisi terbaik
                    </p>
                </div>

                <div className="p-10 text-center">
                    <span className="flex">
                        <HiMiniBuildingOffice className="text-2xl mr-3" />
                        <p>Cahaya Waskitha Transport</p>
                    </span>
                    <span className="flex mt-5">
                        <IoPersonSharp className="text-2xl mr-3" />
                        <p>Bayu Waskitha</p>
                    </span>
                    <span className="flex mt-5">
                        <FaMapMarkerAlt className="text-2xl mr-3" />
                        <p>Yogyakarta ,Indonesia</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AboutDesc;
