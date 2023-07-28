import { Rating } from '@material-tailwind/react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const TestimonialCard = (props) => {
  const { img, heading, desc, details } = props;

  return (
    <article className="flex flex-col justify-center items-center py-14 gap-10 bg-testimonialmobile md:bg-testimonialbg bg-no-repeat bg-contain bg-center">
      <div className="rounded-full overflow-hidden w-[224px] h-[224px]">
        <img src={img} alt="" />
      </div>

      <h3 className="font-bold text-2xl text-center">{heading}</h3>
      <p className="text-center">{desc}</p>

      <Rating value={4} />
      
      <p className="text-center leading-10">{details}</p>
    </article>
  )
};

export default TestimonialCard;
