import Image from "next/image"
export default function ProfileIcon() {
    return(
        <>
            <div 
                className="bg-purple-200 flex items-center justify-center flex-col w-[110px] p-2 h-[120px] gap-3 rounded-tr-[180px] rounded-tl-[180px] shadow-lg rounded-[7px]">
                <Image  src={"/pictures/enzocas.jpeg"} 
                className="rounded-full w-[68px] h-[67px] bg-white object-cover shadow" 
                alt="" width={100} height={100}/>
                    {/* foto */}
                
                <p className="text-[10px]">Hello everyone! I’m Enzo 🤟</p>
            </div>
        </>
    )
};
