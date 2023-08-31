import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import { useState } from "react";

const Signup = () => {
  const [ page, setPage ] = useState('page1');

  const pageOne = () => {
    setPage('page1');
  };

  const pageTwo = () => {
    setPage('page2');
  };

  return (
    <section className="flex flex-col w-[90%] max-w-5xl gap-10 mx-auto">
    <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">Sign Up To Create An Account</h1>

    { page == 'page1' && (<div className="w-full max-w-lg flex justify-between items-center before:content-[''] before:h-[1px] before:w-full before:absolute relative before:top-[50%] before:bg-black-20 before:-z-10 z-10">
      <div className="rounded-full bg-green-30 text-white h-9 w-9 text-center leading-9">1</div>
      <div className="rounded-full bg-black-20 text-white h-9 w-9 text-center leading-9">2</div>
    </div>)}

    { page == 'page2' && (<div className="w-full max-w-lg flex justify-between items-center before:content-[''] before:h-[1px] before:w-full before:absolute relative before:top-[50%] before:bg-green-30 before:-z-10 z-10">
      <div className="rounded-full bg-green-30 text-white h-9 w-9 text-center leading-9">1</div>
      <div className="rounded-full bg-green-30 text-white h-9 w-9 text-center leading-9">2</div>
    </div>)}
    
     { page == 'page1' && (<form className="flex flex-col gap-5">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between items-center">
          <div className="flex flex-col gap-6 w-full lg:w-[50%]">
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

          <div className="font-bold max-w-md flex lg:w-[30%] flex-col gap-5">
            <h3>Or continue with the following options</h3>

            <SocialIcons />
          </div>
        </div>

        <div className="flex justify-center w-full lg:justify-between pr-3 lg:max-w-lg">
          <Link to='/' className="flex items-center text-white py-2 px-5 lg:px-9 bg-black-100 lg:block">Go Back</Link>
          <button className="text-white px-9 bg-green-30 py-3" onClick={pageTwo}>Get Verification Code</button>
        </div>
      </form>)
}
  { page == 'page2' && (<form className="flex flex-col gap-5">
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between items-center">
        <div className="flex flex-col gap-6 lg:w-[50%]">
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

        <div className="font-bold max-w-md flex lg:w-[30%] flex-col gap-5">
          
        </div>
      </div>

      <div className="flex w-full justify-between lg:pr-3 lg:max-w-lg">
        <button className="text-white py-2 px-5 lg:px-9 bg-black-100 lg:block" onClick={pageOne}>Go Back</button>
        <button className="text-white px-5 lg:px-9 bg-green-30 py-3">Sign Up</button>
      </div>
    </form>)}

      <div className="font-bold text-lg text-center">
        Already have an account? <Link className="text-green-30 pl-2" reloadDocument to='/auth/login'>Log In</Link>
      </div>
    </section>
  );
};

export default Signup;
