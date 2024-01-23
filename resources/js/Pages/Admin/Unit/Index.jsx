import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Index({ units }) {
    const {
        delete: destroy,
        put,
        get,
        data,
        setData,
    } = useForm({
        q: new URLSearchParams(window.location.search).get("q") || "",
    });

    const [searchQuery, setSearchQuery] = useState(false);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
        setSearchQuery(event.target.value);
    };

    const onHandleDelete = (id) => {
        const confirmation = window.confirm(
            "Are you sure you want to delete this data?"
        );

        if (confirmation) {
            destroy(`/admin/unit/${id}`);
        }
    };

    useEffect(() => {
        // tidak dijalankan ketika pertama kali onload
        if (searchQuery !== false) {
            const delay = setTimeout(() => {
                get("/admin/unit", {
                    preserveState: true,
                    replace: true,
                });
            }, 500);

            return () => clearTimeout(delay);
        }
    }, [searchQuery]);

    return (
        <>
            <Head title="Unit" />

            <Link className="text-blue-500" href="/admin/dashboard">
                Back
            </Link>
            <Link className="ml-2 text-blue-500" href="/admin/unit/create">
                Create
            </Link>

            <input
                type="text"
                name="q"
                onChange={(e) => onHandleChange(e)}
                value={data.q}
                className="w-1/3 p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white flex"
                placeholder="Search..."
            />

            {units.data.map((unit) => (
                <div key={unit.id}>
                    <Link>{unit.name}</Link>
                    {unit.is_deleted ? (
                        <span className="ml-2 text-gray-500">Edit</span>
                    ) : (
                        <Link
                            className="ml-2 text-blue-500"
                            href={`/admin/unit/${unit.id}/edit`}
                        >
                            Edit
                        </Link>
                    )}

                    <button
                        className={`ml-2 text-red-500 ${
                            unit.is_deleted ? "text-green-500" : ""
                        }`}
                        onClick={() => {
                            unit.is_deleted
                                ? put(`/admin/unit/${unit.id}/restore`)
                                : onHandleDelete(unit.id);
                        }}
                    >
                        <a className="btn sm danger">
                            {unit.is_deleted ? "Restore" : "Delete"}
                        </a>
                    </button>
                </div>
            ))}

            <div className="pagination">
                {units.meta.links.map((data) => {
                    return (
                        <Link
                            key={data.label}
                            href={data.url}
                            className={`px-3 py-1 hover:bg-indigo-500 text-white-700 rounded-md ${
                                data.active ? "bg-indigo-500" : ""
                            }`}
                        >
                            {data.label === "&laquo; Previous"
                                ? "«"
                                : data.label === "Next &raquo;"
                                ? "»"
                                : data.label}
                        </Link>
                    );
                })}
            </div>
        </>
    );
}
