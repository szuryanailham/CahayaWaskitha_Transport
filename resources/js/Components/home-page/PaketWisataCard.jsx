import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Link } from "@inertiajs/react";

const PaketWisataCard = ({ src, title, destinations, includes }) => {
    return (
        <Card className="w-full h-full bg-transparent xl:bg-white dark:bg-gray-800 rounded-none shadow-card shadow rounded-b-lg">
            <CardHeader className="p-0">
                <img
                    className="h-[212px] w-full object-cover"
                    src={src}
                    alt={title}
                />
            </CardHeader>
            <CardContent className="flex flex-col items-center px-3 py-0 ">
                <div className="w-full h-full flex items-center justify-center p-4">
                    <CardTitle className="w-10/12 text-center font-bold text-2xl underline min-h-[64px] flex items-center justify-center ">
                        {title}
                    </CardTitle>
                </div>
                <div className="w-full">
                    <ul className="w-full text-center text-gray-700 bg-gray-200 py-4 text-xl flex flex-col gap-1">
                        {destinations?.map((item, index) => (
                            <li key={index} className="flex p-2">
                                <strong className="mr-5">{item.day} day</strong>
                                {item.place}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="py-4 px-2 w-full flex flex-col bg-[#ffede1] dark:text-white dark:bg-slate-600">
                    <span className="font-semibold italic underline">
                        Include:
                    </span>
                    <p>
                        {includes?.map((item, index) => {
                            return index === includes.length - 1 ? (
                                <span>{item}</span>
                            ) : (
                                <span>{item}, </span>
                            );
                        })}
                    </p>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center items-center py-6">
                <a href="https://api.whatsapp.com/send?phone=6282230372696&text=hallo%20Cahaya%20Waskitha%20Transport!%20saya%20tertarik%20dengan%20penawaran%20jasa%20rental%20mobil%20%20dan%20paket%20wisata%20anda%20%F0%9F%98%8E">
                    <Button className="bg-[#1ba0e2] rounded-[2rem] text-lg h-10 px-8">
                        <FaWhatsapp className="mr-2" />
                        Info Detail
                    </Button>
                </a>
            </CardFooter>
        </Card>
    );
};

export default PaketWisataCard;
