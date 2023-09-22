import { useEffect, useRef, useState } from "react";
import { useOutletContext } from "react-router-dom";
import profilePic from '../assets/images/dashboard/profile.svg';
import edit from '../assets/images/dashboard/edit.svg';

const Profile = () => {
  const imageRef = useRef(null);
  const [changeHeading, resetHeading] = useOutletContext();
  const [profileData, setProfileData] = useState({
    photo: profilePic,
  });

  const changeImage = (e) => {
    // if (e.currentTarget.files) {
    //   setImage((state) => ({...state, photo: e.currentTarget.files[0]}));
    // }

    console.log(e.currentTarget.files[0]);
    let newfile = URL.createObjectURL(e.currentTarget.files[0]);
    setProfileData((state) => ({...state, photo: newfile}))
  }

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
      <form action="#" className="flex flex-col gap-7">
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
        
      </form>
    </main>
  );
};

export default Profile;
