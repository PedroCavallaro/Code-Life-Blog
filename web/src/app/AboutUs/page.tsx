"use client";
import { useEffect, useState } from "react";
import ChangeInfo from "../components/AboutUs/ChangeInfo";
import ProfileIcon from "../components/AboutUs/ProfileIcon";

export interface Member {
    id: number;
    name: string;
    picture: string;
    salutation: string;
    desc: string;
}
export default function AboutUs() {
    const [members, setMembers] = useState<Member[]>();
    const [memberId, setMemberId] = useState<number>(0);

    function handleProfileClick(id: number) {
        memberId === id ? "" : setMemberId(id);
    }

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        fetch("members.json", { signal })
            .then((res) => res.json())
            .then((data) => {
                setMembers(data.members);
            })
            .catch((err) => {
                if (err.name === "AbortError") {
                    console.log("Cancelou a requisição.");
                }
            });

        return () => {
            controller.abort();
        };
    }, []);

    return (
        <>
            <div className="flex justify-start p-4 mt-4 w-screen lg:hidden">
                <button className="w-[219px] h-[40px] bg-purple-500 text-white rounded-sm shadow-md">
                    About us
                </button>
                {/* <iframe
                    id="test"
                    src="https://drive.google.com/uc?export=view&id=1WT7gnGoP97sxfU-qTMrkz8ehuFmuykHE"
                ></iframe> */}
            </div>
            <main className="flex items-center justify-center flex-col gap-4 bg-purple-600 w-[95%] mx-auto rounded-md lg:h-[35rem] lg:mt-10">
                <div className="relative lg:w-screen">
                    <div className="lg:absolute -top-7 right-4">
                        <ChangeInfo />
                    </div>
                </div>
                <section className="flex justify-around gap-3">
                    {members?.map((member, index) => {
                        return (
                            <ProfileIcon
                                salutation={member.salutation}
                                handler={handleProfileClick}
                                id={member.id}
                                name={member.name}
                                picture={member.picture}
                                desc={member.desc}
                                key={index.toString()}
                            />
                        );
                    })}
                </section>
                <section className=" flex flex-col justify-center items-center gap-4 min-h-[200px]">
                    {typeof members !== "undefined" && (
                        <>
                            <p className="text-white text-sm w-[19rem] p-4 text-center lg:w-[70%] lg:text-2xl">
                                {members[memberId].desc}
                            </p>
                        </>
                    )}
                </section>
            </main>
        </>
    );
}
