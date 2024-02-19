import React, { useEffect, useRef, useState } from "react";
import ModeToggle from "../ModeToggle";
import { IoMenu } from "react-icons/io5";
function Navbar() {
    const [displayMenu, SetdisplayMenu] = useState(false);
    const navbar = useRef(null);

    const changeActive = () => {
        SetdisplayMenu((current) => !current);
    };

    useEffect(() => {
        const closeNavbar = (event) => {
            if (navbar.current && !navbar.current.contains(event.target)) {
                SetdisplayMenu(false);
            }
        };

        document.addEventListener("click", closeNavbar);
    }, []);

    return (
        <nav
            ref={navbar}
            className="z-[100] w-full mb-10 bg-navcolor border-gray-200 dark:bg-gray-900 fixed top-0 select-none px-2"
        >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                <button className=" space-x-3 rtl:space-x-reverse">
                    <a href={`/`}>
                        <img
                            src="/images/logo_brand.svg"
                            className="h-8"
                            alt="Cahaya_waskitha"
                        />
                    </a>
                </button>
                {/* Humberger Menu */}
                <div className="md:hidden">
                    <input
                        className="relative hidden w-6 h-6"
                        type="checkbox"
                        id="isActive"
                        checked={displayMenu}
                        onChange={changeActive}
                    />
                    <label
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
                <div className="w-full md:block md:w-auto">
                    <ul
                        className={`${
                            displayMenu ? "" : "hidden md:flex"
                        } font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-navcolor text-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0  md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700
                        `}
                    >
                        {/* item nav link 1 */}
                        <li>
                            <a
                                href={`/`}
                                className="block py-2 px-3 text-white hover:text-black md:hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Home
                            </a>
                        </li>
                        {/* item nav link 2 */}
                        <li className="mt-3 md:mt-0">
                            <a
                                href={`/about`}
                                className="block py-2 px-3 text-white hover:text-black md:hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                About
                            </a>
                        </li>
                        {/* item nav link 3 */}
                        <li className="mt-3 md:mt-0">
                            <a
                                href={`/testimony`}
                                className="block py-2 px-3 text-white hover:text-black md:hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Testimony
                            </a>
                        </li>
                        {/* item nav link 4 */}
                        {/* <li className="mt-3 md:mt-0">
                            <a
                                href={`/gallery`}
                                className="block py-2 px-3 text-white hover:text-black md:hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                Gallery
                            </a>
                        </li> */}
                        {/* item nav link 4 */}
                        <li className="mt-3 md:mt-0">
                            <a
                                href={`/paket-wisata`}
                                className="block py-2 px-3 text-white hover:text-black md:hover:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            >
                                paket wisata
                            </a>
                        </li>
                        {/* item nav link 5 */}
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
