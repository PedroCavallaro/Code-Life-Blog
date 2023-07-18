import { Image } from "lucide-react";
export default function ChangeInfo() {
    return (
        <button className="bg-purple-900 flex w-[200px] p-1 rounded-md justify-center items-center mt-3">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image color="#fff" className="w-16 h-7" />
            <p className="font-sans text-white text-sm font-extralight text-[12px] text-center">
                clique nas foto para alterar o conteúdo
            </p>
        </button>
    );
}
