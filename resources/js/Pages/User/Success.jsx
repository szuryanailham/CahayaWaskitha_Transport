import { Head } from "@inertiajs/react";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/Components/ui/button";

export default function Success({ order }) {
    console.log(order);
    return (
        <>
            <Head title="Success" />

            <main className="w-full h-screen flex justify-center items-center">
                <section>
                    <Card className="w-full h-full bg-transparent xl:bg-gray-100 dark:bg-gray-800/50 rounded-none relative">
                        <CardContent className="relative pt-8 px-14 flex flex-col justify-center items-center">
                            <svg
                                className="checkmark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 52 52"
                            >
                                <circle
                                    className="checkmark__circle"
                                    cx="26"
                                    cy="26"
                                    r="25"
                                    fill="none"
                                />
                                <path
                                    className="checkmark__check"
                                    fill="none"
                                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                                />
                                <path
                                    className="checkmark__check"
                                    fill="none"
                                    d="L 8,8"
                                />
                            </svg>
                            <h3>Pembayaran Barhasil</h3>
                        </CardContent>
                        <CardFooter className="p-6">
                            <div className="w-full flex justify-evenly mt-4 xl:mt-12 text-center">
                                <Button
                                    size="lg"
                                    className="rounded-none text-lg font-bold"
                                >
                                    Sewa
                                </Button>
                                <Button
                                    size="lg"
                                    className="bg-gray-300 hover:bg-gray-300/80 dark:text-gray-100 dark:bg-gray-700 dark:hover:bg-gray-700/80 rounded-none text-lg font-semibold"
                                    variant="secondary"
                                >
                                    Detail
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </section>
            </main>
        </>
    );
}
