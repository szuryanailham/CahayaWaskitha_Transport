import { Head } from "@inertiajs/react";

export default function Success({order}) {
    console.log(order);
    return (
        <>
            <Head title="Success" />

            <h1>Success Page</h1>
        </>
    );
}
