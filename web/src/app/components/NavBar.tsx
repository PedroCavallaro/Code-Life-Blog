"use client";
import { Menu, Search } from "lucide-react";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Input } from "./Input";
import Link from "next/link";
import { count } from "console";

enum Pages {
    "CODE LIFE",
    "About Us",
    "Contact",
}

export default function NavBar() {
    function handleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    function handlePageChange(page: number) {
        setPage(page);
    }

    function matrixEffect(eve: BaseSyntheticEvent<MouseEvent, EventTarget>) {
        let count = 0;

        interval = setInterval(() => {
            eve.target.innerText = title
                .split("")
                .map((letter, index) => {
                    if (index < count) {
                        return title[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");
            if (count >= title.length) {
                clearInterval(interval!);
            }

            count += 1 / 3;
        }, 50);
    }

    let interval: ReturnType<typeof setInterval> | null = null;

    const letters = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
    const title = "CODE LIFE";
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);

    return (
        <header className="bg-purple-100 mx-auto w-screen text-purple-50 ">
            <nav className="bg-purple-300 flex justify-around p-2  items-center rounded-br-[15px] rounded-bl-[15px] lg:h-[65px] lg:text-lg ">
                <div className="flex flex-col">
                    <Link
                        onClick={() => handlePageChange(0)}
                        onMouseOver={(e) => {
                            matrixEffect(e);
                        }}
                        href={"/"}
                        className="font-sans w-10 lg:w-auto font-bold lg:text-2xl "
                    >
                        CODE LIFE
                    </Link>
                    {page === Pages["CODE LIFE"] && (
                        <span className="w-auto h-1 bg-purple-800 hidden lg:flex"></span>
                    )}
                </div>
                <label
                    htmlFor=""
                    className="bg-purple-100 flex p-1 rounded-md items-center cursor-pointer"
                >
                    <Input placeholder="tag" />
                    <Search color="#efe6fd" />
                </label>
                <div className="gap-10 font-sans font-bold text-purple-50 hidden lg:flex">
                    <div className="flex flex-col">
                        <Link
                            onClick={() => handlePageChange(1)}
                            href={"/AboutUs"}
                            className="hidden lg:flex "
                        >
                            Sobre Nós
                        </Link>
                        {page === Pages["About Us"] && (
                            <span className="w-auto h-1 bg-purple-800"></span>
                        )}
                    </div>
                    <div className="flex flex-col ">
                        <Link
                            onClick={() => handlePageChange(2)}
                            href={"/AboutUs"}
                            className="hidden lg:flex
                         "
                        >
                            Contatos
                        </Link>
                        {page === Pages["Contact"] && (
                            <span className="w-auto h-1 bg-purple-800"></span>
                        )}
                    </div>
                </div>
                <button className="lg:hidden" onClick={handleMenu}>
                    <Menu color="#efe6fd" />
                </button>
            </nav>
            {isMenuOpen && (
                <div className="w-screen flex flex-col mt-2 items-center justify-end gap-2 lg:hidden">
                    <Link
                        onClick={handleMenu}
                        href={"/"}
                        className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
                    >
                        Página Inicial
                    </Link>
                    <Link
                        onClick={handleMenu}
                        href={"/AboutUs"}
                        className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
                    >
                        Sobre Nós
                    </Link>
                    <Link
                        onClick={handleMenu}
                        href={"/Contacts"}
                        className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
                    >
                        Contatos
                    </Link>
                    <Link
                        onClick={handleMenu}
                        href={"/Email"}
                        className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
                    >
                        Fique por dentro
                    </Link>
                </div>
            )}
        </header>
    );
}
