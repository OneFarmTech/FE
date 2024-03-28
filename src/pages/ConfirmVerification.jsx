import signupAvatar2 from '../assets/images/dashboard/loginAvatar2.png';
import spinner from '../assets/images/dashboard/spinner.png'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userSlice";

const ConfirmVerification = () => {
  const [loading, setLoading] = useState(true);

  {/*} const { userDetails } = useSelector((state) => (state.user));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);*/}

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Set loading to false after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row w-[90%] gap-10">
      <div className="hidden lg:block w-[fit] h-auto">
        <img src={signupAvatar2} alt="image" className=" h-[100%]"/>
      </div>

      <div className="flex flex-col w-[90%] lg:w-[50%] max-w-5xl gap-6 mx-auto mb-5">
        <h1 className="lg:text-[40px] text-xl text-left lg:text-left leading-[3.2rem] text-gray-900

font-bold
font-['Lato']
tracking-widest">
          Please hold on while we redirect you to your dashboard
        </h1>

        <div className="font-bold text-lg lg:text-left text-justify">
          <h2 >Hi User,</h2>
          <p className='font-normal text-left mb-10'>Thanks for verifying your email! <br />Your account is now active, and you&apos;ll be automatically redirected to your dashboard in a few seconds.</p>
        </div>

        {loading ? (
          <div className="w-10 mx-auto">
            <img src={spinner} alt='loading' className="animate-spin" />
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default ConfirmVerification;
