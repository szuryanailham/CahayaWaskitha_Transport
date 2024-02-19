import { Head } from "@inertiajs/react";
import React from "react";

function Meta({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta
                head-key="Rental Mobil & Paket wisata Yogyakarta"
                name="description"
                content={description}
            />
            <link rel="icon" href="/images/logo_brand.svg" />
        </Head>
    );
}

export default Meta;
