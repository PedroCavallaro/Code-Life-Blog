import { contacts } from "@/app/Contacts/page";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { ImGithub } from "react-icons/im";

interface ContactIconsProps {
    contactArray: Array<contacts>;
    socialMedia: string;
}

export default function ContactIcons({
    contactArray,
    socialMedia,
}: ContactIconsProps) {
    return (
        <>
            <h2 className="text-purple-50 text-center">
                {socialMedia === "github" ? "Github" : "Linkedin"}
            </h2>
            <div className="flex items-center justify-center gap-5">
                {contactArray.map((profile, index: number) => {
                    return (
                        <div
                            key={index.toString()}
                            className="flex items-center justify-center  flex-col  group "
                        >
                            <Link
                                href={profile.link}
                                referrerPolicy="no-referrer"
                                target="_blank"
                                className="bg-purple-900 flex items-center justify-center h-20 w-20 rounded-full relative overflow-hidden"
                            >
                                <div
                                    className="bg-purple-900 absolute -left-[12rem] -top-10 w-[12rem] h-32 -rotate-45 flex justify-center items-center 
                                group-hover:animate-contact "
                                >
                                    <p className="text-white text-center text-sm mt-3 mr-3 ">
                                        Ir para
                                    </p>
                                </div>
                                {socialMedia === "github" && (
                                    <ImGithub
                                        color="#fff"
                                        className="h-16 w-16"
                                    />
                                )}
                                {socialMedia === "linkedin" && (
                                    <AiFillLinkedin
                                        color="#fff"
                                        className="h-16 w-16"
                                    />
                                )}
                            </Link>
                            <p className="text-sm text-white text-center w-32">
                                {profile.username}
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
