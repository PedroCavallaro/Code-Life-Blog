"use client";
import { Menu } from "lucide-react";
import MenuMobile from "./NavBar/MenuMobile";
import MenuDesktop from "./NavBar/MenuDesktop";
import Logo from "./NavBar/Logo";
import SearchBar from "./NavBar/SearchBar";
import { useEffect, useState } from "react";
import { swal } from "../lib/swal";

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

    return (
        <header className="bg-purple-100 mx-auto w-screen text-purple-50 ">
            <nav className="bg-purple-300 flex justify-around p-2  items-center rounded-br-[15px] rounded-bl-[15px] lg:h-[65px] lg:text-lg ">
                <Logo handlePageChange={handlePageChange} page={page} />
                <SearchBar />
                <MenuDesktop handlePageChange={handlePageChange} page={page} />
                <button className="lg:hidden" onClick={handleMenu}>
                    <Menu color="#efe6fd" />
                </button>
            </nav>
            {isMenuOpen && <MenuMobile handleMenu={handleMenu} />}
        </header>
    );
}
