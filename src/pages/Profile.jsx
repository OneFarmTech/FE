import { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import profilePic from '../assets/images/dashboard/profile.svg';
import edit from '../assets/images/dashboard/edit.svg';
import confirmPass, { checkPass } from "../js/confirmPass";

const Profile = () => {
  const imageRef = useRef(null);
  const [changeHeading, resetHeading] = useOutletContext();
  const [profileData, setProfileData] = useState({
    fname: '',
    lname: '',
    dob: '',
    photo: profilePic,
    email: '',
    phone: '',
    city: '',
    state: '',
    busAddress: ''
  });

  const [passChange, setPass] = useState({
    opass: '',
    npass: '',
  });

  const changeImage = (e) => {
    let newfile = URL.createObjectURL(e.currentTarget.files[0]);
    setProfileData((state) => ({...state, photo: newfile}))
  }

  const handleProfileChange = (e) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    setProfileData((state) => ({...state, [newKey]: val}));
  };

  const handlePassChange = (e) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    setPass((state) => ({...state, [newKey]: val}));
  };

  const clickRedirect = (e) => {
    e.preventDefault();
    imageRef.current?.click();
  }

  useEffect(() => {
    changeHeading('Profile');
    return () => {
      resetHeading();
    }
  });

  return (
    <main className="px-[4%] py-4 w-full h-full">
      <form action="#" className="flex flex-col gap-7 p-5">
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">Profile Picture</h2>
          <div className="p-4 rounded-xl shadow-lg bg-white relative w-fit">
            <div className="rounded-full w-48 h-48 overflow-hidden">
              <input type="file" name="image" hidden ref={imageRef} onChange={changeImage} accept="image/*" />
              <img src={profileData.photo} alt="Profile photo" />
            </div>

            <div onClick={clickRedirect} className="w-6 absolute bottom-4 right-4 cursor-pointer">
              <img src={edit} alt="edit icon" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">Basic Information</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="fname" name="fname" placeholder="First Name" onChange={handleProfileChange} value={profileData.fname} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="lname" name="lname" placeholder="Last Name" onChange={handleProfileChange} value={profileData.lname} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input type="text" name="dob" id="dob" placeholder="Date of Birth" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" onChange={handleProfileChange} value={profileData.dob} />
            </div>
          </div>          
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">Contact Information</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="email" id="email" name="email" placeholder="Email Address" onChange={handleProfileChange} value={profileData.email} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="phone" name="phone" placeholder="Phone Number" onChange={handleProfileChange} value={profileData.phone} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="city" name="city" placeholder="City" onChange={handleProfileChange} value={profileData.city} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="state" name="state" placeholder="State" onChange={handleProfileChange} value={profileData.state} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="busAddress" name="busAddress" placeholder="Business Address" onChange={handleProfileChange} value={profileData.busAddress} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <select name="role" id="role" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" onChange={handleProfileChange}>
                <option selected disabled hidden>Are you a Farmer or Retailer?</option>
                <option value="male">Farmer</option>
                <option value="female">Retailer</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">Change Password</h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="opass" name="opass" placeholder="Old Password" onChange={handlePassChange} value={passChange.opass} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="npass" name="npass" placeholder="New Password" onChange={handlePassChange} value={passChange.npass} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input className={`${checkPass ? 'outline-green-30 focus:outline-green-30' : 'outline-red-50 focus:outline-red-50'} outline outline-1 pl-3 bg-transparent border border-[#C7CDD2] p-3`} type="text" id="cpass" name="cpass" placeholder="Confirm Password" onChange={(e) => {
                confirmPass(e, passChange.npass)
              }} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">Preferences</h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <select name="role" id="role" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" onChange={handleProfileChange}>
                <option selected disabled hidden>Choose Language</option>
                <option value="male">English</option>
              </select>
            </div>

            <div className="flex gap-6 items-center p-3 pl-6 flex-1 shadow-md">
              <input type="checkbox" name="mailNotice" id="mailNotice" className="accent-green-30 text-white border-green-30 h-6 w-6 focus:outline-none" />
              <label htmlFor="mailNotice">Email Notifications</label>
            </div>

            <div className="flex gap-6 items-center p-3 pl-6 flex-1 shadow-md">
              <input type="checkbox" name="phoneNotice" id="phoneNotice" className="accent-green-30 text-white border-green-30 h-6 w-6 focus:outline-none" />
              <label htmlFor="phoneNotice">Phone Notifications</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-between w-full pt-6">
          <Link to='/dashboard/home' className="flex justify-center items-center py-2 px-16 bg-white border border-1 border-red-50 text-red-50 lg:block">Go Back</Link>
          <button className="text-white px-16 bg-green-30 py-3" type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
