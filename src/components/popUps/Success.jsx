import { useRef } from "react";
import { GrClose } from "react-icons/gr";
import PropTypes from 'prop-types';

const Success = (props) => {
  const { image, message, closeSuccess } = props;
  const modal = useRef(null);

  return (
    <section className="h-screen absolute top-0 w-full p-1 bg-black-30 flex items-center justify-center z-50">
      <div ref={modal} className="p-14 flex flex-col w-fit max-w-xl gap-6 items-center rounded-xl text-center bg-white relative">
        <div className="w-fit absolute top-6 right-6 cursor-pointer" onClick={closeSuccess}>
          <GrClose size={24} />
        </div>
        
        <figure className="w-md">
          <img src={image} alt="" />
        </figure>

        <h3 className="flex items-center gap-2 font-bold text-lg">Congratulations!</h3>
        <p>{message}</p>
      </div>
    </section>
  )
};

Success.propTypes = {
  image: PropTypes.any,
  message: PropTypes.string,
  closeSuccess: PropTypes.func
};

export default Success;
