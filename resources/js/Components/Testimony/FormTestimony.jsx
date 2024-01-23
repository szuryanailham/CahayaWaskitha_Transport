import React, { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Rating } from "@smastrom/react-rating";
import { Textarea } from "@/Components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
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
    const [rating, setRating] = useState(0);

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
                    <SelectItem value="light">pelayanaan</SelectItem>
                    <SelectItem value="dark">Unit</SelectItem>
                    <SelectItem value="system">kebersihan</SelectItem>
                    <SelectItem value="system">kenyamanan</SelectItem>
                </SelectContent>
            </Select>
            {/* rating */}
            <div className="text-center mt-5 italic">
                <p>beri kami penilaian:</p>
                <Rating
                    name="rating"
                    className="mx-auto mt-5"
                    style={{ maxWidth: 150 }}
                    ref={ratingRef}
                    value={rating}
                    onChange={setRating}
                />
            </div>
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
