"use client";
import { useEffect, useState } from "react";
import ChangeInfo from "../components/AboutUs/ChangeInfo";
import ProfileIcon from "../components/AboutUs/ProfileIcon";

interface Member {
    name: string;
    picture: string;
    desc: string;
}
export default function AboutUs() {
    const [members, setMembers] = useState<Member[]>();
    const [memberId, setMemberId] = useState<number>(0);

    useEffect(() => {
        fetch("members.json")
            .then((res) => res.json())
            .then((data) => setMembers(data.members));
    }, []);

    return (
        <>
            <div className="flex justify-start p-4 mt-4">
                <button className="w-[219px] h-[40px] bg-purple-500 text-white rounded-sm shadow-md">
                    About us
                </button>
            </div>
            <main className="flex items-center justify-center flex-col gap-4 bg-purple-600  mx-auto p-2 rounded-md">
                <ChangeInfo />
                <section className="flex justify-around gap-3">
                    {members?.map((member, index) => {
                        return <ProfileIcon key={index.toString()} />;
                    })}
                </section>
                <section className=" flex flex-col justify-center items-center gap-4">
                    {typeof members !== "undefined" && (
                        <>
                            <p className="text-white text-sm w-[20rem]">
                                Você está vendo informaçãoes de:{" "}
                                <span className="text-purple-50 text-md wit">
                                    {members[memberId].name}
                                </span>
                            </p>
                            <p className="text-white text-sm w-[19rem] p-4 text-center">
                                {members[memberId].desc}
                            </p>
                        </>
                    )}
                </section>
            </main>
        </>
    );
}
