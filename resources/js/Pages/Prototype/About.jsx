import Navbar from "@/Components/home-page/Navbar";
import Jumbotron from "@/Components/About/Jumbotron";
import AboutDesc from "@/Components/About/AboutDesc";
import ContainerCards from "@/Components/About/ContainerCards";
import React from "react";
import Footer from "@/Components/home-page/Footer";
function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row-reverse md:mt-3">
                <Jumbotron />
                <AboutDesc />
            </div>
            <ContainerCards />
            <Footer />
        </>
    );
}

export default About;
