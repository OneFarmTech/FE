import { Link } from "react-router-dom";
import logo from "../../assets/images/onefarm.svg";

const LogoHeader = () => {
  return (
    <header className="flex flex-row justify-between px-[4%] py-4 bg-transparent items-center">
      <Link to="/" className="block w-[100px] lg:w-[150px]">
        <img src={logo} alt="Logo" />
      </Link>
    </header>
  );
};

export default LogoHeader;
