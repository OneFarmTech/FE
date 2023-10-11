import { Outlet } from "react-router-dom";
import DashHeader from "../components/dashboardComp/DashHeader";
import DashNav from "../components/dashboardComp/DashNav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userSlice";

const Dashboard = () => {
  const { userDetails } = useSelector((state) => (state.user));
  const [ name, setHeader ] = useState(null);
  const dispatch = useDispatch();

  const changeHeading = (title) => {
    setHeader(title);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    userDetails?.name && setHeader(`Hello ${userDetails.name}`);
  }, [userDetails])
  
  const resetHeading = () => {
    setHeader(userDetails.name == undefined ? null : `Hello ${userDetails.name}`);
  }

  return (
    <>
    <DashNav />
      <div className="2xl:pl-[16%] pt-[310px] lg:pt-[136px] relative bg-[#f9f9f9] h-screen w-full">
        <DashHeader title={name} username={userDetails.name} />
        <div className="overflow-y-auto bg-[#f9f9f9]">
        <Outlet context={[changeHeading, resetHeading]} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
