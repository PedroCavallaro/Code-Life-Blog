"use client";
import { useForm } from "react-hook-form";
import { Input } from "../components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { boolean, z } from "zod";
import { api } from "../lib/api";
import { useState } from "react";
import { swal } from "../lib/swal";

const schema = z.object({
    email: z.string().email({
        message: "Digite um email válido",
    }),
});

type FormData = z.infer<typeof schema>;

export default function Email() {
    async function createEmail(email: string) {
        await api
            .post("/email", {
                email: email,
            })
            .then((res) => setSuccess(true))
            .catch((err) => setSuccess(false));
    }
    const [success, setSuccess] = useState<boolean>();
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });

    return (
        <main className="mt-4 lg:flex lg:flex-col lg:items-center lg:justify-center lg:w-[100%]">
            <form
                onSubmit={handleSubmit(async ({ email }) => {
                    await createEmail(email);
                    !success
                        ? swal.fire({
                              icon: "error",
                              title: "Email cadastrado com sucesso",
                          })
                        : swal.fire({
                              icon: "success",
                              title: "Algo não saiu como esperado",
                          });
                    reset();
                })}
                className="flex flex-col justify-center items-center gap-4 "
            >
                <div className="flex w-[90%] text-center p-2 bg-purple-500 text-purple-50 rounded-md shadow lg:w-full lg:h-[55px] ">
                    <p className="py-2 font-bold lg:text-xl lg: text-center lg:w-[100%] ">
                        Adicione seu email para saber quando tem post novo!
                    </p>
                </div>
                <Input
                    type="email"
                    placeholder="exemplo@email.com"
                    className="flex w-[90%] placeholder:text-white p-2 bg-purple-100 text-purple-50 rounded-md shadow mt-4 
                    lg:w-full lg:h-[55px] border-2 border-white"
                    {...register("email")}
                />
                {errors.email && (
                    <span className="text-red-600 text-sm">
                        {errors.email.message}
                    </span>
                )}

                <Input
                    type="submit"
                    value="Enviar"
                    className="flex w-[90%] cursor-pointer items-center justify-center p-2 bg-purple-500 text-purple-50 rounded-md shadow mt-4 
                    lg:w-full lg:h-[55px] "
                />
            </form>
        </main>
    );
}
