import { Member } from "@/app/AboutUs/page";
import Image from "next/image";

interface ProfileProps extends Member {
    handler: (id: number) => void;
    selectedId: number;
}

export default function ProfileIcon({
    handler,
    id,
    salutation,
    picture,
    selectedId,
}: ProfileProps) {
    function handleProfileClick(id: number) {
        handler(id);
    }
    return (
        <>
            <div
                onClick={() => handleProfileClick(id)}
                className={`${
                    selectedId === id ? "bg-purple-300" : "bg-purple-200"
                } flex items-center justify-center flex-col w-[110px] p-2 h-[140px] cursor-pointer gap-3 rounded-tr-[180px] rounded-tl-[180px] shadow-lg rounded-[7px] lg:w-[280px] lg:h-[280px]`}
            >
                <Image
                    src={`/pictures/${picture}`}
                    className="rounded-full w-[68px] h-[67px] lg:w-[191px] lg:h-[187px]  bg-white object-cover shadow"
                    alt=""
                    width={200}
                    height={200}
                />
                {/* foto */}

                <p className="text-[10px]  lg:text-lg text-white">
                    {salutation}
                </p>
            </div>
        </>
    );
}
