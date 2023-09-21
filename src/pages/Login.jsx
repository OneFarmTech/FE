import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/register/registerSlice";
import { useState } from "react";

const Login = () => {
  const [ loginDetails, setDetails ] = useState({
    email: '',
    verification: ''
  });

  const state = useSelector((state) => (state.register));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login('1234'));
    console.log(state);
  }

  return (
    <section className="flex flex-col w-[90%] max-w-5xl gap-10 mx-auto">
    <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">Log In To Your Account</h1>
    
      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="font-bold">Email/Phone Number</label>
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="name" name="name" placeholder="Enter Your Email or Phone Number" />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="code" className="font-bold">Verification Code</label>
              <div className="flex flex-col lg:flex-row lg:gap-0 gap-3">
                <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" type="text" id="code" name="code" placeholder="Enter code sent to email or phone number" />
                <button className="text-green-30 bg-transparent border-2 border-green-30 px-8 py-3 lg:flex-[30%]">Confirm</button>
              </div>
            </div>

            <div className="italic flex flex-col gap-3">
              <p>We just sent a code to you. It may take a minute to receive your code</p>
              <p>Haven’t recieved it? <Link className="not-italic text-green-30">Resend Code</Link></p>
            </div>
          </div>

          <div className="font-bold max-w-md flex flex-col gap-5">
            <h3>Or continue with the following options</h3>

            <SocialIcons />
          </div>
        </div>

        <div className="flex justify-between pr-3 max-w-md">
          <button className="text-white py-2 px-9 bg-black-100">Go Back</button>
          <button className="text-white py-2 px-9 bg-green-30">Login</button>
        </div>
      </form>

      <div className="font-bold text-lg text-center">
        Don't have an account? <Link className="text-green-30 pl-2" reloadDocument to='/auth/signup'>Sign Up</Link>
      </div>
    </section>
  );
}

export default Login;
