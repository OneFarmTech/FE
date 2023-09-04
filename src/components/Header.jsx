import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/onefarm.svg";
import Button from "./Button";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [ drop, setDrop ] = useState(false);
  const [ active, setActive ] = useState(false);
  
  const handleDrop = () => {
    setDrop((state) => (!state));
  }

  const handleActive = () => {
    setActive((state) => (!state));
    document.body.classList.toggle('overflow-hidden');
  }

  const handleAnchorTags = () => {
    setActive(false);
    document.body.classList.remove('overflow-hidden');
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
              className={({isActive}) => (
                isActive ? "text-green-30" : ""
              )}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({isActive}) => (
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
                <ul onClick={handleDrop} className="bg-black-10 flex-col p-3 flex gap-2 w-fit absolute">
                  <li>
                    <NavLink to="solution/farmer" className={({isActive}) => (
                        isActive ? "text-green-30" : ""
                      )}>Farmer</NavLink>
                  </li>
                  <li>
                    <NavLink to="solution/middlemen" className={({isActive}) => (
                        isActive ? "text-green-30" : ""
                      )}>Wholesaler</NavLink>
                  </li>
                  <li>
                    <NavLink to="solution/retail" className={({isActive}) => (
                        isActive ? "text-green-30" : ""
                      )}>Retailer</NavLink>
                  </li>
                </ul>
              )
            }
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({isActive}) => (
                isActive ? "text-green-30" : ""
              )}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="hidden lg:block">
        <Button linkTo="/auth/signup" clas='green' name="Get started" />
      </div>

      <div className="cursor-pointer lg:hidden" onClick={handleActive}>
        <VscMenu size={25} />
      </div>
      
      {active && (<nav className="h-full lg:hidden py-16 px-5 bg-blue-10 w-[80%] fixed top-0 right-0">
        <button className="absolute top-4 right-4 text-white cursor-pointer" onClick={handleActive}>
          <GrClose size={35} />
        </button>
        <ul className="flex-col justify-start items-start text-xl gap-4 flex">
          <li><NavLink to="/" onClick={handleAnchorTags}>Home</NavLink></li>
          <li>
            <NavLink to="about" onClick={handleAnchorTags}>About Us</NavLink>
          </li>
          <li>Solution
            <ul className="flex flex-col gap-2 pl-2 text-lg">
              <li>
                <NavLink to="solution/farmer" onClick={handleAnchorTags}>Farmers</NavLink>
              </li>
              <li>
                <NavLink to="solution/middlemen" onClick={handleAnchorTags}>Wholesalers</NavLink>
              </li>
              <li>
                <NavLink to="solution/retail" onClick={handleAnchorTags}>Retailers</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="contact" onClick={handleAnchorTags}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>)}
    </header>
  )
};

export default Header;
