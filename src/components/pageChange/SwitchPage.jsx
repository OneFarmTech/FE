const ChangePage = ({page1, firstTitle, secTitle}) => {

  return (
    <div className="flex gap-10 md:gap-16 items-end">
      <div className="flex-1 flex flex-col gap-1">
        <p className="text-green-30">{firstTitle}</p>
        <div className="h-3 w-full rounded-2xl bg-green-30"></div>
      </div>

      <div className="flex-1 flex flex-col gap-1">
        <p className={`${page1 ? "text-black-25" : "text-green-30"}`}>{secTitle}</p>
        <div className={`${page1 ? "bg-black-25" : "bg-green-30"} h-3 w-full rounded-2xl`}></div>
      </div>
    </div>
  );
};

export default ChangePage;
