import AboutDesc from "@/Components/About/AboutDesc";
import ContainerCards from "@/Components/About/ContainerCards";
import Jumbotron from "@/Components/About/Jumbotron";
import Navbar from "@/Components/home-page/Navbar";
import { Car } from "lucide-react";
export default function About() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col md:flex-row-reverse md:mt-3">
                <Jumbotron />
                <AboutDesc />
            </div>
            <ContainerCards />
        </>
    );
}
