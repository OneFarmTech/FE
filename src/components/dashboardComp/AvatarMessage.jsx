const AvatarMessage = (props) => {
  const { name, text } = props;

  return (
    <div className="py-3 flex gap-4">
      <div className="bg-black-20 rounded-full h-12 w-12 overflow-hidden">
        <img src="" alt="" />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="font-normal">{name}</h3>
        <p className="text-black-50">{text}</p>
      </div>
    </div>
  )
};

export default AvatarMessage;
