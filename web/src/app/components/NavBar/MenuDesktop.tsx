import page from "@/app/page";
import Link from "next/link";

enum Pages {
    "CODE LIFE",
    "About Us",
    "Contact",
    "Stay Tuned",
}
export default function MenuDesktop({
    handlePageChange,
    page,
}: {
    handlePageChange: Function;
    page: number;
}) {
    function handler(pageId: number) {
        handlePageChange(pageId);
    }
    return (
        <div className="gap-10 font-sans font-bold text-purple-50 hidden lg:flex">
            <div className="flex flex-col">
                <Link
                    onClick={() => handler(1)}
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
                    onClick={() => handler(2)}
                    href={"/Contacts"}
                    className="hidden lg:flex
                         "
                >
                    Contatos
                </Link>
                {page === Pages["Contact"] && (
                    <span className="w-auto h-1 bg-purple-800"></span>
                )}
            </div>
            <div className="flex flex-col ">
                <Link
                    onClick={() => handler(3)}
                    href={"/Email"}
                    className="hidden lg:flex
                         "
                >
                    Fique por Dentro
                </Link>
                {page === Pages["Stay Tuned"] && (
                    <span className="w-auto h-1 bg-purple-800"></span>
                )}
            </div>
        </div>
    );
}
