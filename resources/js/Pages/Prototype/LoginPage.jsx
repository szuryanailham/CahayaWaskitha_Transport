import FormLogin from "@/Components/Login/FormLogin";
import Footer from "@/Components/home-page/Footer";
import Navbar from "@/Components/home-page/Navbar";
import { Head } from "@inertiajs/react";

export default function Login() {
    return (
        <>
            <Head title="Login" />
            <Navbar />
            <FormLogin />
            <Footer />
        </>
    );
}
