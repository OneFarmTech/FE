import rocket from "../../assets/images/waitinglist/rocket.svg"
import leaf from "../../assets/images/waitinglist/leaf.svg"
import phones from "../../assets/images/waitinglist/phones.svg"

const WaitingHeadline = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-24 lg:gap-7 pt-40 lg:pt-6 items-center px-[4%] py-6 bg-waitingbg bg-no-repeat bg-cover bg-center min-h-screen absolute top-0 w-full">
      <div className="flex flex-col gap-16 items-center lg:w-[50%]">
        <div className="flex flex-col gap-4 lg:gap-8 tracking-wide text-center">
          <h1 className="text-3xl font-bold flex gap-2 items-center md:text-6xl">
            <span className="w-14 inline-block">
              <img src={leaf} alt="" />
            </span>
            <span>Join The Waitlist</span>
            <span className="inline-block w-14">
              <img src={rocket} alt="" />
            </span>
          </h1>
          <p>Get exclusive early access, and discounts</p>
        </div>

        <form className="flex gap-4 w-full max-w-2xl">
          <input className="flex-1 pl-3 bg-transparent border border-[#374E61] rounded-sm p-3" type="text" name="email" placeholder="Enter your email/phone number" />
          <button className="text-white py-2 px-12 bg-green-30 rounded-sm" type="submit">Submit</button>
        </form>
      </div>

      <div className="lg:w-[45%]">
        <img src={phones} alt="" />
      </div>
    </section>
  )
};

export default WaitingHeadline;