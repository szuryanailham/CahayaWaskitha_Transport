import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/components/theme-provider";

export default function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        // ================== NEW STYLE MODE TOGGLE =================
        <div className="">
            <input
                type="checkbox"
                className="hidden"
                id="toggle"
                onChange={() => {
                    setTheme(theme === "light" ? "dark" : "light");
                }}
            />
            <label htmlFor="toggle">
                <div className="w-12 h-6 bg-slate-500 rounded-full flex items-center p-1 cursor-pointer">
                    <div
                        className={`w-6 h-6 rounded-full toggle-circle transition duration-300 flex items-center p-1 ${
                            theme === "light"
                                ? " bg-white -translate-x-1"
                                : "bg-blue-500 translate-x-3/4 p-1"
                        }`}
                    >
                        {/* logo */}
                        {theme === "light" ? (
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
