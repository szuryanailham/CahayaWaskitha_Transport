import React, { useRef, useState } from "react";
import ModeToggle from "../ModeToggle";
import { IoMenu } from "react-icons/io5";
function Navbar() {
    const [displayMenu, SetdisplayMenu] = useState(false);
    const dropMenu = useRef(null);
    const isActive = useRef(null);

    const changeActive = () => {
        SetdisplayMenu(isActive.current.checked);
        console.log(displayMenu);
    };

    return (
        <nav class="z-10 w-full mb-10 bg-navcolor border-gray-200 dark:bg-gray-900 sticky top-0">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                <button class=" space-x-3 rtl:space-x-reverse">
                    <img
                        src="/images/logo_brand.svg"
                        class="h-8"
                        alt="Cahaya_waskitha"
                    />
                </button>
                {/* Humberger Menu */}
                <div className="md:hidden">
                    <input
                        className=" relative hidden w-6 h-6"
                        type="checkbox"
                        id="isActive"
                        ref={isActive}
                    />
                    <label
                        onClick={changeActive}
                        htmlFor="isActive"
                        className="absolute top-3 right-2"
                    >
                        <IoMenu className="text-white duration-300 text-[40px] hover:scale-110" />
                    </label>
                </div>

                {/* <label htmlFor="isActive">
                </label> */}
                {/* end humberger menu */}

                {/*  */}
                <div ref={dropMenu} class="w-full md:block md:w-auto">
                    <ul
                        class={`${
                            displayMenu ? "" : "hidden md:flex"
                        } font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-navcolor text-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
                        transition-transform duration-500
                        `}
                    >
                        {/* item nav link 1 */}
                        <li>
                            <a class="block py-2 px-3 text-white hover:text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Home
                            </a>
                        </li>
                        {/* item nav link 2 */}
                        <li className="mt-3 md:mt-0">
                            <a class="block py-2 px-3 text-white hover:text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                About
                            </a>
                        </li>
                        {/* item nav link 3 */}
                        <li className="mt-3 md:mt-0">
                            <a class="block py-2 px-3 text-white hover:text-black rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                                Testimony
                            </a>
                        </li>
                        {/* item nav link 4 */}
                        <li className="mt-3 md:mt-0">
                            <ModeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
