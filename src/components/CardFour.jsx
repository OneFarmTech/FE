import Button from "./Button";

const CardFour = (props) => {
  const { order, img, heading, list } = props;

  return (
    <article className="flex flex-col lg:flex-row gap-4 lg:gap-[8rem]">
      <div className={order}>
        <img src={img} alt="" />
      </div>

      <div className="flex flex-col justify-center items-start gap-3">
        <h3 className="font-bold">{heading}</h3>
        <ul className="flex flex-col gap-3 list-disc list-inside">
          {
            list.map((li) => (
              <li className="pl-2 leading-10" key={li}>{li}</li>
            ))
          }
        </ul>
        <Button linkTo="/auth/signup" name="Get Started" clas="white" />
      </div>
    </article>
  );
};

export default CardFour;
