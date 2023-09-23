import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ChangePage from "../components/pageChange/SwitchPage";

const Login = () => {
  const [ loginDetails, setDetails ] = useState({
    email: '',
    otp: ''
  });
  const [invalid, setvalid] = useState({
    error: false,
    message: ''
  });
  const state = useSelector((state) => (state.register));
  const dispatch = useDispatch();

  const [page, setPage] = useState('page1');

  const handleChange = (e) => {
    setDetails((state) => ({
      ...state,
      [e.currentTarget.name]: e.currentTarget.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const detail in loginDetails) {
      if (loginDetails[detail] == '') {
        setvalid((state) => ({
          ...state,
          error: true,
          message: detail
        }));

        setTimeout(() => {
          setvalid((state) => ({
            ...state,
            error: false,
            message: ''
          }))
        }, 3000)
        return;
      }
    }
  }

  return (
    <section className="flex flex-col w-[90%] max-w-5xl gap-10 mx-auto">
    <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">Log In To Your Account</h1>

    <ChangePage page1={page == 'page1'} firstTitle="Email/Phone Number" secTitle="Verification" />

     {page == 'page1' && ( <form className="flex flex-col gap-5" action="#">
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between items-center">
          <div className="flex flex-col gap-4 w-full ">
            <label htmlFor="name" className="font-bold">Email/Phone Number</label>
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full max-w-lg" type="email" id="name" name="name" placeholder="Enter Your Email or Phone Number" onChange={handleChange} value={loginDetails.email} />
          </div>

          <div className="font-bold max-w-md flex flex-col gap-5 w-full ">
            <h3>Or continue with the following options</h3>

            <SocialIcons />
          </div>
        </div>

        <div className="flex self-center lg:self-start w-full justify-between pr-3 max-w-md">
          <Link to='/' className="text-white py-2 px-9 bg-black-100">Go Back</Link>
          <button className="text-white py-2 px-9 bg-green-30" onClick={() => {setPage('page2')}}>Get Verification Code</button>
        </div>
      </form>)}
    
     {page == 'page2' && ( <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="otp" className="font-bold">Verification Code</label>
                <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="otp" name="otp" placeholder="Enter code sent to email or phone number" onChange={handleChange} />              
            </div>

            <div className="italic flex flex-col gap-3">
              <p>We just sent a code to you. It may take a minute to receive your code</p>
              <p>Haven’t recieved it? <Link className="not-italic text-green-30">Resend Code</Link></p>
            </div>
          </div>

          
        </div>

        <div className="flex justify-between pr-3 max-w-md self-center w-full lg:self-start">
          <button className="text-white py-2 px-9 bg-black-100" onClick={() => {setPage('page1')}}>Go Back</button>
          <button className="text-white py-2 px-9 bg-green-30">Login</button>
        </div>
      </form>)}

      <div className="font-bold text-lg text-center">
        Don't have an account? <Link className="text-green-30 pl-2" reloadDocument to='/auth/signup'>Sign Up</Link>
      </div>
    </section>
  );
}

export default Login;
