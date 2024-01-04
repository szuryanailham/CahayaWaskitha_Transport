import React from "react";
import { SlSocialFacebook, SlSocialYoutube } from "react-icons/sl";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
function Footer() {
    return (
        <div className="w-full h-full mt-20">
            <h1 className=" w-full font-bold mx-auto text-center text-2xl mb-20">
                Cahaya Waskitha Transport
            </h1>
            {/* social media logo */}
            <div className="flex justify-evenly text-3xl md:text-4xl mb-20">
                <SlSocialYoutube />
                <FaInstagram />
                <SlSocialFacebook />
                <FaWhatsapp />
            </div>
            <div className="w-[80%] md:w-[100%] m-auto flex flex-wrap justify-around ">
                {/* Box 1 */}
                <div className="text-left mt-8">
                    <h3 className="font-bold">About</h3>
                    <p className="text-slate-400 mt-5">Home</p>
                    <p className="text-slate-400 mt-5">Profile</p>
                    <p className="text-slate-400 mt-5">Testimony</p>
                    <p className="text-slate-400 mt-5">Privace and Police</p>
                </div>
                {/* box 2 */}
                <div className="text-right md:text-center mt-5">
                    <h3 className="font-bold mt-5">Social</h3>
                    <p className="text-slate-400 mt-5">Instagram</p>
                    <p className="text-slate-400 mt-5">FaceBook</p>
                    <p className="text-slate-400 mt-5">Whatshapp</p>
                    <p className="text-slate-400 mt-5">Privace and Police</p>
                </div>

                {/* box 3 */}
                <div className="text-left mr-[60%] md:text-right md:mr-0 mt-5">
                    <h3 className="font-bold mt-5">Event</h3>
                    <p className="text-slate-400 mt-5">Blog</p>
                    <p className="text-slate-400 mt-5">Rent Car</p>
                    <p className="text-slate-400 mt-5">Tour Package</p>
                    <p className="text-slate-400 mt-5">Login as Admim </p>
                </div>
            </div>
            <div className="text-center w-full h-fit  p-3 mt-20">
                &copy;2023 CahayaWaskitha.All rights reserved
            </div>
        </div>
    );
}

export default Footer;
