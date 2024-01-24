import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        category_id: "",
        description: "",
        capacity: "",
        steering: "",
        price: "",
        image: [],
    });

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

            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
                Create
            </h1>
            <form onSubmit={submit} className="md:w-2/3 lg:w-1/3 mx-auto mb-2">
                <input
                    type="text"
                    name="name"
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
                    onChange={(e) => onHandleChange(e)}
                    placeholder="Capacity"
                    className={`${
                        errors.capacity ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                />
                {Object.values(errors).length > 0 ? errors.capacity : ""}

                <select
                    name="steering"
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
