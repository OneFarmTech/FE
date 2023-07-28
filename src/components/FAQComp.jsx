import { useState } from "react";
import { BsArrowDown, BsArrowUp, BsDot } from "react-icons/bs";

const FaqComp = (props) => {
  const {question, answer} = props;

  let [icon, setIcon] = useState(true);

  const handleClick = () => {
    setIcon((state) => (!state));
  }

  return (
    <details className="" onClick={handleClick}>
      <summary className="flex justify-between items-center py-7">
        <h3 className="font-bold text-black-100 flex items-center"><span className=""><BsDot size={30} /></span>{question}</h3>
        {icon && <BsArrowDown size={25} className="text-black-100" />}
        {!icon && <BsArrowUp size={25} className="text-black-100" />}
      </summary>
      <p className="leading-10 font-normal px-3">{answer}</p>
    </details>
  );
};

export default FaqComp;