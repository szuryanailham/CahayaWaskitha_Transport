import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import ModeToggle from "../ModeToggle";

function NavDashboard(props) {
    const [position, setPosition] = React.useState("bottom");
    return (
        <div className="w-full flex">
            {/* toggle dark mood */}

            {/* search input */}
            <form className="w-full mt-2">
                <div className="flex">
                    <div className=" m-auto">
                        <ModeToggle />
                    </div>
                    <div
                        id="search-dropdown"
                        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                        <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdown-button"
                        >
                            <li>
                                <button
                                    type="button"
                                    className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                >
                                    Mockups
                                </button>
                            </li>
                            {/* ... (ul li yang lain) ... */}
                        </ul>
                    </div>
                    <div className="ml-[5%] md:ml-[25%] relative w-[90%] md:w-[65%] ">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="rounded-md block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                            placeholder="Search...."
                            required
                        />
                        <input
                            type="submit"
                            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            value="Search"
                        />
                    </div>
                </div>
            </form>

            {/* profile icon */}
            <div className="p-1 hidden md:flex items-center">
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className="p-3 hover:cursor-pointer"
                        asChild
                    >
                        <h1 style={{ whiteSpace: "nowrap" }} variant="outline">
                            {props.username}
                        </h1>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuRadioGroup
                            value={position}
                            onValueChange={setPosition}
                        >
                            <DropdownMenuRadioItem value="top">
                                Home
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="bottom">
                                Logout
                            </DropdownMenuRadioItem>
                            <DropdownMenuRadioItem value="right"></DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>B</AvatarFallback>
                </Avatar>

                <img
                    src="/images/dashboard/Notif.svg"
                    alt="Notif-icon"
                    className="p-3"
                />
                {/* home  */}
                <img
                    src="/images/dashboard/Home.svg"
                    alt="Notif-icon"
                    className="w-5 h-5 mr-10"
                />
            </div>

            {/* notification */}
        </div>
    );
}

export default NavDashboard;
