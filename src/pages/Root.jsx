import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Root = () => (
  <div className="body">
  
  <Header />
  <Outlet />
  <Footer />
  </div>
);

export default Root;
