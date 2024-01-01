
import ContainerCards from "@/Components/Testimony/Container_Card";
import Jumbotron from "@/Components/About/Jumbotron";

import Navbar from "@/Components/home-page/Navbar";
import { Head } from "@inertiajs/react";

export default function Testimony() {
    return (
        <>
            <Head title="Testimony" />
            <Navbar />
            <Jumbotron />
            <ContainerCards />

        </>
    );
}
