import signupAvatar2 from '../assets/images/dashboard/loginAvatar2.png';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userSlice";

const VerifyEmail = () => {

   {/*} const { userDetails } = useSelector((state) => (state.user));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUser());
      }, [dispatch]);*/}

    return(
    <section className="flex flex-col lg:flex-row w-[90%] gap-10">
    
    <div className="hidden lg:block w-[fit] h-auto">
        <img src={signupAvatar2} alt="image" className=" w-20%] h-[100%]"/>
      </div>

    <div  className="flex flex-col w-[50%] max-w-5xl gap-6 mx-auto mb-5">
      
      <h1 className="lg:text-5xl text-3xl text-center lg:text-left leading-[3.2rem]">
        Verify Your Email
      </h1>

      <div className="font-bold text-lg lg:text-left text-justify">
        <h2>Hi User,</h2>
        <p className='font-normal mb-10'>We&apos;re thrilled to welcome you to the Onefarm Tech community! To access all the amazing features waiting for you,
             simply verify your email address. We just sent a verification link straight to your inbox. (check your spam folder just in case).</p>

        <h2>Having trouble finding the email?</h2>
        <p className='font-normal'>No worries! Simply click the button below to request a new verification link.</p>
        </div>

        <button
              className="text-white w-[100%] py-3 rounded-[30px] border-2 justify-center items-center inline-flex bg-green-600">
                Request New Verification Link
              </button>
             
      </div>
      </section>
        

    )
} 

export default VerifyEmail