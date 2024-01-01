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

function FormTestimony() {
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
    return (
        <form className="w-full md:w-[60%] mx-auto p-2 mb-2 ">
            {/* Nama */}
            <Input id="name" type="text" placeholder="name....." />
            {/* email */}
            <Input
                className="mt-7"
                id="email"
                type="email"
                placeholder="email....."
            />
            {/* category */}
            <Select>
                <SelectTrigger className="w-full mt-5">
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
                <Textarea />
            </div>
            {/* submit button */}
            <div className="w-full flex flex-row justify-center mt-5">
                <Button>Submit</Button>
            </div>
        </form>
    );
}

export default FormTestimony;
