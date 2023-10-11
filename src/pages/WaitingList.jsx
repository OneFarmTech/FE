import { Link } from "react-router-dom";
import logo from "../assets/images/onefarm.svg";
import WaitingListForm from "../components/waitingComponents/WaitingListForm";
import Deal from "../components/waitingComponents/Deal";

const WaitingList = () => {
  return (
    <>
      <header className="flex flex-row justify-between px-[4%] py-4 items-center">
        <Link to="/" className="block w-[100px] lg:w-[150px]">
          <img src={logo} alt="Logo" />
        </Link>
      </header>

      <section className="flex flex-col mb-10">
        <h1 className="text-5xl text-center leading-[3.2rem]">Be the first to hear the news!</h1>
        <h1 className="text-3xl text-center text-green-30 leading-[3.2rem]">Join our waitlist and be the first to find out when OneFarm Tech launches!</h1>
      </section>

      <WaitingListForm />

      <Deal />
    </>
  )

};

export default WaitingList;
