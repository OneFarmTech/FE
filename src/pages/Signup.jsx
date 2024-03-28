import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import signupImage from '../assets/images/dashboard/loginAvatar1.png'
import { clearUser, signupThunk } from "../redux/register/registerSlice";
import { useDispatch, useSelector } from "react-redux"
import InputValidation from "../components/pageChange/InputValidation";
import ErrorMessage from "../components/pageChange/ErrorMessage";
import { usePOST } from "../hooks/usePOST.hook";
import { UserProvider, useUser } from "../components/contexts/UserContext";
import '../pages/VerifyEmail'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const Signup = () => {
  const { updateUserRole } = useUser();
  const navigate = useNavigate();
  const register = useSelector((state) => state.register);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === "password") {
      setShowPassword((prevState) => !prevState);
    } else if (field === "confirmPassword") {
      setShowConfirmPassword((prevState) => !prevState);
    }
  };
  
  const [signupDetails, setSignupDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    roles: "",
  });

  const [invalid, setInvalid] = useState({
    error: false,
    message: "",
  });

  const {mutate, isPending, isError, isSuccess  } = usePOST("register", false);


  const clearErrorMessage = () => {
    setTimeout(() => {
      setInvalid({
        error: false,
        message: ""
      });
    }, 3000); 
  };

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setSignupDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  const handleSignUp = (e) => {
    e.preventDefault();
    
    for (const detail in signupDetails) {
      if (signupDetails[detail] === "") {
        setInvalid({
          error: true,
          message: detail + " Field cannot be blank"
        });
        clearErrorMessage();
        return;
      }
    }

    if (signupDetails.password !== signupDetails.confirmPassword) {
      setInvalid({
        error: true,
        message: "Passwords do not match.",
      });
      clearErrorMessage();

      
      return;
    }

    mutate(signupDetails, {
      onSuccess: (returnedData) => {
        console.log('>>>', returnedData);
  

        console.log('>>>', signupDetails.roles[0]);

        Swal.fire({
          title: 'GREAT',
          text: `You have successfully Registered on One-Farm, click okay to login to your dashboard`,
          imageUrl: '/public/sweetcheck.png',
          imageHeight: 200,
          imageWidth: 200,
          imageAlt: 'success Icon',
          showCloseButton: false,
          allowOutsideClick: false,
          focusConfirm: true,
          confirmButtonText: 'Okay',
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/auth/login');
          }
        });
        

        {/*navigate('/dashboard/home');*/}

        const userRole = signupDetails.roles[0];
        localStorage.setItem('userRole', userRole);
    

        updateUserRole(signupDetails.roles[0]);
        
        
      },
      onError: (error) => {
        if(error.error === "User already exists. "){
          setInvalid({
          error: true,
          message: "User already exists. Please login instead."
        });
        clearErrorMessage();
        // Redirect to login page after 3 seconds
        setTimeout(() => {
          navigate('/auth/login');
        }, 3000);
      }else if(error.error  === "User registration failed") {
        setInvalid({
          error: true,
          message: "User registration failed due to internal serval error, Please try again."
        });
        clearErrorMessage();
      }
        console.log(error);
      },
    });
  };

  const allFieldsFilled = Object.values(signupDetails).every(value => value !== "");

  return (
    <UserProvider>
      <section className="flex flex-col lg:flex-row w-[100%] gap-10">
    
      <div className="hidden lg:block w-[fit] h-auto">
          <img src={signupImage} alt="product" className=" w-20%] h-[100%]"/>
        </div>

      <div  className="flex flex-col w-[70%] max-w-5xl gap-3 mx-auto mb-5">
        
        <h1 className="text-5xl text-center lg:text-left leading-[3.2rem]">
          Sign Up To Create An Account
        </h1>

        <div className="font-bold text-lg lg:text-left text-center">
          Already have an account?{" "}
          <Link
            className="text-green-30 pl-2"
            to="/auth/login"
            onClick={() => {
              dispatch(clearUser());
            }}
          >
            Log In Here
          </Link>
        </div>


        
       {/* <ChangePage
          page1={register.response == null}
          firstTitle="Personal Details"
          secTitle="Verification"
        />*/}

        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-2 lg:justify-between items-center">
            <div className="flex flex-col gap-6 w-full lg:w-[70%]">
              <div className="flex flex-col gap-4">
                <label htmlFor="firstname" className="font-bold">
                 First Name
                </label>
                <input
                  onChange={handleChange}
                  className="pl-3 bg-transparent border border-[#C7CDD2] p-3"
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Enter Your First Name"
                  value={signupDetails.firstname}
                  required
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="lastname" className="font-bold">
                 Last Name
                </label>
                <input
                  onChange={handleChange}
                  className="pl-3 bg-transparent border border-[#C7CDD2] p-3"
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Enter Your Last Name"
                  value={signupDetails.lastname}
                  required
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="phone" className="font-bold">
                  Phone Number
                </label>
                <input
                  onChange={handleChange}
                  className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  value={signupDetails.phone}
                  required
                />
              </div>

              <div className="flex flex-col gap-4">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  onChange={handleChange}
                  className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  value={signupDetails.email}
                  required
                />
              </div>

              <div className="flex flex-col gap-4">
        <label htmlFor="roles" className="font-bold">Role</label>
        <select onChange={handleChange} className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-[70%]" id="roles" name="roles" value={signupDetails.roles} required >
        <option value=""  disabled selected>Select your Role</option>
        <option value="retailer">Buyer</option>
          <option value="farmer">Farmer</option>
          
        </select>
      </div>
      <div className="flex flex-col gap-4">
                <label htmlFor="password" className="font-bold">
                  Password
                </label>
                <div className="flex justify-between items-center bg-transparent focus:outline-green-300 border border-[#C7CDD2]">
                <input
                  onChange={handleChange}
                  className="pl-3 bg-transparent focus:outline-none p-3 lg:flex-[70%]"
                  type={showPassword ? "text": "password"}
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={signupDetails.password}
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

              <div className="flex flex-col gap-4">
                <label htmlFor="confirmPassword" className="font-bold">
                  Confirm Password
                </label>
                <div className="flex justify-between items-center bg-transparent border border-[#C7CDD2]">
                <input
                  onChange={handleChange}
                  className="pl-3 bg-transparent focus:outline-none p-3 lg:flex-[70%]"
                  type={showConfirmPassword ? "text": "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={signupDetails.confirmPassword}
                  required
                />

      <button
            type="button"
            className="inline pr-3 items-center"
            onClick={() => togglePasswordVisibility("confirmPassword")}
          >
            {showConfirmPassword ? (
              <MdOutlineRemoveRedEye className="h-5 w-5 text-gray-400" />
            ) : (
              <IoEyeOffOutline className="h-5 w-5 text-gray-400" />
            )}
          </button>
          </div>


                  {invalid.error && invalid.message === "confirmPassword" && (
          <InputValidation message={invalid.message} />
        )}

        {register.error && <ErrorMessage />}

                  {invalid.error && invalid.message !== "confirmPassword" && (
              <InputValidation message={invalid.message} />
            )}
              </div>
            </div>
          </div>

          <div className=" ">
           {/* <Link
              to="/"
              className="flex items-center text-white py-2 px-5 lg:px-9 bg-black-100 lg:block"
            >
              Go Back
            </Link>*/}
            <button
              className={`text-white w-[100%] lg:w-[70%] py-3 rounded-[30px] border-2 justify-center items-center inline-flex transition-colors ${allFieldsFilled ? 'bg-green-500 hover:bg-green-600' : 'bg-[#B2D5B4]'}`}
              type="submit"
              onClick={handleSignUp}
              disabled={
                isPending ||
                signupDetails.firstname == '' ||
                signupDetails.lastname == '' ||
                signupDetails.phone == '' ||
                signupDetails.email == '' ||
                signupDetails.password == '' ||
                signupDetails.confirmPassword == '' ||
                signupDetails.roles == ''
              
                }
              
            >
              {isPending ? "Please wait....." : "Create Account"}
            </button>
          </div>
        </form>

        </div>
      </section>
    </UserProvider>
  );
};

export default Signup;
