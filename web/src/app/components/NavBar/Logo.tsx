import Link from "next/link";
import { BaseSyntheticEvent } from "react";
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
    function handler(pageId: number) {
        handlePageChange(pageId);
    }
    let interval: ReturnType<typeof setInterval> | null = null;

    const letters = "ABCDEFGHJKLMNOPQRSTUVWXYZ";
    const title = "CODE LIFE";
    return (
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
    );
}
