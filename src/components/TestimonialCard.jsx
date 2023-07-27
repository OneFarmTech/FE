import { Rating } from "flowbite-react";

const TestimonialCard = (props) => {
  const { img, heading, desc, details } = props;

  return (
    <article className="flex flex-col justify-center items-center py-14 gap-10">
      <div className="rounded-full overflow-hidden w-[224px] h-[224px]">
        <img src={img} alt="" />
      </div>

      <h3 className="font-bold text-2xl text-center">{heading}</h3>
      <p className="text-center">{desc}</p>

      <Rating size="md">
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
      </Rating>
      <p className="text-center">{details}</p>
    </article>
  )
};

export default TestimonialCard;
