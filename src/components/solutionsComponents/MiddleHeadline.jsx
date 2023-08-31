import middle from "../../assets/images/middlebg.png";

const MiddleHeadline = () => (
  <section className="w-full max-w-[1500px] m-auto flex flex-col items-center gap-7 py-10 px-[4%]">
    <h1 className="font-bold text-center text-3xl md:text-5xl">Connecting <span className="text-orange-10">Wholesalers</span> to farmers and retailers, unlocking opportunities.</h1>

    <div className="w-full max-w-[1000px]">
      <img src={middle} alt="" />
    </div>

    <p className='text-center leading-10'>Welcome to the OneFarm Wholesalers page, where we connect you with a network of farmers and retailers for mutually beneficial partnerships. Join our platform and unlock new opportunities to streamline your supply chain, increase efficiency, and maximize your business growth.</p>
  </section>
);

export default MiddleHeadline;
