import error from "../../assets/images/dashboard/error.svg"
import { VscClose } from "react-icons/vsc";

const ErrorMessage = ({message}) => {
  
  return (
    <div className="rounded-md bg-red-50 px-3 py-2 flex items-center justify-between text-white capitalize">
      <div className="flex gap-3 items-center">
        <figure>
          <img src={error} alt="Error icon" />
        </figure>
        <p>{message}</p>
      </div>

      <VscClose />
    </div>
  );
};

export default ErrorMessage;
