import aboutbg from '../assets/images/aboutbg.png';

const ABoutHeadline = () => (
  <section className="w-full max-w-[1500px] m-auto flex flex-col items-center gap-7 py-10 px-[4%]">
    <h1 className="font-bold text-center text-3xl md:text-5xl">We Are Changing The <span className="text-green-30">Agriculture</span> Industry</h1>

    <div className="w-full max-w-[1000px]">
      <img src={aboutbg} alt="" />
    </div>

    <p className='text-center leading-10'>Welcome to OneFarm, where we are passionate about empowering smallholder farmers and revolutionizing the agricultural supply chain.</p>
  </section>
);

export default ABoutHeadline;
