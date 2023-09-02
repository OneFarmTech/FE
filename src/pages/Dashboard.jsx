import { Outlet } from "react-router-dom";
import DashHeader from "../components/dashboardComp/DashHeader";
import DashNav from "../components/dashboardComp/DashNav";

const Dashboard = () => {
  return (
    <>
    <DashNav />
      <div className="2xl:pl-[16%] pt-[310px] lg:pt-[136px] relative bg-[#f9f9f9] h-screen w-full">
        <DashHeader />
        <div className="overflow-y-auto bg-[#f9f9f9]">
        <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
