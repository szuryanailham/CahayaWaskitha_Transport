import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { StarIcon } from "lucide-react";

const TestimonyCard = ({ className, key }) => {
    return (
        <Card
            key={key}
            className={`w-[251px] h-[303px] shadow-md shadow-neutral-400 ${className}`}
        >
            <CardContent className=" px-5 py-6 flex flex-col gap-[18px] ">
                <div className="w-full h-full flex items-center justify-center">
                    <Avatar className="w-[90px] h-[90px]">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Hello</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex justify-center whitespace-nowrap">
                    <StarIcon className="text-red-600" />
                    4.75
                </div>
                <div className="flex w-full justify-center">
                    <h2 className="font-bold text-neutral-400 text-2xl">
                        Lionel Messi
                    </h2>
                </div>
                <div className="line-clamp-2 text-center text-lg leading-[27px] w-full">
                    Respon yang amat sangat cepat dan efisien
                </div>
            </CardContent>
        </Card>
    );
};

export default TestimonyCard;
