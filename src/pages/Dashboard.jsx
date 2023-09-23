import { Outlet } from "react-router-dom";
import DashHeader from "../components/dashboardComp/DashHeader";
import DashNav from "../components/dashboardComp/DashNav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/user/userSlice";

const Dashboard = () => {
  const user = useSelector((state) => (state.user.user));
  const [ name, setHeader ] = useState(user.name);
  const dispatch = useDispatch();

  const changeHeading = (title) => {
    setHeader(title);
  };

  useEffect(() => {
    dispatch(fetchUser());
    console.log(user);
  }, [dispatch, fetchUser]);
  
  const resetHeading = (title) => {
    setHeader('Hello Prince');
  }

  return (
    <>
    <DashNav />
      <div className="2xl:pl-[16%] pt-[310px] lg:pt-[136px] relative bg-[#f9f9f9] h-screen w-full">
        <DashHeader title={`Hello ${name}`} />
        <div className="overflow-y-auto bg-[#f9f9f9]">
        <Outlet context={[changeHeading, resetHeading]} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
