import Link from "next/link";

interface PostCardProps {
    id: string;
    title: string;
    hashtags: Array<string>;
}
export default function PostCard(props: PostCardProps) {
    return (
        <Link
            href={`/Posts/${props.id}`}
            className="bg-purple-400 w-[85%] text-purple-50 rounded-[5px] mt-6 ml-4 shadow-xl p-1 lg:ml-40 lg:w-[60%]"
        >
            <p className="ml-2 my-4 text-sm font-medium lg:text-2xl">
                {props.title}
            </p>
            <div className="flex justify-center">
                <hr className="text-purple-50 w-[95%] lg:w-[99%]" />
            </div>
            <div className="ml-2 text-[10px] mt-2 lg:text-sm lg:mb-4">
                <span>{props.hashtags.toString().replaceAll(",", " ")}</span>
            </div>
        </Link>
    );
}
