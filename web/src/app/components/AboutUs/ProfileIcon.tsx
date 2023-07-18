import { Member } from "@/app/AboutUs/page";
import Image from "next/image";

interface ProfileProps extends Member {
    handler: (id: number) => void;
}

export default function ProfileIcon(ProfileProps: ProfileProps) {
    function handleProfileClick(id: number) {
        ProfileProps.handler(id);
    }
    console.log(ProfileProps);
    return (
        <>
            <div
                onClick={() => handleProfileClick(ProfileProps.id)}
                className="bg-purple-200 flex items-center justify-center flex-col w-[110px] p-2 h-[120px] cursor-pointer gap-3 rounded-tr-[180px] rounded-tl-[180px] shadow-lg rounded-[7px] lg:w-[280px] lg:h-[280px]"
            >
                <Image
                    src={`/pictures/${ProfileProps.picture}`}
                    className="rounded-full w-[68px] h-[67px] lg:w-[191px] lg:h-[187px]  bg-white object-cover shadow"
                    alt=""
                    width={200}
                    height={200}
                />
                {/* foto */}

                <p className="text-[10px] lg:text-lg text-white">
                    {ProfileProps.salutation}
                </p>
            </div>
        </>
    );
}
