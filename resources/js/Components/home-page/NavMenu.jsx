"use client";

import * as React from "react";
import { Link } from "@inertiajs/react";

import { cn } from "@/lib/utils";

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function NavigationMenuDemo({ categories, units }) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-xs md:text-base">
                        Kategori
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white shadow-md">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md overflow-hidden"
                                        href="/"
                                    >
                                        <img
                                            src="/pngwing.com_3_1.png"
                                            alt=""
                                        />
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            Cahaya Waskitha Transport
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Penyedia Layanan Penyewaan Kendaraan
                                            dengan Tarif Terjangkau
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>

                            {categories?.map((category) => (
                                <ListItem
                                    href={`/${category.slug}`}
                                    title={category.name}
                                >
                                    Mobil keren dengan mesin dinamo terbaru,
                                    balapan tamiya menjadi lebih ahli
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-xs md:text-base">
                        List Kendaraan
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white shadow-md ">
                            {units?.map((unit) => (
                                <ListItem
                                    key={unit.id}
                                    title={unit.name}
                                    href={`/unit/${unit.slug}`}
                                >
                                    Rp
                                    {unit.price.toLocaleString("id-ID", {
                                        currency: "IDR",
                                    })}
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link as="button" href="/">
                        <NavigationMenuLink
                            className={`${navigationMenuTriggerStyle()}text-xs md:text-base`}
                        >
                            Semua Kendaraan
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = ({ className, title, children, ...props }) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <h2 className="text-sm font-medium leading-none text-black">
                        {title}
                    </h2>
                    <p className="line-clamp-2 text-sm leading-none text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
};
ListItem.displayName = "ListItem";
