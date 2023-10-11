import Button from "./Button";

const HomeHeadline = () => (
  <section className="flex flex-col lg:grid lg:grid-cols-2 lg:my-grid w-full max-w-[2000px] m-auto min-h-[500px]">
    <div className="px-[7%] py-10 lg:my-h1">
      <h1 className="text-5xl w-full text-center lg:text-left m-auto leading-[60px]">Empowering <span className="text-green-30">Agriculture</span> for A Sustainable Future</h1>
      <p className="leading-10 mt-7 text-center lg:text-left">Welcome to <span className="font-bold">OneFarm</span>, where we empower smallholder farmers in Nigeria by connecting them directly with retailers, ensuring fair revenue distribution.</p>
    </div>
    <div className="flex justify-center my-7 lg:my-d order-last lg:justify-start px-[7%] items-start">
      <Button linkTo="/auth/signup" clas="green" name="Get Started" />
    </div>

    <div className="h-full min-h-[24rem] w-full max-w-lg lg:max-w-full m-auto lg:my-l bg-headline bg-contain bg-no-repeat bg-center bg-green-30"></div>
  </section>
);

export default HomeHeadline;
