import React from "react";

function NavDashboard() {
    return (
        <div className="w-full flex">
            {/* search input */}
            <form className="w-full">
                <div className="flex">
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
                    <div className="relative w-[100%] md:w-[65%] ">
                        <input
                            type="search"
                            id="search-dropdown"
                            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
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
                <div
                    className="font-bold mr-3"
                    style={{ whiteSpace: "nowrap" }}
                >
                    Bayu waskitha
                </div>
                <div className="w-10 h-10 bg-blue-300 rounded-full ml-1">
                    <img src="" alt="" />
                </div>
            </div>

            {/* notification */}
        </div>
    );
}

export default NavDashboard;
