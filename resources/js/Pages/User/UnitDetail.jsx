import { Head, Link } from "@inertiajs/react";

export default function UnitDetail({ unit }) {
    return (
        <>
            <Head title="Unit Detail" />
            <h1>Unit Detail Page</h1>
            nama: {unit.data.name}
            <br />
            price: {unit.data.price}
            <br />
            <Link
                as="button"
                style={{ border: "1px solid black" }}
                href={`/checkout/${unit.data.id}`}
            >
                Sewa
            </Link>
            <br />
            <Link as="button" style={{ border: "1px solid black" }} href={"/"}>
                Back
            </Link>
        </>
    );
}
