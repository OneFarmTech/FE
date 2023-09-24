import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import { useState } from "react";
import { clearUser, codeVerification, signupThunk } from "../redux/register/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import ChangePage from "../components/pageChange/SwitchPage";
import InputValidation from "../components/pageChange/InputValidation";
import ErrorMessage from "../components/pageChange/ErrorMessage";

const Signup = () => {
  const register = useSelector((state) => (state.register));
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [signupDetails, setDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const [invalid, setvalid] = useState({
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    if (newKey == 'otp') {
      setOtp(val);
      return;
    }

    setDetails((state) => ({...state, [newKey]: val}));
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    for (const detail in signupDetails) {
      if (signupDetails[detail] == '') {
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
    
    dispatch(signupThunk(signupDetails));
  };

  const submitOtp = (e) => {
    e.preventDefault();

    if (otp == '') {
      setvalid((state) => ({
        ...state,
        error: true,
        message: 'otp'
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

    dispatch(codeVerification({
      otp: otp,
      phone: signupDetails.phone
    }));
  }

  return (
    <section className="flex flex-col w-[90%] max-w-5xl gap-10 mx-auto">
    <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">Sign Up To Create An Account</h1>

    <ChangePage page1={register.response == null} firstTitle='Personal Details' secTitle='Verification' />

    { invalid.error && (<InputValidation message={invalid.message} />) }

    { register.error && (<ErrorMessage />) }
    
     { register.response == null && (<form className="flex flex-col gap-5">

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between items-center">
          <div className="flex flex-col gap-6 w-full lg:w-[50%]">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="font-bold">Name</label>
              <input onChange={handleChange} className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="name" name="name" placeholder="Enter Your Full Name" value={signupDetails.name} />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="phone" className="font-bold">Phone Number</label>
              <input onChange={handleChange} className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" type="text" id="phone" name="phone" placeholder="Enter Your Phone Number" value={signupDetails.phone} />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="font-bold">Email</label>
              <input onChange={handleChange} className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" type="email" id="email" name="email" placeholder="Enter Your Email" value={signupDetails.email} />
            </div>

          </div>

          <div className="font-bold max-w-md flex lg:w-[30%] flex-col gap-5">
            <h3>Or continue with the following options</h3>

            <SocialIcons />
          </div>
        </div>

        <div className="flex justify-center w-full lg:justify-between pr-3 lg:max-w-lg">
          <Link to='/' className="flex items-center text-white py-2 px-5 lg:px-9 bg-black-100 lg:block">Go Back</Link>
          <button className="text-white px-9 bg-green-30 py-3" onClick={handleSignUp} type="submit">Get Verification Code</button>
        </div>
      </form>)
}
  { register.response != null && (<form className="flex flex-col gap-5" onSubmit={submitOtp}>
      <div className="flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between items-center">
        <div className="flex flex-col gap-6 lg:w-[50%]">
          <div className="flex flex-col gap-4">
            <label htmlFor="code" className="font-bold">Verification Code</label>
            <div className="flex">
              <input onChange={handleChange} className="w-full pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" type="number" id="otp" name="otp" placeholder="Enter code sent to email or phone number" />
            </div>
          </div>

          <div className="italic flex flex-col gap-3">
            <p>We just sent a code to you. It may take a minute to receive your code</p>
            <p>Haven’t recieved it? <button onClick={handleSignUp} className="not-italic text-green-30">Resend Code</button></p>
          </div>
        </div>

        <div className="font-bold max-w-md flex lg:w-[30%] flex-col gap-5">
          
        </div>
      </div>

      <div className="flex w-full justify-between lg:pr-3 lg:max-w-lg">
        <button className="text-white py-2 px-5 lg:px-9 bg-black-100 lg:block" onClick={() => {
          dispatch(clearUser());
        }}>Go Back</button>
        <button className="text-white px-5 lg:px-9 bg-green-30 py-3" type="submit">Sign Up</button>
      </div>
    </form>)}

      <div className="font-bold text-lg text-center">
        Already have an account? <Link className="text-green-30 pl-2" reloadDocument to='/auth/login'>Log In</Link>
      </div>
    </section>
  );
};

export default Signup;
