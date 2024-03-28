import passwordAvatar from '../assets/images/dashboard/loginAvatar4.png';


const ResetPasswordLink = () => {

   {/*const { userDetails } = useSelector((state) => (state.user));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
      }, [dispatch]);*/}

    return(
    <section className="flex flex-col lg:flex-row w-[90%] gap-10">
    
    <div className="hidden lg:block w-[fit] h-auto">
        <img src={passwordAvatar} alt="image" className=" h-[100%]"/>
      </div>

    <div  className="flex flex-col w-[90%] lg:w-[50%] max-w-5xl gap-10 mx-auto mb-5">
      
      <h1 className="lg:text-[40px] text-3xl text-left lg:text-left leading-[3.2rem]  text-gray-900 font-bold font-['Lato'] tracking-widest">
       Forgot Password
      </h1>

      <div className="font-bold lg:text-left flex flex-col gap-2 text-justify">
        <p className="text-gray-900 text-lg font-normal font-['Lato']  tracking-tight mb-6 leading-[35px]">
        We&apos;ve sent a secure link to your email address. Just click the link in the email to create a new, strong password. 
        </p>

        <h2 className="text-gray-900 text-lg font-bold font-['Lato']  tracking-tight  leading-[35px]">Didn&apos;t see the email?</h2>

        <p className="text-gray-900 text-lg font-normal font-['Lato']  tracking-tight  leading-[35px]">
        No worries, it happens! Click the button below to request a new verification link.
        </p>

        </div>



        <button
              className="text-white w-full py-3 rounded-[30px] border-2 justify-center items-center inline-flex bg-green-600">
                Resend Password Reset Link
              </button>
             
      </div>
      </section>
        

    )
}; 

export default ResetPasswordLink