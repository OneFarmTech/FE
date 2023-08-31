import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import { FaLocationDot, FaFacebookF, FaTwitter } from "react-icons/fa6";
import { ImPhone } from "react-icons/im";
import logo from '../assets/images/onefarm.svg';
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => (
  <footer className="w-full p-10 lg:p-16 bg-green-20 grid grid-cols-[1fr] lg:grid-cols-[1fr_3fr] gap-10">
    <div className="max-w-[180px]">
      <img src={logo} alt="One farm logo" />
    </div>

    <div className="flex flex-col row-span-2 self-center lg:flex-row gap-10 justify-evenly">
      <div className="flex w-full lg:max-w-[270px] justify-between">
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Website</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Farmers</Link>
            </li>
            <li>
              <Link to="/">Wholesalers</Link>
            </li>
            <li>
              <Link to="/"> Retailers</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-bold">Company</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
            <li>
              <Link to="/">Farmers</Link>
            </li>
            <li>
              <Link to="/">Wholesalers</Link>
            </li>
            <li>
              <Link to="/"> Retailers</Link>
            </li>
            <li>
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex min-w-[300px] lg:max-w-[400px] justify-between">
        <div className="flex flex-1 flex-col gap-3">
          <h3 className="font-bold">Other Links</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link to="/">Out Blog</Link>
            </li>
            <li>
              <Link to="/">Why Join Us</Link>
            </li>
            <li>
              <Link to="/">Search Farmers</Link>
            </li>
            <li>
              <Link to="/">Partner With Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col gap-3">
          <ul className="flex flex-col gap-3">
            <li className="flex justify-between items-center">
                <HiMail />
                <span className="w-[80%]">sales@onefarmtech.com  info@onefarmtech.com</span>
            </li>
            <li className="flex justify-between items-center">
                <ImPhone />
                <span className="w-[80%]">+2348037135296</span>
            </li>
            <li className="flex justify-between items-center">
                <FaLocationDot />
                <span className="w-[80%]">Suite No. 7, cherry hill plaza, Eke Yusuf close, behind Eterna Filling station Utako, Abuja.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="flex flex-col gap-6">
      <ul className="flex justify-around items-center">
        <li>
          <Link>
            <FaFacebookF size={25} />
          </Link>
        </li>
        <li>
          <Link>
            <AiFillInstagram size={25} />
          </Link>
        </li>
        <li>
          <Link>
            <FaTwitter size={25} />
          </Link>
        </li>
      </ul>

      <ul className="flex justify-around lg:flex-col">
        <li>
          <Link className="text-green-30 underline">Privacy Policy</Link>
        </li>
        <li>
          <Link className="text-green-30 underline">Terms and Conditions</Link>
        </li>
      </ul>

      <p className="text-center">&copy; {new Date().getFullYear()}, OneFarm Tech. All rights reserved</p>
    </div>
  </footer>
);

export default Footer;
