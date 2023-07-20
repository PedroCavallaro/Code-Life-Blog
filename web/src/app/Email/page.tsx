"use client";
import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
    email: z.string().email({ message: "Digite um email válido" }),
});

type FormData = z.infer<typeof schema>;

export default function Email() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });

    return (
        <main className="mt-4 lg:flex lg:items-center lg:justify-center">
            <form
                onSubmit={handleSubmit(() => {
                    console.log("oi");
                })}
                className="flex flex-col justify-center items-center gap-4"
            >
                <div className="flex w-[90%] text-center p-2 bg-purple-500 text-purple-50 rounded-md shadow lg:w-[320px] lg:h-[55px] lg:ml-40 lg:mt-12">
                    <p className="py-2 font-bold lg:text-xl">
                        Adicione seu email para saber quando tem post novo!
                    </p>
                </div>
                <div className="flex flex-col gap-2  w-[90%]">
                    <Input
                        {...register("email")}
                        type="text"
                        className="shadow-lg plsaceholder:text-purple-50 rounded-md w-full h-[52px] p-2 placeholder:text-white text-white border-2 border-white"
                    />
                    {errors.email && (
                        <span className="text-red-600 text-sm">
                            {errors.email.message}
                        </span>
                    )}
                </div>
                <Input
                    type="submit"
                    value="Enviar"
                    className="flex w-[90%] items-center justify-center p-2 bg-purple-500 text-purple-50 rounded-md shadow mt-4 lg:w-[320px] lg:h-[55px] lg:ml-40 lg:mt-12"
                />
            </form>
        </main>
    );
}
