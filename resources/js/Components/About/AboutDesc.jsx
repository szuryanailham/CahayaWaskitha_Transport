import React from "react";
import { HiMiniBuildingOffice } from "react-icons/hi2";
import { IoPersonSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FastForward } from "lucide-react";
function AboutDesc() {
    return (
        <div className="w-full h-fit">
            <h1 className="text-2xl font-bold text-center mt-2 mb-2">
                About Us
            </h1>
            <div className="text-center md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Numquam sit molestiae facere eveniet, odit dicta velit dolore
                repellendus unde ipsa id dignissimos tempora ullam aliquid
                delectus aut nobis. Placeat voluptates natus numquam ut earum,
                voluptas tempore,
            </div>
            <div className="mx-10 mt-5">
                <span className="flex">
                    <HiMiniBuildingOffice className="text-2xl mr-3" />
                    <p>Cahaya Waskitha Transport</p>
                </span>
                <span className="flex mt-3">
                    <IoPersonSharp className="text-2xl mr-3" />
                    <p>Bayu Waskitha</p>
                </span>
                <span className="flex mt-3">
                    <FaMapMarkerAlt className="text-2xl mr-3" />
                    <p>Yogyakarta ,Indonesia</p>
                </span>
            </div>
        </div>
    );
}

export default AboutDesc;
