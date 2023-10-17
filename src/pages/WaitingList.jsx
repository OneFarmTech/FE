import { Link } from "react-router-dom";
import LogoHeader from "../components/WaitingList/LogoHeader";
import WaitingHeadline from "../components/WaitingList/WaitingHeadline";
import Footer from "../components/Footer";
import SuccessPop from "../components/WaitingList/SuccessPop";
import { useState } from "react";

const WaitingList = () => {
  const [pop, setPop] = useState(false);

  const openSuccess = () => {
    setPop(true);
    document.body.classList.toggle('overflow-hidden');
  }

  const closeSuccess = () => {
    setPop(false);
    document.body.classList.toggle('overflow-hidden');
  }

  return (
    <>
      <div className="relative h-screen">
        <LogoHeader />
        <WaitingHeadline openSuccess={openSuccess} />
      </div>
      <section className="flex justify-center items-center p-5 bg-green-30">
        <Link className="bg-white rounded-md font-bold text-xl text-green-30 py-4 px-20">View Available Products</Link>
      </section>
      <Footer />
      {pop && <SuccessPop closeSuccess={closeSuccess} />}
    </>
  )
};

export default WaitingList;
