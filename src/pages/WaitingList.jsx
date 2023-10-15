import { Link } from "react-router-dom";
import LogoHeader from "../components/WaitingList/LogoHeader";
import WaitingHeadline from "../components/WaitingList/WaitingHeadline";
import Footer from "../components/Footer";

const WaitingList = () => {
  return (
    <>
      <div className="relative h-screen">
        <LogoHeader />
        <WaitingHeadline />
      </div>
      <section className="flex justify-center items-center p-5 bg-green-30">
        <Link className="bg-white rounded-md font-bold text-xl text-green-30 py-4 px-20">View Available Products</Link>
      </section>
      <Footer />
    </>
  )
};

export default WaitingList;
