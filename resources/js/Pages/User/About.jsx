import AboutDesc from "@/Components/About/AboutDesc";
import ContainerCards from "@/Components/About/ContainerCards";
import Jumbotron from "@/Components/About/Jumbotron";
import Navbar from "@/Components/home-page/Navbar";
import React from "react";
function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row-reverse mt-0 md:mt-5">
                <Jumbotron />
                <AboutDesc />
            </div>
            <ContainerCards />
        </>
    );
}

export default About;
