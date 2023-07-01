import { Link } from "react-router-dom";
import logo from "../assets/images/onefarm.svg";

const Header = () => (
  <header className="flex flex-row justify-between px-[4%] items-center">
    <Link to="/" className="block w-[100px] lg:w-[150px]">
      <img className="block h-[auto] w-[100%]" src={logo} alt="Logo" />
    </Link>

    <nav>
      <ul className="flex flex-row justify-start items-center gap-x-6">
        <li>
          <Link to='login' className="inline-block px-8 py-1 rounded-lg border border-slate-500">Login</Link>
        </li>
        <li>
          <Link className="inline-block px-8 py-1 rounded-lg bg-green-600 text-white">Sign Up</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
