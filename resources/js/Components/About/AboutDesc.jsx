import React from "react";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FastForward } from "lucide-react";
function AboutDesc() {
    return (
        <div className="w-full h-fit md:mt-10">
            <h1 className="text-2xl font-bold text-center mt-2 mb-2">
                About Us
            </h1>
            <div className=" text-center mx-auto w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur animi, eius, impedit ducimus magni vero dolorem fugit
                consectetur vitae ipsum explicabo repellendus dolor natus non
                assumenda, laborum quos. Cum dolorum natus, itaque quisquam
                nulla numquam reprehenderit eaque molestiae error, consectetur
                vitae odit cumque perferendis doloribus. Laudantium ratione
                accusamus nisi ex. Veniam quidem odio, labore accusamus eaque id
                totam vel blanditiis iure sint perspiciatis soluta quod
                recusandae officia amet at consequuntur suscipit eius commodi.
                <div className="p-10">
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
