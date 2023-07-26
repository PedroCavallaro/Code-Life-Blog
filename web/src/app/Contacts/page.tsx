import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { ImGithub } from "react-icons/im";
import ContactIcons from "../components/Contact/ContactIcons";

const contactInfo = {
    github: [
        {
            username: "PedroCavallaro",
            link: "https://github.com/PedroCavallaro",
        },
        {
            username: "FIRMINOenzo",
            link: "https://github.com/FIRMINOenzo",
        },
    ],
    linkedin: [
        {
            username: "Pedro Cavallaro",
            link: "https://www.linkedin.com/in/pedro-cavallaro/",
        },
        {
            username: "Enzo Firmino Campanari",
            link: "https://www.linkedin.com/in/enzo-firmino-campanari-149097256/",
        },
        {
            username: "Pedro Mossini",
            link: "https://www.linkedin.com/in/pedro-mossini-619034186/",
        },
    ],
};
export type contacts = (typeof contactInfo.github)[0];

export default function Contacts() {
    return (
        <main className="flex flex-col  gap-4 ">
            <h1 className="text-center text-2xl text-purple-400 mt-3">
                Onde nos encontrar:
            </h1>
            <section className="bg-purple-600 rounded-md mx-auto w-[95%] lg:w-auto lg:px-[10rem] lg:py-4">
                <div className="flex flex-col lg:flex-row  gap-2 items-center justify-center">
                    <div className="flex gap-2 flex-col p-2">
                        <ContactIcons
                            contactArray={contactInfo.github}
                            socialMedia="github"
                        />
                        <ContactIcons
                            contactArray={contactInfo.linkedin}
                            socialMedia="linkedin"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
