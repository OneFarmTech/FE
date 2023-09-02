import { Outlet } from "react-router-dom";
import DashHeader from "../components/dashboardComp/DashHeader";
import DashNav from "../components/dashboardComp/DashNav";

const Dashboard = () => {
  return (
    <>
    <DashNav />
      <div className="2xl:pl-[16%] pt-[100px] lg:pt-0 bg-[#f9f9f9] min-h-full w-full">
        <DashHeader />

        <Outlet />
      </div>
    </>
  );
};

export default Dashboard;
