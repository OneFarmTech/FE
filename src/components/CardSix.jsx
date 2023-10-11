import Button from "./Button";

const CardSix = (props) => {
  const { img, order, heading, details } = props;

  return (
    <article className="flex flex-col lg:flex-row gap-8 justify-around">
      <div className={order}>
        <img src={img} alt="" />
      </div>

      <div className="flex flex-1 flex-col justify-center items-start gap-3">
        <h3 className="font-bold">{heading}</h3>
        <p className="leading-10">{details}</p>
        <Button linkTo="/auth/signup" name="Get Started" clas="white" />
      </div>
    </article>
  );
};

export default CardSix;
