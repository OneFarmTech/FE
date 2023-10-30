import PropTypes from 'prop-types';
import {GrClose} from "react-icons/gr";
import cel from "../../assets/images/waitinglist/cel.svg";
import smile from "../../assets/images/waitinglist/smile.svg";
import { useRef } from "react";

const SuccessPop = (props) => {
  const { closeSuccess } = props;
  const modal = useRef(null);

  return (
    <section className="h-screen fixed top-0 w-full p-1 bg-black-30 flex items-center justify-center">
      <div ref={modal} className="p-14 flex flex-col w-fit max-w-xl gap-6 items-center rounded-xl text-center bg-white relative">
        <div className="w-fit absolute top-6 right-6 cursor-pointer" onClick={closeSuccess}>
          <GrClose size={24} />
        </div>
        
        <figure className="w-md">
          <img src={smile} alt="" />
        </figure>

        <h3 className="flex items-center gap-2 font-bold text-lg">Thank you! <span className="w-5 inline-block"><img src={cel} alt="" /></span></h3>
        <p>You&apos;re now number <span className="font-bold">281</span> on our waitlist. We&apos;ll let you know when we&apos;ve launched. Stay tuned</p>
        <button className="bg-green-30 text-xl text-white py-3 px-20" onClick={closeSuccess}>Go back Home</button>
      </div>
    </section>
  )
};

SuccessPop.propTypes = {
  closeSuccess: PropTypes.func,
}

export default SuccessPop;
