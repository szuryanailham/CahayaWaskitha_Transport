import { Head, Link, router, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Dashboard({ unit, categories }) {
    const { data, setData, processing, errors } = useForm({
        ...unit,
        image: [],
    });

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
            <Head title="Edit Unit" />

            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                Edit
            </h1>
            <form onSubmit={submit} className="md:w-2/3 lg:w-1/3 mx-auto mb-2">
                <input
                    type="text"
                    name="name"
                    defaultValue={data.name}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Name"
                    className={`${
                        errors.name ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                    autoFocus
                />
                {Object.values(errors).length > 0 ? errors.name : ""}

                <select
                    name="category_id"
                    defaultValue={data.category_id}
                    onChange={(e) => onHandleChange(e)}
                    className={`${
                        errors.category_id ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                >
                    <option value="">Select Category</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
                {Object.values(errors).length > 0 ? errors.category_id : ""}

                <textarea
                    name="description"
                    defaultValue={data.description}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Description"
                    className={`${
                        errors.description ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.description : ""}

                <input
                    type="number"
                    name="capacity"
                    defaultValue={data.capacity}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Capacity"
                    className={`${
                        errors.capacity ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.capacity : ""}

                <select
                    name="steering"
                    defaultValue={data.steering}
                    onChange={(e) => onHandleChange(e)}
                    className={`${
                        errors.steering ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                >
                    <option value="">Select Steering</option>
                    <option value="Auto">Auto</option>
                    <option value="Manual">Manual</option>
                </select>
                {Object.values(errors).length > 0 ? errors.steering : ""}

                <input
                    type="number"
                    name="price"
                    defaultValue={data.price}
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Price"
                    className={`${
                        errors.price ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.price : ""}

                <input
                    type="file"
                    name="image"
                    id=""
                    onChange={(e) => onHandleChange(e)}
                    multiple
                />

                <div>
                    {images &&
                        images.map((img, index) => {
                            return (
                                <div key={img.id}>
                                    <img
                                        src={`/storage/${img.image}`}
                                        alt=""
                                        className="w-1/2 h-40 object-cover"
                                    />
                                    <button onClick={() => removeImage(index)}>
                                        X
                                    </button>
                                </div>
                            );
                        })}
                </div>

                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {processing ? "Loading..." : "Submit"}
                </button>

                <div className="text-center mt-3">
                    <Link className="text-blue-500" href="/admin/unit">
                        Back
                    </Link>
                </div>
            </form>
        </>
    );
}
