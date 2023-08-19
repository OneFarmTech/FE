import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";

const Signup = () => (
  <section className="flex flex-col w-[90%] max-w-5xl gap-10 mx-auto">
  <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">Sign Up To Create An Account</h1>
  
    <form className="flex flex-col gap-5">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between items-center">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-4">
            <label htmlFor="name" className="font-bold">Name</label>
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="name" name="name" placeholder="Enter Your Full Name" />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="code" className="font-bold">Phone Number</label>
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" type="text" id="code" name="code" placeholder="Enter Your Phone Number" />
          </div>

          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="font-bold">Email</label>
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" type="email" id="email" name="email" placeholder="Enter Your Email" />
          </div>

        </div>

        <div className="font-bold max-w-md flex flex-col gap-5">
          <h3>Or continue with the following options</h3>

          <SocialIcons />
        </div>
      </div>

      <div className="flex justify-between pr-3 max-w-md">
        <button className="text-white py-2 px-9 bg-black-100 hidden lg:block">Go Back</button>
        <button className="text-white py-2 px-9 bg-green-30 w-full py-3">Get Verification Code</button>
      </div>
    </form>

    <div className="font-bold text-lg text-center">
      Already have an account? <Link className="text-green-30 pl-2" reloadDocument to='/auth/login'>Log In</Link>
    </div>
  </section>
);

export default Signup;
