import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";

const PaketWisataCard = () => {
    return (
        <Card className="w-full bg-transparent xl:bg-white dark:bg-gray-800/50 rounded-none shadow-card shadow rounded-b-lg">
            <CardHeader className="p-0">
                <img
                    className=" h-[212px] w-full object-cover"
                    src="/images/paket-wisata-jogja-slider1.2.jpg"
                    alt=""
                />
            </CardHeader>
            <CardContent className="flex flex-col items-center px-3 py-0 ">
                <CardTitle className="w-5/6 text-center my-4 font-bold text-2xl underline">
                    Paket 1 Hari (One Day Tour) Jogja
                </CardTitle>
                <ul className="w-full text-center text-gray-700 bg-gray-200 py-4 text-xl flex flex-col gap-1">
                    <li>
                        <strong>2</strong> pax = Rp 580 ribu /pax
                    </li>
                    <li>
                        <strong>3</strong> pax = Rp 520 ribu /pax
                    </li>
                    <li>
                        <strong>4</strong> pax = Rp 485 ribu /pax
                    </li>
                    <li>
                        <strong>5</strong> pax = Rp 420 ribu /pax
                    </li>
                    <li>
                        <strong>6-8</strong> pax = Rp 395 ribu /pax
                    </li>
                    <li>
                        <strong>9-12</strong> pax = Rp 390 ribu /pax
                    </li>
                </ul>
                <div className="py-4 px-2 flex flex-col bg-[#ffede1] dark:text-black">
                    <span>Include:</span>
                    <p>
                        Transport, Hotel, Guide (Group) BBM, Air Mineral, Makan,
                        Parkir, Jeep Merapi, Tipping
                    </p>
                </div>
            </CardContent>
            <CardFooter className=" flex justify-center py-6">
                <Button className="bg-[#1ba0e2] rounded-[2rem] text-xl h-16 px-16">
                    <FaWhatsapp className="mr-2" />
                    Info Detail
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PaketWisataCard;
