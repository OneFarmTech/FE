import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root = () => (
  <>
  
  <Header />
  <Outlet />
  </>
);

export default Root;
