import { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";

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

            {/* Form Input */}
            <form onSubmit={submit}>
                <div>
                    <input
                        name="email"
                        type="email"
                        placeholder="Username or Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        style={{ border: "1px solid black" }}
                        className="text-black"
                        autoFocus
                    />
                </div>

                <div>
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        style={{ border: "1px solid black" }}
                        className="text-black"
                    />
                </div>

                <button
                    type="submit"
                    style={{ border: "1px solid black" }}
                    disabled={processing}
                >
                    {processing ? "Loading..." : "Login"}
                </button>
            </form>
        </>
    );
}
