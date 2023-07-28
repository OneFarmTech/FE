const CardTwo = (props) => {
  const { heading, details } = props;
  return (
    <article>
      <p className="text-lg leading-10"><span className="font-bold">{heading} </span> {details}</p>
    </article>
  );
};

export default CardTwo;
