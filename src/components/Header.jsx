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
        <li>
          <Button linkTo="login" name="Login" />
        </li>
        <li>
          <Button name="Sign Up" clas="green" linkTo="signup" />
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
