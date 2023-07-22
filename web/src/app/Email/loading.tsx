import { Input } from "../components/Input";

export default function loading() {
    return (
        <main className="mt-4 lg:flex lg:items-center lg:justify-center">
            <form className="flex flex-col justify-center items-center gap-4">
                <div className="flex w-[90%] text-center p-2 bg-gray-200 text-purple-50 rounded-md shadow lg:w-[320px] lg:h-[55px] lg:ml-40 lg:mt-12 animate-pulse">
                    <p className="py-2 font-bold lg:text-xl"></p>
                </div>
                <div className="flex flex-col gap-2  w-[90%]">
                    <Input
                        type="email"
                        placeholder="email@email.com"
                        className="shadow-lg plsaceholder:text-purple-50 rounded-md w-full h-[52px] p-2  text-white border-2 border-white"
                    />
                </div>
                <Input
                    type="submit"
                    value="Enviar"
                    className="flex w-[90%] items-center justify-center p-2 bg-gray-200 text-purple-50 rounded-md shadow mt-4 lg:w-[320px] lg:h-[55px] lg:ml-40 lg:mt-12"
                />
            </form>
        </main>
    );
}
