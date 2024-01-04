import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "@/Components/home-page/Navbar";
import Jumbotron from "@/Components/About/Jumbotron";
import ContainerCards from "@/Components/Testimony/Container_Card";
function Testimony() {
    return (
        <>
            <Head title="Testimony" />
            <Navbar />
            <Jumbotron />
            <ContainerCards />
        </>
    );
}

export default Testimony;
