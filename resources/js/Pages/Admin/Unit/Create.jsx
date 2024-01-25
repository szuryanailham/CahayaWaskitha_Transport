import { Head, Link, useForm } from "@inertiajs/react";
import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import { Input } from "@/Components/ui/input";
import React from "react";
import { Textarea } from "@/Components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/Components/ui/button";

export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        category_id: "",
        description: "",
        capacity: "",
        price: "",
        image: [],
    });

    console.log(data);

    const onHandleChange = (event) => {
        if (event.target.type === "file") {
            const files = event.target.files;

            if (files.length > 0) {
                const fileArray = Array.from(files);
                setData(event.target.name, fileArray);
            }
        } else {
            setData(event.target.name, event.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post("/admin/unit");
    };

    return (
        <>
            <Head title="Create Unit" />
            <SidebarDashboard />
            <div className="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-5">
                    <h1 className="text-center text-2xl mt-5 font-bold">
                        Form New Unit
                    </h1>
                    <form
                        onSubmit={submit}
                        className="w-full md:w-[70%] m-auto flex flex-col gap-2"
                    >
                        <div>
                            <label className="font-bold" htmlFor="name">
                                Nama
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                onChange={(e) => onHandleChange(e)}
                                placeholder="name unit....."
                                className={`${
                                    errors.name ? "is-invalid" : ""
                                } dark:bg-gray-800 mt-2 `}
                                autoFocus
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.name
                                    : ""}
                            </span>
                        </div>

                        <div>
                            <label className="font-bold" htmlFor="category_id">
                                Kategori
                            </label>
                            <Select
                                onValueChange={(value) => {
                                    setData((current) => ({
                                        ...current,
                                        category_id: value,
                                    }));
                                }}
                                id="category_id"
                                name="category_id"
                            >
                                <SelectTrigger
                                    className={`${
                                        errors.category_id ? "is-invalid" : ""
                                    } dark:bg-gray-800 mt-3`}
                                >
                                    {!data.category_id
                                        ? "Select Category"
                                        : categories.map((category) => {
                                              return (
                                                  category.id ===
                                                      +data.category_id && (
                                                      <span key={category.id}>
                                                          {category.name}
                                                      </span>
                                                  )
                                              );
                                          })}
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Select Category
                                        </SelectLabel>
                                        {categories.map((category) => (
                                            <SelectItem
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.category_id
                                    : ""}
                            </span>
                        </div>
                        <div>
                            <label className="font-bold" htmlFor="description">
                                Deskripsi
                            </label>
                            <Textarea
                                name="description"
                                id="description"
                                onChange={(e) => onHandleChange(e)}
                                className={`${
                                    errors.description ? "is-invalid" : ""
                                }dark:bg-gray-800 mt-3`}
                                type="text"
                                placeholder="deskripsi lengkap ....."
                            />
                            <span>
                                {" "}
                                {Object.values(errors).length > 0
                                    ? errors.description
                                    : ""}
                            </span>
                        </div>

                        <div>
                            <label className="font-bold" htmlFor="price">
                                Harga
                            </label>
                            <Input
                                type="number"
                                id="price"
                                name="price"
                                onChange={(e) => onHandleChange(e)}
                                placeholder="harga.."
                                className={`${
                                    errors.price ? "is-invalid" : ""
                                } dark:bg-gray-800 mt-3`}
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.price
                                    : ""}
                            </span>
                        </div>
                        <div>
                            <label className="font-bold" htmlFor="capacity">
                                kapasitas
                            </label>
                            <Input
                                id="capacity"
                                name="capacity"
                                type="number"
                                placeholder="kapasitas unit....."
                                onChange={(e) => onHandleChange(e)}
                                className={`${
                                    errors.capacity ? "is-invalid" : ""
                                } dark:bg-gray-800 mt-3`}
                            />
                            <span>
                                {" "}
                                {Object.values(errors).length > 0
                                    ? errors.capacity
                                    : ""}
                            </span>
                        </div>
                        <div className="flex items-center justify-evenly  w-full mt-5 gap-2">
                            <label
                                htmlFor="image"
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
                                    id="image"
                                    type="file"
                                    name="image"
                                    className="hidden"
                                    onChange={(e) => onHandleChange(e)}
                                    multiple
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

                        <div className="flex justify-center mt-5 gap-4">
                            <Link className="text-blue-500" href="/admin/unit">
                                <Button variant="outline">Back</Button>
                            </Link>
                            <Button
                                disabled={processing}
                                type="submit"
                                className="bg-blue-600 text-white"
                            >
                                {processing ? "Loading..." : "Submit"}
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
