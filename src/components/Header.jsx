import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/onefarm.svg";
import Button from "./Button";
import { VscMenu } from "react-icons/vsc";

const Header = () => (
  <header className="flex flex-row justify-between px-[4%] py-4 items-center">
    <Link to="/" className="block w-[100px] lg:w-[150px]">
      <img src={logo} alt="Logo" />
    </Link>

    <nav className="hidden lg:block">
      <ul className="flex flex-row justify-start items-center gap-x-10">
        <li>
          <NavLink
            to="/"
            className={({isActive, isPending}) => (
              isActive ? "text-green-30" : ""
            )}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({isActive, isPending}) => (
              isActive ? "text-green-30" : ""
            )}
          >
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/solutions"
            className={({isActive, isPending}) => (
              isActive ? "text-green-30" : ""
            )}
          >
            Solution
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({isActive, isPending}) => (
              isActive ? "text-green-30" : ""
            )}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>

    <div className="hidden lg:block">
      <Button linkTo="/signup" clas='white' name="Get started" />
    </div>

    <nav className="lg:hidden">
      <div>
        <VscMenu size={25} />
      </div>
      <ul className="flex flex-row justify-start items-center gap-x-10 hidden">
        <li>Home</li>
        <li>About Us</li>
        <li>Solution</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  </header>
);

export default Header;
