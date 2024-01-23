import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import { Input } from "@/Components/ui/input";
import React from "react";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/Components/ui/button";
function AddUnit() {
    return (
        <>
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-5">
                    {/* FORM INPUT NEW UNIT */}
                    <h1 className="text-center text-2xl mt-5 font-bold">
                        Form New Unit
                    </h1>
                    <form className=" w-full md:w-[70%] m-auto" action="">
                        {/* nama unit */}
                        <label className="font-bold" htmlFor="nama_unit">
                            Nama
                        </label>
                        <Input
                            id="nama_unit"
                            className="dark:bg-gray-800 mt-2 "
                            type="text"
                            placeholder="name unit....."
                        />
                        {/* slug */}
                        <label className="font-bold mt-2" htmlFor="slug_unit">
                            Slug
                        </label>
                        <Textarea
                            id="slug_unit"
                            className="dark:bg-gray-800 mt-3"
                            type="text"
                            placeholder="ulasan singkat....."
                        />
                        {/* penjelasaan */}
                        <label className="font-bold" htmlFor="desc_unit">
                            Deskripsi
                        </label>
                        <Textarea
                            id="desc_unit"
                            className="dark:bg-gray-800 mt-3"
                            type="text"
                            placeholder="deskripsi lengkap ....."
                        />
                        {/* harga */}
                        <label className="font-bold" htmlFor="harga_unit">
                            Harga
                        </label>
                        <Input
                            id="harga_unit"
                            className="dark:bg-gray-800 mt-3 "
                            type="number"
                            placeholder="harga unit....."
                        />
                        {/* kapasitas */}
                        <label className="font-bold" htmlFor="kapasitas_unit">
                            kapasitas
                        </label>
                        <Input
                            id="kapasitas_unit"
                            className="dark:bg-gray-800 mt-3 "
                            type="number"
                            placeholder="kapasitas unit....."
                        />
                        {/* aploud image */}
                        <div className="flex items-center justify-evenly  w-full mt-5 gap-2">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-[50%] h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                            >
                                <div className="flex flex-col items-center justify-center p-6">
                                    <svg
                                        className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                        />
                                    </svg>
                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                            Click to upload
                                        </span>{" "}
                                        your promo here
                                    </p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">
                                        PNG, JPG (MAX. 800x400px)
                                    </p>
                                </div>
                                <input
                                    id="dropzone-file"
                                    type="file"
                                    className="hidden"
                                />
                            </label>

                            {/* kriteria uploud */}
                            <div className="w-[50%] p-5">
                                <h1 className=" text-sm md:text-2xl font-bold mb-4">
                                    Ketentuan Unggah Gambar:
                                </h1>
                                <ul className="list-disc text-xs md:text-xl pl-5">
                                    <li className="mb-2">
                                        Unggah 4 gambar untuk setiap unit baru
                                    </li>
                                    <li className="mb-2">
                                        Unggah 4 gambar : 1 full body (png) dan
                                        3 foto tambahan (jpg)
                                    </li>
                                    <li className="mb-2">
                                        Unggah gambar dengan resolusi ....
                                    </li>
                                    <li>
                                        edit gambar dan unggah ulang jika gambar
                                        mengalami kerusakan atau lag
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* submit button */}
                        <div className="flex justify-center mt-5">
                            <Button className="m-auto bg-blue-600 text-white">
                                Submit
                            </Button>
                        </div>
                    </form>
                    {/* END FORM NEW UNIT */}
                </div>
            </div>
        </>
    );
}

export default AddUnit;
