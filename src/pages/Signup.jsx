import { Link, useNavigate } from "react-router-dom";
import SocialIcons from "../components/SocialIcons";
import { useState } from "react";
import { clearUser, codeVerification, signupThunk } from "../redux/register/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import ChangePage from "../components/pageChange/SwitchPage";
import InputValidation from "../components/pageChange/InputValidation";
import ErrorMessage from "../components/pageChange/ErrorMessage";
import Counter from "../components/pageChange/Counter";
import { usePOST } from "../hooks/usePOST.hook";
import { UserProvider, useUser } from "../components/contexts/UserContext";
const Signup = () => {
  const { updateUserRole } = useUser();
  const navigate = useNavigate();
  const register = useSelector((state) => (state.register));
  const [showVerifyOTP, setShowVerifyOTP] = useState(false)

  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [signupDetails, setDetails] = useState({
    name: '',
    email: '',
    phone: '',
    roles: '',
  });

  const [invalid, setvalid] = useState({
    error: false,
    message: ''
  });


  const { mutate, isPending, isError, isSuccess } = usePOST('register', false)
  const handleChange = (e) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    if (newKey == 'otp') {
      setOtp(val);
      return;
    }

    setDetails((state) => ({ ...state, [newKey]: val }));
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

    // dispatch(signupThunk(signupDetails));
    mutate(signupDetails, {
      onSuccess: (returnData) => {
        if (returnData.message === 'Account Already Exist') {
          alert('You already have an account with OneFarm. Redirecting to login page in a few seconds...');
          setTimeout(() => {
            navigate('/auth/login');
          }, 3000);
        } else {
          
          
          setShowVerifyOTP(true)
         
        }
        
      },
      onError: (error) => {
        console.log(error);
      }
    })
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

    // dispatch(codeVerification({
    //   otp: otp,
    //   phone: signupDetails.phone
    // }));
    mutate({
      otp: otp,
      phone: signupDetails.phone
    }, {
      onSuccess: (returnData) => {
        console.log('>>>', returnData);
        sessionStorage.setItem("token", returnData.token)

        navigate('/dashboard/home');
        const userRole = signupDetails.roles[0];
        localStorage.setItem('userRole', userRole);
    

        updateUserRole(signupDetails.roles[0]);
        
      },
      onError: (error) => {
        console.log(error);
      }
    })
  }

  return (
    <UserProvider>
    <section className="flex flex-col w-[90%] max-w-5xl gap-10 mx-auto">
      <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">Sign Up To Create An Account</h1>

      <ChangePage page1={register.response == null} firstTitle='Personal Details' secTitle='Verification' />

      {invalid.error && (<InputValidation message={invalid.message} />)}

      {register.error && (<ErrorMessage />)}

      {!showVerifyOTP && (<form className="flex flex-col gap-5">

        <div className="flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between items-center">
          <div className="flex flex-col gap-6 w-full lg:w-[50%]">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="font-bold">Name</label>
              <input onChange={handleChange} className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="name" name="name" placeholder="Enter Your Full Name" value={signupDetails.name} required />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="phone" className="font-bold">Phone Number</label>
              <input onChange={handleChange} className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" type="text" id="phone" name="phone" placeholder="Enter Your Phone Number" value={signupDetails.phone} required />
            </div>

            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="font-bold">Email</label>
              <input onChange={handleChange} className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" type="email" id="email" name="email" placeholder="Enter Your Email" value={signupDetails.email} required />
            </div>

            <div className="flex flex-col gap-4">
        <label htmlFor="roles" className="font-bold">Role</label>
        <select onChange={handleChange} className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" id="roles" name="roles" value={signupDetails.roles} required >
        <option value=""  disabled selected>Select your Role</option>
          <option value="farmer">Farmer</option>
          <option value="retailer">Retailer</option>
        </select>
      </div>

          </div>

          <div className="font-bold max-w-md flex lg:w-[30%] flex-col gap-5">
            <h3>Or continue with the following options</h3>

            <SocialIcons />
          </div>
        </div>

        <div className="flex justify-center w-full lg:justify-between pr-3 lg:max-w-lg">
          <Link to='/' className="flex items-center text-white py-2 px-5 lg:px-9 bg-black-100 lg:block">Go Back</Link>
          <button className="text-white px-9 bg-green-30 py-3" onClick={handleSignUp} disabled={isPending} type="submit">{isPending ? 'Please wait.....' : 'Get Verification Code'}</button>
        </div>
      </form>)
      }
      {showVerifyOTP && (<form className="flex flex-col gap-5" onSubmit={submitOtp}>
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
              <p>Haven’t recieved it? <Counter login={handleSignUp} /></p>
            </div>
          </div>

          <div className="font-bold max-w-md flex lg:w-[30%] flex-col gap-5">

          </div>
        </div>

        <div className="flex w-full justify-between lg:pr-3 lg:max-w-lg">
          <button className="text-white py-2 px-5 lg:px-9 bg-black-100 lg:block" onClick={() => {
            dispatch(clearUser());
          }}>Go Back</button>
          <button className="text-white px-5 lg:px-9 bg-green-30 py-3" type="submit" disabled={isPending} >{isPending ? 'Please wait.....' : 'Sign up'}</button>
        </div>
      </form>)}

      <div className="font-bold text-lg text-center">
        Already have an account? <Link className="text-green-30 pl-2" to='/auth/login' onClick={() => {
          dispatch(clearUser());
        }}>Log In</Link>
      </div>
    </section>
    </UserProvider>
  );
};

export default Signup;
