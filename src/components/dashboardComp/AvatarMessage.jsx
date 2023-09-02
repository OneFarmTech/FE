const AvatarMessage = (props) => {
  const { name, text } = props;

  return (
    <div className="px-7 py-3 flex gap-4">
      <div className="bg-black-20 rounded-full h-14 w-14 overflow-hidden">
        <img src="" alt="" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-normal">{name}</h3>
        <p className="text-black-20">{text}</p>
      </div>
    </div>
  )
};

export default AvatarMessage;
