"use client"
import { Menu, Search } from "lucide-react";
import { useState } from "react";
import { Input } from "./Input";
import Link from "next/link";

export default function NavBar() {
    function handleButtonClick(){ 
        setIsMenuOpen(!isMenuOpen)
    }
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    return (
        <header className=" container bg-purple-100 mx-auto w-screen text-purple-50 ">
            <nav className="bg-purple-300 flex justify-around p-1 items-center rounded-br-[15px] rounded-bl-[15px] lg:h-[93px] lg:text-lg">
                <Link href={"/"} className="font-sans w-10 lg:w-auto font-bold">
                    CODE LIFE
                </Link>
                <label htmlFor="" className="bg-purple-100 flex p-1 rounded-md items-center cursor-pointer">
                    <Input placeholder="tags" />
                    <Search color="#efe6fd"/>
                </label>
                <div className="flex gap-10 font-sans font-bold text-purple-50">
                <Link href={"/AboutUs"} className="hidden lg:flex ">
                            Sobre Nós
                    </Link>
                    <Link href={"/AboutUs"} className="hidden lg:flex">
                            Contatos
                    </Link>
                </div>
                <button className="lg:hidden"
                onClick={handleButtonClick}
                >
                    <Menu color="#efe6fd"/> 
                </button>
            </nav>
            { 
            isMenuOpen && 
               ( <div className="w-screen flex flex-col mt-2 items-center justify-end gap-2 lg:w-[10%]">
                    <Link href={"/"} className="rounded-md bg-purple-500 text-center p-1 w-[90%] ">
                        Página Inicial
                    </Link>
                    <Link href={"/AboutUs"} className="rounded-md bg-purple-500 text-center p-1 w-[90%] ">
                            Sobre Nós
                    </Link>
                    <Link href={"/AboutUs"} className="rounded-md bg-purple-500 text-center p-1 w-[90%] ">
                            Contatos
                    </Link>
                </div>
                )
            } 
        </header>
    )
}