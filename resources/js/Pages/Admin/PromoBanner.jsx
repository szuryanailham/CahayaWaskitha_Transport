import { Head, useForm } from "@inertiajs/react";

export default function PromoBanner({ statusMessage, banners }) {
    console.log(banners);

    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        image: "",
    });

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "file"
                ? event.target.files[0]
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post("/admin/promo-banner", {
            preserveScroll: true,
            onSuccess: () => reset("title", "image"),
        });
    };

    return (
        <>
            <Head title="Promo Banner" />

            {statusMessage?.message && alert(statusMessage.message)}

            <form onSubmit={submit}>
                <input
                    type="text"
                    name="title"
                    value={data.title}
                    className={`${
                        errors.name ? "is-invalid" : ""
                    } border border-gray-200 p-2 w-full mb-3 dark:bg-gray-800`}
                    onChange={onHandleChange}
                />
                <br />
                <input type="file" name="image" key={data.image} onChange={onHandleChange} />
                <br />
                <button
                    type="submit"
                    disabled={processing}
                    className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    {processing ? "Loading..." : "Submit"}
                </button>
            </form>
        </>
    );
}
