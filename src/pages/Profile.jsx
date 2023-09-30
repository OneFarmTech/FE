import { useEffect, useRef, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import profilePic from '../assets/images/dashboard/profile.svg';
import edit from '../assets/images/dashboard/edit.svg';
import image from '../assets/images/dashboard/img.svg'
import confirmPass, { checkPass } from "../js/confirmPass";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userSlice";
import ErrorMessage from "../components/pageChange/ErrorMessage";

const Profile = () => {
  const { userDetails, error } = useSelector((state) => (state.user));
  const imageRef = useRef(null);
  const idRef = useRef(null);
  const [changeHeading, resetHeading] = useOutletContext();
  const [profileData, setProfileData] = useState({
    name: '',
    photo: profilePic,
    email: '',
    phone: '',
    city: '',
    state: '',
    busAddress: ''
  });

  const [identification, setId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    setProfileData((state) => ({
      ...state, ...userDetails
    }))
  }, [userDetails])

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

  const clickIdRedirect = (e) => {
    e.preventDefault();
    idRef.current?.click();
  }
  const handleIdChange = (e) => {
    let newfile = URL.createObjectURL(e.currentTarget.files[0]);
    setId(newfile)
  }

  useEffect(() => {
    changeHeading('Profile');
    return () => {
      resetHeading();
    }
  });

  return (
    <main className="px-[4%] py-4 w-full h-full">
      { error && <ErrorMessage /> }
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
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" required id="name" name="name" placeholder="Full Name" onChange={handleProfileChange} value={profileData.name} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input type="text" name="dob" id="dob" placeholder="Date of Birth" required className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" onChange={handleProfileChange} value={profileData.dob} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
                <select name="gender" required id="gender" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1">
                  <option disabled selected hidden>Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
          </div>          
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">Contact Information</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" required type="email" id="email" name="email" placeholder="Email Address" onChange={handleProfileChange} value={profileData.email} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" required type="text" id="phone" name="phone" placeholder="Phone Number" onChange={handleProfileChange} value={profileData.phone} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" required type="text" id="city" name="city" placeholder="City" onChange={handleProfileChange} value={profileData.city} />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" required type="text" id="state" name="state" placeholder="State" onChange={handleProfileChange} value={profileData.state} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" required type="text" id="busAddress" name="busAddress" placeholder="Business Address" onChange={handleProfileChange} value={profileData.busAddress} />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <select name="role" required id="role" className="pl-3 text-ellipsis bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" onChange={handleProfileChange}>
                <option selected disabled hidden>Are you a Farmer or Retailer?</option>
                <option value="farmer">Farmer</option>
                <option value="wholesaler">Wholesaler</option>
                <option value="retailer">Retailer</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="font-bold text-xl">Contact Information</h2>

          <div className="flex-1 flex flex-col gap-5">
            <label className="font-bold">Choose document type</label>

            <ul className="flex gap-4 text-white">
              <li className={`bg-green-30 rounded-3xl p-3 cursor-pointer`}>National ID Card</li>
              <li className={`bg-green-30 rounded-3xl p-3 cursor-pointer`}>Driver’s License</li>
              <li className={`bg-green-30 rounded-3xl p-3 cursor-pointer`}>International Passport</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold">Upload ID proof</h3>
            <p>Please provide a clear and legible picture of your valid identification document. Ensure that all details are visible and well-lit for successful verification.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 my-5 md:items-center">
            <div className="flex gap-6">
              <div className="bg-white cursor-pointer rounded-2xl p-4 px-7 w-32 shadow-md" onClick={clickIdRedirect}>
                <img src={image} alt="" />
                <p className="text-center">{identification ? identification.name : "Click to add image"}</p>
              </div>
            </div>
            <input type="file" name="id" hidden ref={idRef} onChange={handleIdChange} accept="image/*" />
            
            <div className="flex flex-col gap-4 flex-1">
              <label htmlFor="identity" className="font-bold">ID Number:</label>
              <input type="text" name="identity" id="identity" placeholder="Enter Your ID Number" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 lg:flex-1" />
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-5">
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
        </div> */}

        {/* <div className="flex flex-col gap-5">
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
        </div> */}

        <div className="flex flex-col md:flex-row gap-6 justify-between w-full pt-6">
          <Link to='/dashboard/home' className="flex justify-center items-center py-2 px-16 bg-white border border-1 border-red-50 text-red-50 lg:block">Go Back</Link>
          <button className="text-white px-16 bg-green-30 py-3" type="submit">Submit</button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
