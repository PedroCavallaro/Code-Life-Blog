import { Search } from "lucide-react";
import { Input } from "../Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const schema = z.object({
    tag: z.string().min(2),
});

type FormData = z.infer<typeof schema>;
export default function SearchBar() {
    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });
    const router = useRouter();
    return (
        <form
            onSubmit={handleSubmit(({ tag }) => {
                router.push(`/Results?tag=${tag}`);
            })}
            className="bg-purple-100 flex p-1 rounded-md items-center cursor-pointer"
        >
            <Input {...register("tag")} placeholder="tag" />
            <button type="submit">
                <Search color="#efe6fd" />
            </button>
        </form>
    );
}
