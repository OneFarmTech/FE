import farmer from "../../assets/images/farmerbg.png";

const FarmersHeadline = () => (
  <section className="w-full max-w-[1500px] m-auto flex flex-col items-center gap-7 py-10 px-[4%]">
    <h1 className="font-bold text-center text-3xl md:text-5xl">Empowering <span className="text-green-30">Farmers</span> with transparency, support, growth</h1>

    <div className="w-full max-w-[1000px]">
      <img src={farmer} alt="" />
    </div>

    <p className='text-center leading-10'>Welcome to the OneFarm Farmers page, where your success and growth in agriculture are our top priorities. Join our platform and unlock a world of opportunities to expand your market reach, increase profitability, and gain access to valuable resources and support.</p>
  </section>
);

export default FarmersHeadline;
