import passwordAvatar from '../assets/images/dashboard/loginAvatar4.png';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";
import { useState } from "react";
import InputValidation from "../components/pageChange/InputValidation";
import ErrorMessage from "../components/pageChange/ErrorMessage";
import { usePOST } from "../hooks/usePOST.hook";

const PasswordReset = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const togglePasswordVisibility = (field) => {
        if (field === "password") {
          setShowPassword((prevState) => !prevState);
        } else if (field === "confirmPassword") {
          setShowConfirmPassword((prevState) => !prevState);
        }
      };

      const [passwordDetails, setpasswordDetails] = useState({
        password: "",
        confirmPassword: "",
    });

      const [invalid, setInvalid] = useState({
        error: false,
        message: "",
      });

      const {mutate, isPending, isError, isSuccess  } = usePOST("resetpassword", false);

      const clearErrorMessage = () => {
        setTimeout(() => {
          setInvalid({
            error: false,
            message: ""
          });
        }, 3000); // Adjust the duration as needed
      };
  
      const handleSignUp = (e) => {
        e.preventDefault();
        for (const detail in passwordDetails) {
          if (passwordDetails[detail] === "") {
            setInvalid({
              error: true,
              message: detail + " Field cannot be blank"
            });
            clearErrorMessage();
            return;
          }
        }
    
        if (passwordDetails.password !== passwordDetails.confirmPassword) {
          setInvalid({
            error: true,
            message: "Passwords do not match.",
          });
          clearErrorMessage();
    
          
          return;
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        setpasswordDetails((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };


      const allFieldsFilled = Object.values(passwordDetails).every(value => value !== "");


   {/*const { userDetails } = useSelector((state) => (state.user));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
      }, [dispatch]);*/}

    return(
    <section className="flex flex-col lg:flex-row w-[98%] gap-10">
    
    <div className="hidden lg:block w-[fit] h-auto">
        <img src={passwordAvatar} alt="image" className=" h-[100%]"/>
      </div>

    <div  className="flex flex-col w-[90%] lg:w-[50%] max-w-5xl gap-6 mx-auto mb-5">
      
      <h1 className="lg:text-[40px] text-3xl text-center lg:text-left leading-[3.2rem] text-gray-900 font-bold font-['Lato'] tracking-widest">
      Reset Password
      </h1>
      <p className=" lg:text-left text-gray-900
    text-lg
    font-normal
    font-['Lato']
    leading-[35px]
    tracking-tight">
      Create a strong password to keep your account secure.
      </p>

      <form action="#"  className='flex flex-col gap-6  w-full  lg:w-[70%]'>
      <div className="flex flex-col gap-2">
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
                  value={passwordDetails.password}
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

              <div className="flex flex-col gap-2">
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
                  value={passwordDetails.confirmPassword}
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

        

                  {invalid.error && invalid.message !== "confirmPassword" && (
              <InputValidation message={invalid.message} />
            )}
              </div>

        </form>

        <button
              className={`text-white w-[100%] lg:w-[70%] py-3 rounded-[30px] border-2 justify-center items-center inline-flex transition-colors ${allFieldsFilled ? 'bg-green-500 hover:bg-green-600' : 'bg-[#B2D5B4]'}`}
              onClick={handleSignUp}
              disabled={isPending}
              type="submit"
            >
              {isPending ? "Please wait....." : "Reset Password"}
            </button>
             
      </div>
      </section>
        

    )
} 

export default PasswordReset