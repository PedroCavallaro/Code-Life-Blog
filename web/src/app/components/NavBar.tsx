"use client";
import { Menu, Search } from "lucide-react";
import { BaseSyntheticEvent, useEffect, useState } from "react";
import { Input } from "./Input";
import Link from "next/link";
import { count } from "console";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import MenuMobile from "./NavBar/MenuMobile";
import MenuDesktop from "./NavBar/MenuDesktop";
import Logo from "./NavBar/Logo";

enum Pages {
    "CODE LIFE",
    "About Us",
    "Contact",
}
const schema = z.object({
    tag: z.string().min(2),
});

type FormData = z.infer<typeof schema>;
export default function NavBar() {
    function handleMenu() {
        setIsMenuOpen(!isMenuOpen);
    }
    function handlePageChange(page: number) {
        setPage(page);
    }

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [page, setPage] = useState<number>(0);

    return (
        <header className="bg-purple-100 mx-auto w-screen text-purple-50 ">
            <nav className="bg-purple-300 flex justify-around p-2  items-center rounded-br-[15px] rounded-bl-[15px] lg:h-[65px] lg:text-lg ">
                <Logo handlePageChange={handlePageChange} page={page} />
                <form
                    onSubmit={() => handleSubmit}
                    className="bg-purple-100 flex p-1 rounded-md items-center cursor-pointer"
                >
                    <Input placeholder="tag" />
                    <button type="submit">
                        <Search color="#efe6fd" />
                    </button>
                </form>
                <MenuDesktop handlePageChange={handlePageChange} page={page} />
                <button className="lg:hidden" onClick={handleMenu}>
                    <Menu color="#efe6fd" />
                </button>
            </nav>
            {isMenuOpen && <MenuMobile handleMenu={handleMenu} />}
        </header>
    );
}
