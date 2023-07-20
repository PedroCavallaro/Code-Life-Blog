import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="text-white flex items-center justify-center h-screen">
      <div className="bg-zinc-700 w-[70%] h-fit rounded-md border-2 border-white">
        <div>
          <h1 className="text-5xl p-2 mt-4">404...</h1>
          <p className="text-3xl p-2 text-center">
            Página não encontrada, mas olha o cachorrinho!
          </p>

          <Link href={"/"}>
            <div className="flex relative justify-center">
              <Image
                src={"/pictures/sad_dogo.png"}
                alt="Sad Doge"
                className="p-2"
                width={150}
                height={150}
              />
              <div className="bg-yellow-300 w-[70px] h-[70px] rounded-full flex items-center justify-center absolute ml-[6rem] mt-3">
                <span className="text-zinc-700 text-xs text-center">
                  Página Inicial
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
