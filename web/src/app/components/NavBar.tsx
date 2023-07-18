"use client";
import { Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { Input } from "./Input";
import Link from "next/link";

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

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);

    useEffect(() => {
        const url = new URL(window.location.href);
        const path = url.toString().split("/");

        // setPage(path[path.length -1])
    }, []);

    return (
        <header className="bg-purple-100 mx-auto w-screen text-purple-50 ">
            <nav className="bg-purple-300 flex justify-around p-2  items-center rounded-br-[15px] rounded-bl-[15px] lg:h-[65px] lg:text-lg ">
                <div className="flex flex-col">
                    <Link
                        onClick={() => handlePageChange(0)}
                        href={"/"}
                        className="font-sans w-10 lg:w-auto font-bold lg:text-2xl l"
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
                    <Input placeholder="tags" />
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
                        href={"/"}
                        className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
                    >
                        Página Inicial
                    </Link>
                    <Link
                        href={"/AboutUs"}
                        className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
                    >
                        Sobre Nós
                    </Link>
                    <Link
                        href={"/Contacts"}
                        className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
                    >
                        Contatos
                    </Link>
                </div>
            )}
        </header>
    );
}
