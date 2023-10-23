import Button from "../Button";
import CardTwo from "../CardTwo";
import bg1 from "../../assets/images/solutions/middle1.png";
import bg2 from "../../assets/images/solutions/middle2.png";
import bg3 from "../../assets/images/solutions/middle3.png";
import bg4 from "../../assets/images/solutions/middle4.png";
import Carousel from "./Carousel";

const MiddleDetails = () => (
  <main className="max-w-[1700px] m-auto">
    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">Benefits For Wholesalers</h2>

      <div className='flex flex-col justify-between gap-12 lg:flex-row lg:flex-wrap'>
        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg1} alt="" />
          </div>

          <CardTwo heading="Expanded Supplier Network:" details="Gain access to a diverse and reliable network of farmers offering high-quality produce" />
          <Button clas="white" name="Get Started" linkTo="/auth/signup" />
        </div>

        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg2} alt="" />
          </div>

          <CardTwo heading="Direct Farmer Connection:" details="Connect directly with farmers, eliminating intermediaries and ensuring competitive pricing." />
          <Button clas="white" name="Get Started" linkTo="/auth/signup" />
        </div>

        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg3} alt="" />
          </div>

          <CardTwo heading="Transparent Supply Chain:" details="Benefit from real-time information and visibility into the origin and quality of the products you source." />
          <Button clas="white" name="Get Started" linkTo="/auth/signup" />
        </div>

        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg4} alt="" />
          </div>

          <CardTwo heading="Market Insights:" details="Receive market insights and data analytics to make informed decisions and seize opportunities." />
          <Button clas="white" name="Get Started" linkTo="/auth/signup" />
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">Wholesalers Success Stories</h2>
      <p>Hear from Wholesalers who have already experienced the advantages of partnering with OneFarm</p>

      <Carousel />
    </section>

    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">More Benefits For Wholesalers</h2>

      <CardTwo heading="Streamline Product Sourcing and Management:" details="On OneFarm, you can efficiently source and manage your products from a diverse pool of farmers. Our user-friendly interface enables you to explore a wide range of products, negotiate prices, and easily manage your inventory. Enhance your procurement process and maintain a competitive edge in the market" />

      <CardTwo heading="Direct Connections and Efficient Transactions:" details="Experience the benefits of direct connections with farmers on OneFarm. Seamlessly negotiate deals, place orders, and process transactions through our platform. Enjoy faster and more efficient interactions, reducing complexities and maximizing your business operations." />

      <CardTwo heading="Gain Supply Chain Visibility and Insights:" details="OneFarm provides real-time supply chain information, giving you valuable insights into the origin, quality, and journey of the products you source. Leverage data analytics and market trends to make informed decisions, optimize your supply chain, and stay ahead in a competitive market." />
    </section>
  </main>
);

export default MiddleDetails;
