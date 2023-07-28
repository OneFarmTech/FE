import bg1 from "../../assets/images/solutions/rev1.png";
import bg2 from "../../assets/images/solutions/rev2.png";
import bg3 from "../../assets/images/solutions/rev3.png";
import leftarr from "../../assets/images/solutions/leftarr.svg";
import rightarr from "../../assets/images/solutions/rightarr.svg";
import { useState } from "react";

const Carousel = () => {
  const [ index, setIndex ] = useState(0);

  const increaseIndex = () => {
    setIndex((i) => {
      let x = i+1;
      if (x >= reviews.length) {
        return i;
      }

      return x;
    });
  }

  const decreaseIndex = () => {
    setIndex((i) => {
      let x = i-1;
      if (x <= 0) {
        return 0;
      }

      return x;
    });
  }

  const reviews = [
    {
      id: 0,
      img: bg1,
      name: "Chiamaka Johnson",
      desc: "CEO of AfriFarms, Lagos",
      message: "OneFarm has helped me overcome logistical challenges and reduced my transportation costs significantly. I now have a stable market for my produce, ensuring a sustainable income for my family",
    },
    {
      id: 1,
      img: bg2,
      name: "Umaru Ololade",
      desc: "CEO of Green Logistics, Enugu",
      message: "OneFarm has revolutionized my sourcing process. I now have access to a wider range of farmers and can secure high-quality produce at fair prices, ensuring customer satisfaction",
    },
    {
      id: 2,
      img: bg3,
      name: "Dooshima Ashiru",
      desc: "CEO of Veg Supermarket, Abuja",
      message: "Thanks to OneFarm, we can offer our customers a wider range of products and provide transparency in our supply chain. It has enhanced our reputation and customer loyalty.'",
    }
  ];


  return (
    <section className="flex justify-between lg:justify-evenly gap-3 items-center">
      <div className="lg:w-[30px] w-6 cursor-pointer" onClick={decreaseIndex}>
        <img src={leftarr} alt="Arrow icon" />
      </div>

      <article className="flex flex-col items-center gap-8 bg-white py-9 lg:px-[40px] w-[80%] max-w-[460px] shadow-lg">
        <div className="w-[70%] min-w-200px m-auto">
          <img src={reviews[index].img} alt="" />
        </div>

        <h3 className="text-center font-bold">{reviews[index].name}</h3>

        <p className="text-center">{reviews[index].desc}</p>

        <p className="text-center text-sm lg:text-md leading-9">{reviews[index].message}</p>
      </article>

      <div className="lg:w-[30px] w-6 cursor-pointer" onClick={increaseIndex}>
        <img src={rightarr} alt="Arrow icon" />
      </div>
    </section>
  );
};

export default Carousel;
