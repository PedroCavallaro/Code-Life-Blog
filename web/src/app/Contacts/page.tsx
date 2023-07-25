import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { ImGithub } from "react-icons/im";

const contactInfo = {
    github: ["PedroCavallaro", "FIRMINOenzo", "pedro"],
    linkedin: ["PedroCavallaro", "FIRMINOenzo", "pedro"],
    email: ["pedro", "FIRMINOenzo", "pedro"],
};
export default function Contacts() {
    return (
        <main className="flex flex-col  gap-4 ">
            <h1 className="text-center text-2xl text-purple-400 mt-3">
                Onde nos encontrar:
            </h1>
            <section className="bg-purple-600 rounded-md mx-auto w-[95%]">
                <div className="flex flex-col lg:flex-row  gap-2 items-center justify-center">
                    <div className="flex gap-2 flex-col p-2">
                        <h2 className="text-purple-50 text-center">GitHub</h2>
                        <div className="flex items-center justify-center gap-4">
                            {contactInfo.github.map((profile, index) => {
                                return (
                                    <div
                                        key={index.toString()}
                                        className="flex items-center justify-center flex-col"
                                    >
                                        <div className="bg-purple-900 flex items-center justify-center h-20 w-20 rounded-full">
                                            <ImGithub
                                                color="#fff"
                                                className="h-16 w-16"
                                            />
                                        </div>
                                        <p className="text-sm text-white text-center">
                                            {profile}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="flex items-center justify-center gap-4 flex-col">
                            <h2 className="text-purple-50 text-center">
                                Linkedin
                            </h2>
                            <div className="flex flex-row">
                                {contactInfo.linkedin.map((profile, index) => {
                                    return (
                                        <div
                                            key={index.toString()}
                                            className="flex items-center justify-center flex-col"
                                        >
                                            <div className="bg-purple-900 flex items-center justify-center h-20 w-20 rounded-full">
                                                <AiFillLinkedin
                                                    color="#fff"
                                                    className="h-16 w-16"
                                                />
                                            </div>
                                            <p className="text-sm text-white text-center">
                                                @{profile}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
