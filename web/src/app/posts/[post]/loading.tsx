export default function PostLoading() {
  return (
    <div>
      <div className="bg-purple-400 w-[87%] text-purple-50 mt-4 p-2 text-[15px] rounded shadow-lg lg:w-[55%]">
        <p className="font-medium lg:text-xl"></p>
        <p className="mt-4 text-xs lg:text-base"></p>
      </div>
      <div className="w-[95%] bg-purple-600 text-purple-50 mt-3 mb-3 p-2 rounded-md shadow lg:w-[65%]">
        <p className="m-1 p-1 text-sm leading-relaxed lg:text-base"></p>
        <div className="text-xs p-1 italic mt-4 flex flex-col gap-2 lg:text-sm">
          <p></p>
          <p></p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <div className="bg-purple-900 w-[50%]  rounded-lg lg:w-[15%]">
            <div className="text-[10px] flex gap-2 p-2 items-center text-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
