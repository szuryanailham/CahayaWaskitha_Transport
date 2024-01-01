// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/components/theme-provider";
import { useRef, useState } from "react";

export default function ModeToggle() {
    const [darkMode, setDarkMode] = useState(true);
    console.log(darkMode);
    const { setTheme } = useTheme();
    const toggle = useRef(null);
    return (
        // ================== NEW STYLE MODE TOGGLE =================
        <div className="">
            <input
                type="checkbox"
                className="hidden"
                ref={toggle}
                id="toggle"
                onChange={() => {
                    setDarkMode(toggle.current.checked);
                    setTheme(darkMode ? "dark" : "light");
                }}
            />
            <label htmlFor="toggle">
                <div className="w-12 h-6 bg-slate-500 rounded-full flex items-center p-1 cursor-pointer">
                    <div
                        className={`w-6 h-6 rounded-full toggle-circle transition duration-300 flex items-center p-1 ${
                            darkMode
                                ? " bg-white -translate-x-1"
                                : "bg-blue-500 translate-x-3/4 p-1"
                        }`}
                    >
                        {/* logo */}
                        {darkMode ? (
                            <FiSun className="text-md text-black" />
                        ) : (
                            <FiMoon className="text-md text-dark" />
                        )}
                    </div>
                </div>
            </label>
        </div>
    );
}
