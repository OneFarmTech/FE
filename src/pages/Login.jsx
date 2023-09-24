import { Link } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ChangePage from "../components/pageChange/SwitchPage";
import { clearUser, loginThunk, verifyLogin } from "../redux/register/registerSlice";
import ErrorMessage from "../components/pageChange/ErrorMessage";
import InputValidation from "../components/pageChange/InputValidation";

const Login = () => {
  const [ loginDetails, setDetails ] = useState({
    email: '',
    otp: ''
  });
  const [invalid, setvalid] = useState({
    error: false,
    message: ''
  });
  const store = useSelector((state) => (state.register));
  const dispatch = useDispatch();

  const [page, setPage] = useState('page1');

  const handleChange = (e) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    setDetails((state) => ({
      ...state,
      [newKey]: val,
    }))
  }

  const login = (e) => {
    e.preventDefault();
    if (loginDetails.email == '') {
      setvalid((state) => ({
        ...state,
        error: true,
        message: 'email'
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

    dispatch(loginThunk(loginDetails.email));
  }

  const codeVerification = (e) => {
    e.preventDefault();
    if (loginDetails.otp == '') {
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

    dispatch(verifyLogin(loginDetails));

  }

  return (
    <section className="flex flex-col w-[90%] max-w-5xl gap-10 mx-auto">
    <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">Log In To Your Account</h1>

    <ChangePage page1={store.response == null} firstTitle="Email/Phone Number" secTitle="Verification" />
    { store.error && <ErrorMessage /> }
    { invalid.error && <InputValidation message={invalid.message} /> }

     {store.response == null && ( <form className="flex flex-col gap-5" action="#" onSubmit={login}>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between items-center">
          <div className="flex flex-col gap-4 w-full ">
            <label htmlFor="email" className="font-bold">Email/Phone Number</label>
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full max-w-lg" type="email" id="email" name="email" placeholder="Enter Your Email or Phone Number" onChange={handleChange} value={loginDetails.email} />
          </div>

          <div className="font-bold max-w-md flex flex-col gap-5 w-full ">
            <h3>Or continue with the following options</h3>

            <SocialIcons />
          </div>
        </div>

        <div className="flex self-center lg:self-start w-full justify-between pr-3 max-w-md">
          <Link to='/' className="text-white py-2 px-9 bg-black-100">Go Back</Link>
          <button className="text-white py-2 px-9 bg-green-30" type="submit">Get Verification Code</button>
        </div>
      </form>)}
    
     {store.response != null && ( <form className="flex flex-col gap-5" onSubmit={codeVerification}>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="otp" className="font-bold">Verification Code</label>
                <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="otp" name="otp" placeholder="Enter code sent to email or phone number" onChange={handleChange} />              
            </div>

            <div className="italic flex flex-col gap-3">
              <p>We just sent a code to you. It may take a minute to receive your code</p>
              <p>Haven’t recieved it? <Link onClick={login} className="not-italic text-green-30">Resend Code</Link></p>
            </div>
          </div>

          
        </div>

        <div className="flex justify-between pr-3 max-w-md self-center w-full lg:self-start">
          <button type="button" className="text-white py-2 px-9 bg-black-100" onClick={() => {dispatch(clearUser())}}>Go Back</button>
          <button className="text-white py-2 px-9 bg-green-30" type="submit">Login</button>
        </div>
      </form>)}

      <div className="font-bold text-lg text-center">
        Don't have an account? <Link className="text-green-30 pl-2" reloadDocument to='/auth/signup'>Sign Up</Link>
      </div>
    </section>
  );
}

export default Login;
