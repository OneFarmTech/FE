import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { clearUser} from "../redux/register/registerSlice";
import ErrorMessage from "../components/pageChange/ErrorMessage";
import InputValidation from "../components/pageChange/InputValidation";
import { usePOST } from "../hooks/usePOST.hook";
import { UserProvider } from "../components/contexts/UserContext.jsx";
import axios from 'axios';
import loginAvatar from '../assets/images/dashboard/loginAvatar3.png'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";






const Login = () => {
  const navigate = useNavigate();
  const { mutate, isPending, isError, isSuccess } = usePOST('login', false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      
      try {
        // Send login request to obtain token
        const response = await axios.post(import.meta.env.VITE_API_URL + 'login', loginDetails, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        // Extract token from response
        const token = response.data.token;
        
        // Store token in session storage
        sessionStorage.setItem("token", token);
        
         // Redirect user based on role
      navigateToDashboard(token);

      } catch (error) {
        console.error("Error logging in:", error);
        setvalid((state) => ({
          ...state,
          error: true,
          message: 'Something failed, try again'
        }));
    
        setTimeout(() => {
          setvalid((state) => ({
            ...state,
            error: false,
            message: ''
          }))
        }, 3000);
      }finally {
        setLoading(false); // Set loading to false after login process finishes
      }
    };

    const navigateToDashboard = async (token) => {
      try {
        // Fetch user profile using the obtained token
        const profileResponse = await axios.get(import.meta.env.VITE_API_URL + 'profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        // Extract user role from profile response
        const userRole = profileResponse.data.data.roles[0];
        console.log(userRole);
  
        // Redirect user based on role
        if (userRole === 'retailer') {
          navigate('/dashboard/retailmarketplace');
        } else if (userRole === 'farmer') {
          navigate('/dashboard/home');
        } else {
          console.error("Unknown user role:", userRole);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    

  const allFieldsFilled = Object.values(loginDetails).every(value => value !== "");

  return (
    <UserProvider>
     <section className="flex flex-col lg:flex-row w-[98%] gap-10">
    
    <div className="hidden lg:block w-[fit] h-auto">
        <img src={loginAvatar} alt="product" className=" w-30%] h-[100%]"/>
      </div>

    <div  className="flex flex-col w-[70%] max-w-5xl gap-3 mx-auto mb-5">
      
      <h1 className="md:text-5xl text-xl text-center lg:text-left leading-[2.2rem] lg:leading-[3.2rem]">
      Login to your account
      </h1>

      <div className="font-bold text-sm md:text-lg lg:text-left text-center">
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
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-2 w-full max-w-lg" type="email" id="email" name="email" placeholder="Enter Your Email" onChange={handleChange} value={loginDetails.email} required />
          </div>

          <div className="flex flex-col gap-4 w-full ">
            <label htmlFor="password" className="font-bold">Password</label>

            <div className="flex justify-between items-center bg-transparent max-w-lg focus:outline-green-300 border border-[#C7CDD2]">
            <input className="pl-2 bg-transparent focus:outline-none py-2" 
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
            className="inline pr-3  items-center"
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
          <button className={`text-white w-full lg:w-[full] max-w-lg py-3 rounded-[30px] border-2 justify-center items-center inline-flex transition-colors ${allFieldsFilled ? 'bg-green-500 hover:bg-green-600' : 'bg-[#B2D5B4]'}`}
              disabled={isPending}
              type="submit">{loading ? 'Login in.....' : 'Login'}</button>
        </div>
      </form>

      
      </div>
    </section>
    </UserProvider>
  );
}

export default Login;
