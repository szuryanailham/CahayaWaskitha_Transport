// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import { FiSun } from "react-icons/fi";
import { useTheme } from "@/components/theme-provider";

export default function ModeToggle() {
    const { setTheme } = useTheme();

    return (
        // ================== NEW STYLE MODE TOGGLE =================
        <button className="relative top-1 w-12 h-6 md:w-[48px] md:h-6 bg-white flex item-center rounded-xl transition duration-300 focus:outline-none shadow">
            <div
                id="switch-toggle"
                className="w-6 h-6 md:w-6 md:h-6 transition duration-500 rounded-full bg-colorToggle -translate-x-1 p-1"
            >
                <FiSun className="text-white font-medium" />
            </div>
        </button>
        // ================== LASTEST STYLE MODE TOGGLE =================
        // <DropdownMenu>
        //     <DropdownMenuTrigger asChild>
        //         <Button variant="outline" size="icon">
        //             <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        //             <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        //         </Button>
        //     </DropdownMenuTrigger>
        //     <DropdownMenuContent align="end">
        //         <DropdownMenuItem onClick={() => setTheme("light")}>
        //             Light
        //         </DropdownMenuItem>
        //         <DropdownMenuItem onClick={() => setTheme("dark")}>
        //             Dark
        //         </DropdownMenuItem>
        //     </DropdownMenuContent>
        // </DropdownMenu>
    );
}
