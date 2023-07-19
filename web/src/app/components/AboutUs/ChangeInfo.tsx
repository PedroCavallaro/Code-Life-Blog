import { Image } from "lucide-react";
export default function ChangeInfo() {
    return (
        <div className="bg-purple-900 flex w-[200px] h-16 p-1 rounded-md justify-center items-center mt-3 lg:h-20 select-none">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <Image color="#fff" className="w-16 h-7 " />
            <p className="font-sans text-white text-sm font-extralight text-[12px] text-center">
                clique nas fotos para alterar o conteúdo
            </p>
        </div>
    );
}
