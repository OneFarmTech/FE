import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/onefarm.svg";
import Button from "./Button";
import { VscMenu } from "react-icons/vsc";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Header = () => {
  const [ drop, setDrop ] = useState('false');

  const handleDrop = () => {
    setDrop((state) => (!state));
  }
  
  return (
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
          <li className="relative">
            <a onClick={handleDrop} className="flex justify-between items-center cursor-pointer">
              <span>Solution</span>
              {
                drop && <IoIosArrowUp />
              }
               {
                !drop && <IoIosArrowDown />
               }
            </a>
            {
              drop && (
                <ul onClick={handleDrop} className="bg-black-10 flex-col p-3 text-green-30 flex gap-2 w-fit absolute">
                  <li>
                    <NavLink to="solution/farmer">Farmer</NavLink>
                  </li>
                  <li>
                    <NavLink>Middleman</NavLink>
                  </li>
                  <li>
                    <NavLink>Retailer</NavLink>
                  </li>
                </ul>
              )
            }
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
        <Button linkTo="/signup" clas='green' name="Get started" />
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
  )
};

export default Header;
