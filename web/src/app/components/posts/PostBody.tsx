import { Home } from "lucide-react";
import Link from "next/link";

interface PostBodyParams {
    content?: string;
    tags?: Array<string>;
    author?: string;
}

export default function PostBody(params: PostBodyParams) {
    return (
        <div className="w-[95%] bg-purple-600 text-purple-50 mt-3 mb-3 p-2 rounded-md shadow lg:w-[65%]">
            <div
                dangerouslySetInnerHTML={{ __html: params.content! }}
                className="m-1  text-sm leading-relaxed lg:text-base p- "
            />
            <div className="text-xs p-1 italic mt-4 flex flex-col gap-2 lg:text-sm">
                <p>
                    <b>tags: </b>
                    {params.tags?.toString().replaceAll(",", " ")}
                </p>
                <p className="">
                    <b>autor: </b>
                    {params.author}
                </p>
            </div>
            <div className="flex items-center justify-center mt-8">
                <div className="bg-purple-900 w-[50%]  rounded-lg lg:w-[15%]">
                    <Link
                        href={"/"}
                        className="text-[10px] flex gap-2 p-2 items-center text-center"
                    >
                        <Home className="ml-2" />
                        Voltar para Página Inicial
                    </Link>
                </div>
            </div>
        </div>
    );
}
