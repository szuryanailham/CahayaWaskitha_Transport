import React from "react";
import { Input } from "../ui/input";
import { Button } from "@/components/ui/button";
function FormLogin() {
    return (
        <div className="w-full md:w-[60%] mx-auto mb-2 h-fit mt-14 p-10">
            {/* icon profile */}
            <img className="mx-auto" src="/images/boy.svg" alt="profile" />
            <h1 className="text-center text-xl font-bold mt-4 mb-3">
                Login As Admin
            </h1>
            {/* form */}
            <form action="" className="flex flex-col jusify-center">
                {/* email */}
                <label htmlFor="email">Email</label>
                <Input
                    className="mt-2"
                    id="email"
                    type="email"
                    placeholder="Email....."
                />
                {/* passowrd */}
                <div className="mt-5 mb-5">
                    <label htmlFor="password">Passwprd</label>
                    <Input
                        className=""
                        id="password"
                        type="password"
                        placeholder="password....."
                    />
                </div>
                {/* button submit */}
                <Button className="mx-auto">Login</Button>
            </form>
        </div>
    );
}

export default FormLogin;
