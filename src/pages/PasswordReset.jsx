import passwordAvatar from '../assets/images/dashboard/loginAvatar4.png';


const PasswordReset = () => {

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
      
      <h1 className="lg:text-[40px] text-3xl text-center lg:text-left leading-[3.2rem]  text-gray-900 font-bold font-['Lato'] tracking-widest">
       Forgot Password
      </h1>

      <div className="font-bold text-lg lg:text-left text-justify">
        <h2 className="text-gray-900 text-lg font-normal font-['Lato']  tracking-tight">
            We will help you access your account again in a few steps. 
        </h2>

        </div>

        <form action="#">
            <label htmlFor="email"  className="text-gray-900
        text-base
        font-normal
        font-['Lato'">
            Enter your registered email address
            </label>

            <div className=''>

        <input 
        className="lg:w-[70%] p-3 border border-[#C7CDD2] w-full bg-white rounded-[15.12px]"
        type='email' 
        name='email' 
        id='email' 
        placeholder='Enter email' 
        />
        </div>
        </form>

        <button
              className="text-white w-full lg:w-[70%] py-3 rounded-[30px] border-2 justify-center items-center inline-flex bg-green-600">
                Send Password Reset Link
              </button>
             
      </div>
      </section>
        

    )
} 

export default PasswordReset