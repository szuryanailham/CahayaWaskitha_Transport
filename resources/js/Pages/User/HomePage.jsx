import { Head, Link } from "@inertiajs/react";

export default function HomePage({ categories, units }) {
    return (
        <>
            <Head title="Home" />

            <h1>List Category</h1>
            {categories.data.map((category) => (
                <div key={category.id}>
                    <Link
                        as="button"
                        style={{ border: "1px solid black" }}
                        href={`/${category.slug}`}
                    >
                        {category.name}
                    </Link>
                </div>
            ))}

            <br />

            <h1>List Units</h1>
            {units.data.map((unit) => (
                <div key={unit.id}>
                    <Link href={`/unit/${unit.slug}`}>{unit.name}</Link>
                </div>
            ))}
        </>
    );
}
