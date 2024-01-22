import { Head, Link, usePage } from "@inertiajs/react";

export default function Dashboard({ total }) {
    const { auth } = usePage().props;
    const { component } = usePage();

    console.log(total);

    return (
        <>
            <Head title="Dashboard" />

            <div>Welcome, {auth.user.name}</div>
            <div>
                <Link
                    method="POST"
                    as="button"
                    href={"/logout"}
                    style={{ textDecoration: "underline" }}
                >
                    Logout
                </Link>
            </div>

            <ul>
                <li>
                    <Link
                        href="/admin/dashboard"
                        className={
                            component === "Admin/Dashboard" ? "active" : ""
                        }
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/order"
                        className={
                            component === "Admin/Order/Index" ? "active" : ""
                        }
                    >
                        Order
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/unit"
                        className={
                            component === "Admin/Unit/Index" ? "active" : ""
                        }
                    >
                        Unit
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/testimony"
                        className={
                            component === "Admin/Testimony/Index" ? "active" : ""
                        }
                    >
                        Testimony
                    </Link>
                </li>
                <li>
                    <Link
                        href="/admin/promo"
                        className={
                            component === "Admin/Promo/Index" ? "active" : ""
                        }
                    >
                        Promo
                    </Link>
                </li>
            </ul>
        </>
    );
}
