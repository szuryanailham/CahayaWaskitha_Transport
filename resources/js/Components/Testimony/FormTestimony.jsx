import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/Components/ui/select";
import { useForm } from "@inertiajs/inertia-react";

function FormTestimony() {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        category: "",
        testimony: "",
        rating: 0,
    });

    const ratingRef = useRef(null);
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    const [totalStars, setTotalStars] = useState(5);

    const handleChange = (e) => {
        setTotalStars(
            parseInt(Boolean(e.target.value, 10) ? e.target.value : 5)
        );
    };
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!ratingRef.current.contains(event.target)) {
                setRating(0);
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        setData("rating", rating);
    }, [rating]);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post("/testimony");
    };
    return (
        <form
            onSubmit={submit}
            className="w-full md:w-[60%] mx-auto p-10 md:p-2 mb-2 mt-3 "
        >
            {/* Nama */}
            <Input
                id="name"
                name="name"
                onChange={(e) => onHandleChange(e)}
                className="dark:bg-gray-800"
                type="text"
                placeholder="name....."
                autoFocus
            />
            {/* email */}
            <Input
                id="email"
                name="email"
                onChange={(e) => onHandleChange(e)}
                className="mt-7 dark:bg-gray-800"
                type="email"
                placeholder="email....."
            />
            {/* category */}
            <Select name="category" onChange={(e) => onHandleChange(e)}>
                <SelectTrigger className="w-full mt-5 dark:bg-gray-800">
                    <SelectValue placeholder="pilih category..." />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Pelayanan">pelayanaan</SelectItem>
                    <SelectItem value="unit">Unit</SelectItem>
                    <SelectItem value="kebersihan">kebersihan</SelectItem>
                    <SelectItem value="kenyamanan">kenyamanan</SelectItem>
                </SelectContent>
            </Select>
            {/* rating */}
            <div className="w-full flex justify-center gap-2 p-3">
                <h1 className="mt-2">Give us rating :</h1>
                {[...Array(totalStars)].map((star, index) => {
                    const currentRating = index + 1;
                    return (
                        <label key={index}>
                            <input
                                key={star}
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onChange={() => setRating(currentRating)}
                                className="hidden"
                            />
                            <span
                                className="text-3xl"
                                style={{
                                    color:
                                        currentRating <= (hover || rating)
                                            ? "#ffc107"
                                            : "#e4e5e9",
                                }}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(null)}
                            >
                                &#9733;
                            </span>
                        </label>
                    );
                })}
            </div>
            <p className="text-center">Your rating is: {rating}</p>

            {/* description */}
            <div className="mt-3">
                <label htmlFor="">Comment</label>
                <Textarea
                    name="testimony"
                    onChange={(e) => onHandleChange(e)}
                    className="dark:bg-gray-800"
                />
            </div>
            {/* submit button */}
            <div className="w-full flex flex-row justify-center mt-5">
                <Button
                    type="submit"
                    disabled={processing}
                    className="dark:bg-blue-500"
                >
                    {processing ? "Loading..." : "Submit"}
                </Button>
            </div>
        </form>
    );
}

export default FormTestimony;
