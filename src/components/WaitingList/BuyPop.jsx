import PropTypes from 'prop-types';
import {GrClose} from "react-icons/gr";
import smile from "../../assets/images/waitinglist/smile.svg";
import { useRef } from "react";

const BuyPop = (props) => {
  const { closeBuy } = props;
  const modal = useRef(null);

  return (
    <section className="h-screen fixed top-0 w-full p-1 bg-black-30 flex items-center justify-center">
      <div ref={modal} className="p-14 flex flex-col w-fit max-w-xl gap-6 items-center rounded-xl text-center bg-white relative">
        <div className="w-fit absolute top-6 right-6 cursor-pointer" onClick={closeBuy}>
          <GrClose size={24} />
        </div>
        
        <figure className="w-md">
          <img src={smile} alt="" />
        </figure>

        <p>To order, just give us a call or send a WhatsApp message to <span className='font-bold'>+2348051161999</span>.</p>
 
        <p>If you&apos;re in Abuja and prefer to order in person, come visit our office at: <span className='font-bold'>Suite No. 7, cherry hill plaza, Eke Yusuf close, behind Eterna Filling station Utako, Abuja</span>.</p>
      </div>
    </section>
  )
};

BuyPop.propTypes = {
  closeBuy: PropTypes.func,
}

export default BuyPop;
