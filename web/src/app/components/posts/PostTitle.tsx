interface titleParams {
  title: string;
  date: string;
}

export default function PostTitle(params: titleParams) {
  return (
    <div className="bg-purple-400 w-[87%] text-purple-50 mt-4 p-2 text-[15px] rounded shadow-lg ">
      <p className="font-medium">{params.title}</p>
      <p className="mt-4 text-xs">{params.date}</p>
    </div>
  );
}
