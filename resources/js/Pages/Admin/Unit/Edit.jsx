import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import LandingPage_dash from "@/Components/DashboardComponent/LandingPage_dash";
import { Input } from "@/Components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from "@/components/ui/select";
import { Button } from "@/Components/ui/button";

export default function Dashboard({ unit, categories }) {
    const { data, setData, processing } = useForm({
        ...unit,
        image: [],
    });

    const { errors } = usePage().props;

    const [images, setImages] = useState(unit.image);
    const [ids, setIds] = useState(unit.image.map((image) => image.id));

    useEffect(() => {
        setData("ids", ids);
    }, [ids]);

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

        router.post("/admin/unit/" + unit.id, {
            _method: "PUT",
            ...data,
        });
    };

    const removeImage = (indexToRemove) => {
        setImages((prevImages) =>
            prevImages.filter((_, index) => index !== indexToRemove)
        );

        setIds((prevImages) =>
            prevImages.filter((_, index) => index !== indexToRemove)
        );
    };

    return (
        <>
            <SidebarDashboard />
            <div class="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-5">
                    <Head title="Edit Unit" />
                    <h1 className="text-center font-bold text-2xl mb-3">
                        Edit Unit
                    </h1>
                    <form
                        onSubmit={submit}
                        className="w-full md:w-[70%] m-auto"
                        action=""
                    >
                        {/* contain */}
                        <div>
                            {/* nama  unit */}
                            <label className="font-bold" htmlFor="nama_unit">
                                Nama Unit
                            </label>
                            <div>
                                <Input
                                    id="name"
                                    name="name"
                                    defaultValue={data.name}
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
                            {/* <Input
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Name"
                                defaultValue={data.name}
                                className={`${
                                    errors.name ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                                autoFocus
                            />
                            {Object.values(errors).length > 0 ? (
                                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.name}
                                </p>
                            ) : (
                                ""
                            )} */}
                        </div>
                        {/* category */}
                        <div>
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
                        </div>
                        {/* description */}
                        <div>
                            <label
                                className="font-bold mb-3"
                                htmlFor="nama_unit"
                            >
                                Deskripsi
                            </label>
                            <Textarea
                                name="description"
                                defaultValue={data.description}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Description"
                                className={`${
                                    errors.description ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            ></Textarea>
                            {Object.values(errors).length > 0 ? (
                                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.description}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        {/* kapasitas */}
                        <div>
                            <label
                                className="font-bold mb-3"
                                htmlFor="nama_unit"
                            >
                                Kapasitas
                            </label>
                            <Input
                                type="number"
                                name="capacity"
                                defaultValue={data.capacity}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Capacity"
                                className={`${
                                    errors.capacity ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            />
                            {Object.values(errors).length > 0 ? (
                                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.capacity}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        {/* driver mode */}
                        <div>
                            <label className="font-bold" htmlFor="nama_unit">
                                Driver Mode
                            </label>
                            <Select
                                name="steering"
                                defaultValue={data.steering}
                                onChange={(e) => onHandleChange(e)}
                                className={`${
                                    errors.steering ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            >
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select Steering" />
                                </SelectTrigger>
                                <SelectContent>
                                    <option value=""></option>
                                    <option>
                                        <SelectItem value="Auto">
                                            Auto
                                        </SelectItem>
                                        <SelectItem value="Manual">
                                            Manual
                                        </SelectItem>
                                    </option>
                                </SelectContent>
                            </Select>
                            {Object.values(errors).length > 0 ? (
                                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.steering}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        {/* harga */}
                        <div>
                            <label
                                className="font-bold mb-3"
                                htmlFor="nama_unit"
                            >
                                Harga
                            </label>
                            <Input
                                type="number"
                                name="price"
                                defaultValue={data.price}
                                onChange={(e) => onHandleChange(e)}
                                placeholder="Price"
                                className={`${
                                    errors.price ? "is-invalid" : ""
                                } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                            />
                            {Object.values(errors).length > 0 ? (
                                <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                                    {errors.price}
                                </p>
                            ) : (
                                ""
                            )}
                        </div>
                        {/* image aploud */}
                        {images &&
                            images.map((img, index) => {
                                return (
                                    <div key={img.id}>
                                        <img
                                            src={`/storage/${img.image}`}
                                            alt=""
                                            className="w-1/2 h-40 object-cover"
                                        />
                                        <button
                                            onClick={() => removeImage(index)}
                                        >
                                            X
                                        </button>
                                    </div>
                                );
                            })}

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
                                    className="w-[50%] md:w-[80%]"
                                    name="image"
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
                        <div className="w-full flex flex-row gap-2 justify-center mt-5">
                            <Button
                                type="submit"
                                disabled={processing}
                                className="w-[20%] py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                {processing ? "Loading..." : "Submit"}
                            </Button>

                            <Link className="text-blue-500" href="/admin/unit">
                                <Button>Back</Button>
                            </Link>
                        </div>
                    </form>

                    {/* <form className="md:w-2/3 lg:w-1/3 mx-auto mb-2">
                     
                    </form> */}
                    {/* end contain */}
                </div>
            </div>
        </>
    );
}
