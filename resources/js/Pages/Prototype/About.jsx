import { Head } from "@inertiajs/react";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar";

export default function About() {
    return (
        <>
            <Head title="About" />
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="bg-red-700">Logo</MenubarTrigger>
                    <MenubarTrigger>Home</MenubarTrigger>
                    <MenubarTrigger>About</MenubarTrigger>
                    <MenubarTrigger>Testimony</MenubarTrigger>
                </MenubarMenu>
            </Menubar>
        </>
    );
}
