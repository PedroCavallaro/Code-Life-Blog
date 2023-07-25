import { formatPostDate } from "@/app/lib/dates";

interface titleParams {
    title?: string;
    date?: string;
}

export default function PostTitle(params: titleParams) {
    return (
        <div className="bg-purple-400 w-[87%] text-purple-50 mt-4 p-2 text-[15px] rounded shadow-lg lg:w-[55%]">
            <p className="font-medium lg:text-xl">{params.title}</p>
            <p className="mt-4 text-xs lg:text-base">
                {formatPostDate(params.date!)}
            </p>
        </div>
    );
}
