import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ChangePage from "../components/pageChange/SwitchPage";
import { clearUser, loginThunk, verifyLogin } from "../redux/register/registerSlice";
import ErrorMessage from "../components/pageChange/ErrorMessage";
import InputValidation from "../components/pageChange/InputValidation";
import Counter from "../components/pageChange/Counter";
import { usePOST } from "../hooks/usePOST.hook";
import { useUser } from "../components/contexts/UserContext.jsx";
import { UserProvider } from "../components/contexts/UserContext.jsx";
import axios from 'axios';
import loginAvatar from '../assets/images/dashboard/loginAvatar3.png'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";




const Login = () => {
  const { updateUserRole } = useUser();
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess } = usePOST('login', false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword((prevState) => !prevState);
    }
  };

  const [loginDetails, setDetails] = useState({
    email: '',
    password: ''
  });
  const [invalid, setvalid] = useState({
    error: false,
    message: '',
  });

  const [showVerifyOTP, setShowVerifyOTP] = useState(false)
  const store = useSelector((state) => (state.register));
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    setDetails((state) => ({
      ...state,
      [newKey]: val,
    }))
  }

  const login = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('https://api.onefarmtech.com/api/login', loginDetails);
  
      if (response.data.token) {
        sessionStorage.setItem("token", response.data.token);
        const Role = localStorage.getItem('userRole');
        if (Role === 'retailer') {
          navigate('/dashboard/retailmarketplace');
        } else if (Role === 'farmer') {
          navigate('/dashboard/home');
        } else {
          console.log(Role);
        }
        
      } else {
        console.error("Token not received in response");
        
        
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setvalid((state) => ({
        ...state,
        error: true,
         message: 'Login Details Incorrect'
       }));

      setTimeout(() => {
        setvalid((state) => ({
          ...state,
          error: false,
          message: ''
        }))
       }, 3000)
      return;
      // Handle errors from the POST request
     
    }
  };
  
    


  {/*const login = (e) => {
    e.preventDefault();
     if (loginDetails.email == '') {
      setvalid((state) => ({
        ...state,
        error: true,
         message: 'email field cannot be blank'
       }));

      setTimeout(() => {
        setvalid((state) => ({
          ...state,
          error: false,
          message: ''
        }))
       }, 3000)
      return;
    } else if (loginDetails.password === ''){
      setvalid((state) => ({
        ...state,
        error: true,
         message: 'password field cannot be Blank'
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

    //   dispatch(loginThunk(loginDetails.email));

    console.log(loginDetails.email);

    {/*const email = loginDetails.email

    mutate({ loginDetails }, {
      onSuccess: (data) => {
  
          sessionStorage.setItem("token", data.token);

          updateUserRole(localStorage.getItem('userRole'));


          navigate('/dashboard/home')
        
       
      },
      onError: (error) => {
        console.log('>>>>', error);
      }
    })
    mutate
  }*/}

  
 {/*const codeVerification = (e) => {
    e.preventDefault();
    if (loginDetails.password == '') {
      setvalid((state) => ({
        ...state,
        error: true,
        message: 'Password Field cannot blank'
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
   
  
    mutate(loginDetails, {
      onSuccess: (returnData) => {
        sessionStorage.setItem("token", returnData.token);
      
        updateUserRole(localStorage.getItem('userRole'));
       
        navigate('/dashboard/home');
        
      },
      onError: (error) => {
        console.log(error);
      }
    })

    // dispatch(verifyLogin(loginDetails));
    mutate

  }*/}

  const allFieldsFilled = Object.values(loginDetails).every(value => value !== "");

  return (
    <UserProvider>
     <section className="flex flex-col lg:flex-row w-[98%] gap-10">
    
    <div className="hidden lg:block w-[fit] h-auto">
        <img src={loginAvatar} alt="product" className=" w-30%] h-[100%]"/>
      </div>

    <div  className="flex flex-col w-[70%] max-w-5xl gap-3 mx-auto mb-5">
      
      <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">
      Login to your account
      </h1>

      <div className="font-bold text-lg lg:text-left text-center">
      Don&apos;t have an account?{" "}
        <Link
          className="text-green-30 pl-2"
          to="/auth/signup"
          onClick={() => {
            dispatch(clearUser());
          }}
        >
          Sign-up here
        </Link>
      </div>

      
      {store.error && <ErrorMessage />}
      {invalid.error && <InputValidation message={invalid.message} />}

      <form className="flex flex-col gap-6" action="#" onSubmit={login}>
        <div className="flex flex-col gap-6 lg:gap-8 lg:justify-between items-center w-full">

          <div className="flex flex-col gap-4 w-full ">
            <label htmlFor="email" className="font-bold">Email</label>
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full max-w-lg" type="email" id="email" name="email" placeholder="Enter Your Email" onChange={handleChange} value={loginDetails.email} required />
          </div>

          <div className="flex flex-col gap-4 w-full ">
            <label htmlFor="password" className="font-bold">Password</label>

            <div className="flex justify-between items-center bg-transparent max-w-lg focus:outline-green-300 border border-[#C7CDD2]">
            <input className="pl-3 bg-transparent focus:outline-none p-3" 
            type={showPassword ? "text": "password"} 
            id="password" 
            name="password" 
            placeholder="Enter Your Password" 
            onChange={handleChange} 
            value={loginDetails.password} 
            required
             />

      <button
            type="button"
            className="inline pr-3 items-center"
            onClick={() => togglePasswordVisibility("password")}
          >
            {showPassword ? (
              <MdOutlineRemoveRedEye className="h-5 w-5 text-gray-400" />
            ) : (
              <IoEyeOffOutline className="h-5 w-5 text-gray-400" />
            )}
          </button>
          </div>
          </div>
         

         {/* <div className="font-bold max-w-md flex flex-col gap-5 w-full ">
            <h3>Or continue with the following options</h3>

            <SocialIcons />
  </div>*/}
        </div>
       {/* <div className="font-bold text-lg text-left">
        Forgot password? <Link className="text-green-30" to='/auth/resetpassword' onClick={() => {
          dispatch(clearUser());
        }}>Click here</Link>
      </div>*/}

       
        <div className="">
          <button className={`text-white w-full xl:w-[50%]  max-w-xl py-3 rounded-[30px] border-2 justify-center items-center inline-flex transition-colors ${allFieldsFilled ? 'bg-green-500 hover:bg-green-600' : 'bg-[#B2D5B4]'}`}
              disabled={isPending}
              type="submit">{isPending ? 'Please wait.....' : 'Login'}</button>
        </div>
      </form>

    {/*  {showVerifyOTP && (<form className="flex flex-col gap-5" onSubmit={codeVerification}>
        <div className="flex flex-col gap-6 lg:flex-row lg:gap-0 lg:justify-between items-center">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <label htmlFor="otp" className="font-bold">Verification Code</label>
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="otp" name="otp" placeholder="Enter code sent to email" onChange={handleChange} />
            </div>

            <div className="italic flex flex-col gap-3">
              <p>We just sent a code to you. It may take a minute to receive your code</p>
              <p>Haven’t recieved it? <Counter login={login} /></p>
            </div>
          </div>


        </div>*

        <div className="flex justify-between pr-3 max-w-md self-center w-full lg:self-start">
          <button type="button" className="text-white py-2 px-9 bg-black-100" onClick={() => {  navigate('/')}}>Go Back</button>
          <button className="text-white py-2 px-9 bg-green-30" type="submit" disabled={isPending} >{isPending ? 'Please wait.....' : 'Login'}</button>
        </div>
</form>)}*/}

      
      </div>
    </section>
    </UserProvider>
  );
}

export default Login;
