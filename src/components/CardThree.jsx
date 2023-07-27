const CardThree = (props) => {
  const { img, name, heading, details } = props;

  return (
    <article className="flex flex-1 flex-col">
      <div className="w-full">
        <img src={img} alt="" />
      </div>
      <div className="w-fit text-lg font-bold self-center translate-y-[-50%] bg-black-100 text-black-10 px-8 py-3 rounded-md">{name}</div>
      <p className="text-lg"><span className="font-bold">{heading}</span>{details}</p>
    </article>
  );
};

export default CardThree
