export default function LoadingHome() {
  return (
    <div className="flex flex-col justify-center items-center animate-pulse">
      <div className="flex flex-col justify-start p-4 mt-4 w-screen lg:hidden">
        <div className="w-[219px] h-[40px] bg-purple-500 text-white rounded-sm shadow-md"></div>
      </div>
      <div className="flex items-center justify-center mt-4 flex-col gap-4 bg-purple-600 w-[95%] rounded-md lg:h-[35rem] lg:mt-10">
        <div className="relative lg:w-screen">
          <div className="lg:absolute -top-7 right-4">
            <div className="bg-purple-900 flex w-[200px] h-16 p-1 rounded-md justify-center items-center mt-3 lg:h-20 select-none">
              <p className="font-sans text-white text-sm font-extralight text-[12px] text-center"></p>
            </div>
          </div>
        </div>
        <section className="flex justify-around gap-3">
          <div className="bg-purple-200 flex items-center justify-center flex-col w-[110px] p-2 h-[120px] cursor-pointer gap-3 rounded-tr-[180px] rounded-tl-[180px] shadow-lg rounded-[7px] lg:w-[280px] lg:h-[280px]"></div>
          <div className="bg-purple-200 flex items-center justify-center flex-col w-[110px] p-2 h-[120px] cursor-pointer gap-3 rounded-tr-[180px] rounded-tl-[180px] shadow-lg rounded-[7px] lg:w-[280px] lg:h-[280px]"></div>
          <div className="bg-purple-200 flex items-center justify-center flex-col w-[110px] p-2 h-[120px] cursor-pointer gap-3 rounded-tr-[180px] rounded-tl-[180px] shadow-lg rounded-[7px] lg:w-[280px] lg:h-[280px]"></div>
        </section>
        <section className=" flex flex-col justify-center items-center gap-4 min-h-[200px]">
          <p className="text-white text-sm w-[19rem] p-4 text-center lg:w-[70%] lg:text-2xl"></p>
        </section>
      </div>
    </div>
  );
}
