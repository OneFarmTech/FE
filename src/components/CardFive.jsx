const CardFive = (props) => {
  const { heading, img, details } = props;

  return (
    <article className="flex flex-1 flex-col gap-4">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold">{heading}</h3>
        <p className="leading-10">{details}</p>
      </div>
    </article>
  );
};

export default CardFive;
