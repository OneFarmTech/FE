import retail from "../../assets/images/retailbg.png";

const RetailsHeadline = () => (
  <section className="w-full max-w-[1500px] m-auto flex flex-col items-center gap-7 py-10 px-[4%]">
    <h1 className="font-bold text-center text-3xl md:text-5xl">Connecting <span className="text-green-30">Retailers</span> to quality produce. Unlock opportunities.</h1>

    <div className="w-full max-w-[1000px]">
      <img src={retail} alt="" />
    </div>

    <p className='text-center leading'>Welcome to the OneFarm Retailers page, where we connect you with a diverse network of farmers and their high-quality produce. Join our platform and unlock a world of opportunities to source fresh products directly from farmers, ensure traceability, and meet the demands of your customers.</p>
  </section>
);

export default RetailsHeadline;
