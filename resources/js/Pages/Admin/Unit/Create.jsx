import { Head, Link, useForm } from "@inertiajs/react";
import NavDashboard from "@/Components/DashboardComponent/NavDashboard";
import SidebarDashboard from "@/Components/DashboardComponent/SidebarDashboard";
import { Input } from "@/Components/ui/input";
import React from "react";
import { Textarea } from "@/Components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
} from "@/components/ui/select";
import { Button } from "@/Components/ui/button";

export default function Create({ categories }) {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        category_id: "",
        description: "",
        capacity: "",
        steering: "",
        price: "",
        image: [],
    });

    console.log(data);

    const onHandleChange = (event) => {
        if (event.target.type === "file") {
            const files = event.target.files;

            if (files.length > 0) {
                const fileArray = Array.from(files);
                setData(event.target.name, fileArray);
            }
        } else {
            setData(event.target.name, event.target.value);
        }
    };

    const submit = (e) => {
        e.preventDefault();

        post("/admin/unit");
    };

    return (
        <>
            <Head title="Create Unit" />
            <SidebarDashboard />
            <div className="p-4 sm:ml-64">
                <NavDashboard />
                <div className="mt-5">
                    <h1 className="text-center text-2xl mt-5 font-bold">
                        Form New Unit
                    </h1>
                    <form
                        onSubmit={submit}
                        className="w-full md:w-[70%] m-auto flex flex-col gap-2"
                    >
                        <div>
                            <label className="font-bold" htmlFor="name">
                                Nama
                            </label>
                            <Input
                                id="name"
                                name="name"
                                type="text"
                                onChange={(e) => onHandleChange(e)}
                                placeholder="name unit....."
                                className={`${
                                    errors.name ? "is-invalid" : ""
                                } dark:bg-gray-800 mt-2 `}
                                autoFocus
                            />
                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.name
                                    : ""}
                            </span>
                        </div>

                        <div>
                            <label className="font-bold" htmlFor="category_id">
                                Kategori
                            </label>
                            <Select
                                onValueChange={(value) => {
                                    setData((current) => ({
                                        ...current,
                                        category_id: value,
                                    }));
                                }}
                                id="category_id"
                                name="category_id"
                            >
                                <SelectTrigger
                                    className={`${
                                        errors.category_id ? "is-invalid" : ""
                                    } dark:bg-gray-800 mt-3`}
                                >
                                   
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            Select Category
                                        </SelectLabel>
                                        {categories.map((category) => (
                                            <SelectItem
                                                key={category.id}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <span>
                                {Object.values(errors).length > 0
                                    ? errors.category_id
                                    : ""}
                            </span>
                        </div>
                        <div>
                            <label className="font-bold" htmlFor="description">
                                Deskripsi
                            </label>
                            <Textarea
                                name="description"
                                id="description"
                                onChange={(e) => onHandleChange(e)}
                                className={`${
                                    errors.description ? "is-invalid" : ""
                                }dark:bg-gray-800 mt-3`}
                                type="text"
                                placeholder="deskripsi lengkap ....."
                            />
                            <span>
                                {" "}
                                {Object.values(errors).length > 0
                                    ? errors.description
                                    : ""}
                            </span>
                        </div>

                      