import Link from "next/link";

export default function MenuMobile({ handleMenu }: { handleMenu: Function }) {
    function handler() {
        handleMenu();
    }

    return (
        <div className="w-screen flex flex-col mt-2 items-center justify-end gap-2 lg:hidden">
            <Link
                onClick={handler}
                href={"/"}
                className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
            >
                Página Inicial
            </Link>
            <Link
                onClick={handler}
                href={"/AboutUs"}
                className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
            >
                Sobre Nós
            </Link>
            <Link
                onClick={handler}
                href={"/Contacts"}
                className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
            >
                Contatos
            </Link>
            <Link
                onClick={handler}
                href={"/Email"}
                className="rounded-md bg-purple-500 text-center p-1 w-[90%] "
            >
                Newsletter
            </Link>
        </div>
    );
}
