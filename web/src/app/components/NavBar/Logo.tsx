import Link from "next/link";
enum Pages {
    "CODE LIFE",
    "About Us",
    "Contact",
}
export default function Logo({
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
        <div className="flex flex-col">
            <Link
                onClick={() => handler(0)}
                href={"/"}
                className="font-sans w-10 lg:w-auto font-bold lg:text-2xl "
            >
                CODE LIFE
            </Link>
            {page === Pages["CODE LIFE"] && (
                <span className="w-auto h-1 bg-purple-800 hidden lg:flex"></span>
            )}
        </div>
    );
}
