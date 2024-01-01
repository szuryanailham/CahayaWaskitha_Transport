import { cn } from "@/lib/utils";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const ProductCard = ({ className, name, src, price }) => {
    const harga = 100000;
    return (
        <>
            <div className={cn("inline-block w-full", className)}>
                <div className=" relative min-w-full">
                    <div className="h-full">
                        <Card className="max-w-[403px] min-h-[372px] w-full bg-white xl:bg-gray-100 dark:bg-gray-600 rounded-none shadow-card shadow relative">
                            <CardContent className="flex w-full justify-between pt-9 xl:pt-0 xl:px-4 xl:absolute xl:left-0 xl:top-4 z-[2]">
                                <CardTitle className="font-bold text-m text-md">
                                    Toyota Innova
                                </CardTitle>
                                <CardTitle className="break-words font-bold text-lg">
                                    Rp
                                    {harga.toLocaleString("id-ID", {
                                        currency: "IDR",
                                    })}
                                </CardTitle>
                            </CardContent>
                            <CardContent className="relative pt-8 px-14">
                                <div className="w-full h-full overflow-hidden">
                                    <img
                                        className="object-cover w-full hover:scale-110 "
                                        src="/pngwing.com_3_1.png"
                                        alt="card-img"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="w-full flex items-center justify-center space-x-14 xl:absolute xl:-bottom-4 xl:left-0 font-semibold">
                                    <figure className="items-center flex flex-col ">
                                        <img
                                            className="w-[25px] h-[25px] dark:invert"
                                            height={25}
                                            width={25}
                                            src="/🦆 icon _clock_.svg"
                                            alt="icon.svg"
                                        />
                                        <figcaption className="whitespace-nowrap">
                                            12 Jam
                                        </figcaption>
                                    </figure>
                                    <figure className="items-center flex flex-col  ">
                                        <img
                                            className="w-[25px] h-[25px] dark:invert"
                                            height={25}
                                            width={25}
                                            src="/User.svg"
                                            alt="icon.svg"
                                        />
                                        <figcaption className="whitespace-nowrap">
                                            6 Orang
                                        </figcaption>
                                    </figure>
                                    <figure className="items-center flex flex-col  ">
                                        <img
                                            className="w-[25px] h-[25px] dark:invert"
                                            height={25}
                                            width={25}
                                            src="/Gas station.svg"
                                            alt="icon.svg"
                                        />
                                        <figcaption className="whitespace-nowrap">
                                            Full Bensin
                                        </figcaption>
                                    </figure>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <div className="w-full flex justify-evenly mt-12 text-center">
                                    <Button
                                        size="lg"
                                        className="rounded-none text-lg font-bold"
                                    >
                                        Sewa
                                    </Button>
                                    <Button
                                        size="lg"
                                        className="bg-gray-300 hover:bg-gray-300/80 dark:text-gray-100 dark:bg-gray-700 rounded-none text-lg font-semibold"
                                        variant="secondary"
                                    >
                                        Detail
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
