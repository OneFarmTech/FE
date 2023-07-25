import { Link } from "react-router-dom";
import logo from "../assets/images/onefarm.svg";
import Button from "./Button";

const Header = () => (
  <header className="flex flex-row justify-between px-[4%] items-center">
    <Link to="/" className="block w-[100px] lg:w-[150px]">
      <img className="block h-[auto] w-[100%]" src={logo} alt="Logo" />
    </Link>

    <nav>
      <ul className="flex flex-row justify-start items-center gap-x-6">
        <li>Home</li>
        <li>About Us</li>
        <li>Solution</li>
        <li>Contact Us</li>
      </ul>
    </nav>

    <div>
      <Button linkTo="/signup" />
    </div>
  </header>
);

export default Header;
