import { Outlet } from "react-router-dom";
import LogoHeader from "../components/WaitingList/LogoHeader";

const AuthRoot = () => {
  return (
    <>
      <LogoHeader />

      <Outlet />
    </>
  );
};

export default AuthRoot;
