import { Head } from "@inertiajs/react";
import ModeToggle from "@/Components/ModeToggle";

export default function Home() {
    return (
        <>
            <Head title="Home" />
            <div class="flex flex-col w-full min-h-screen bg-white dark:bg-black dark:text-white">
                <h1 className="text-3xl">halo</h1>
                <ModeToggle />
            </div>
        </>
    );
}
