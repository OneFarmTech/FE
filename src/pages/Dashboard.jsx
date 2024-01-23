import { Outlet } from "react-router-dom";
import DashHeader from "../components/dashboardComp/DashHeader";
import DashNav from "../components/dashboardComp/DashNav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userSlice";
import Success from "../components/popUps/Success";
import tick from "../assets/images/dashboard/tick.svg";

const Dashboard = () => {
  const { userDetails } = useSelector((state) => (state.user));
  const [ name, setHeader ] = useState(null);
  const [ permissions, setPermissions ] = useState(null);
  const dispatch = useDispatch();
  const [success, setSuccess] = useState(false);

  const closeSuccess = () => {
    setSuccess(false)
  }
  const openSuccess = () => {
    setSuccess(true)
  }

  const changeHeading = (title) => {
    setHeader(title);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    userDetails?.name && setHeader(`Hello ${userDetails.name}`);
    // console.log(userDetails.roles)
    sessionStorage.setItem('role', userDetails.roles);
    setPermissions(userDetails.permissions);
  }, [userDetails])
  
  const resetHeading = () => {
    setHeader(userDetails.name == undefined ? null : `Hello ${userDetails.name}`);

  }

  return (
    <>
    <DashNav permissions={permissions ?  permissions : ""} />
      <div className="2xl:pl-[16%] pt-[310px] lg:pt-[136px] relative bg-[#f9f9f9] h-screen w-full">
        <DashHeader title={name} username={userDetails.name} avatar={userDetails.image} />
        <div className="overflow-y-auto bg-[#f9f9f9]">
        <Outlet context={[changeHeading, resetHeading]} />
        </div>
      </div>

    {success && <Success closeSuccess={closeSuccess} message="You have successfully uploaded your product “yam” and you can view it in your product section" image={tick} />}
    </>
  );
};

export default Dashboard;
