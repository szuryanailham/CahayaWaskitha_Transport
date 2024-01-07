import { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import Navbar from "@/Components/home-page/Navbar";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import Footer from "@/Components/home-page/Footer";

export default function Login() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "admin@test.com",
        password: "admin1234",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post("/login");
    };

    return (
        <>
            <Head title="Login" />

            {
                Object.values(errors).length > 0 && Object.values(errors)[0] // get first error message
            }
            {/* REVOLUTION KODE */}
            <Navbar />
            <div className="w-full md:w-[60%] mx-auto mb-2 h-fit mt-14 p-10">
                {/* icon profile */}
                <img className="mx-auto" src="/images/boy.svg" alt="profile" />
                <h1 className="text-center text-xl font-bold mt-4 mb-3">
                    Login As Admin
                </h1>
                {/* form */}
                <form onSubmit={submit} className="flex flex-col jusify-center">
                    {/* email */}
                    <label htmlFor="email">Email</label>
                    <Input
                        className="mt-2"
                        name="email"
                        type="email"
                        placeholder="Username or Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        style={{ border: "1px solid black" }}
                        autoFocus
                    />
                    {/* passowrd */}
                    <div className="mt-5 mb-5">
                        <label htmlFor="password">Passwprd</label>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            style={{ border: "1px solid black" }}
                            className="text-black"
                        />
                    </div>
                    {/* button submit */}
                    <Button
                        className="mx-auto"
                        type="submit"
                        style={{ border: "1px solid black" }}
                        disabled={processing}
                    >
                        {processing ? "Loading..." : "Login"}
                    </Button>
                </form>
            </div>
            <Footer />
        </>
    );
}
