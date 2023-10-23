import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/onefarm.svg";
import { useState } from "react";
import { VscMenu } from "react-icons/vsc";
import { GrClose } from "react-icons/gr";

const ProductsHeader = () => {
  const [ active, setActive ] = useState(false);

  const handleActive = () => {
    setActive((state) => (!state));
    document.body.classList.toggle('overflow-hidden');
  }

  const handleAnchorTags = () => {
    setActive(false);
    document.body.classList.remove('overflow-hidden');
  }
  
  return (
    <header className="flex flex-row justify-between bg-[#f2f2f2] px-[4%] py-4 items-center">
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
              to="/app/about"
              className={({isActive}) => (
                isActive ? "text-green-30" : ""
              )}
            >
              About Us
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/app/contact"
              className={({isActive}) => (
                isActive ? "text-green-30" : ""
              )}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>

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
            <NavLink to="/app/about" onClick={handleAnchorTags}>About Us</NavLink>
          </li>
          <li>
            <NavLink to="/app/contact" onClick={handleAnchorTags}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>)}
    </header>
  )
};

export default ProductsHeader;
