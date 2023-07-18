interface DateProps {
  date: string;
}

export default function DateCard(props: DateProps) {
  return (
    <div className="flex w-[220px] h-[40px] bg-purple-500 text-purple-50 rounded-md shadow ml-4 mt-8 justify-center items-center lg:w-[320px] lg:h-[55px] lg:ml-40 lg:mt-12">
      <p className="py-2 font-bold lg:text-xl">{props.date}</p>
    </div>
  );
}
