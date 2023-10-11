import Button from "../Button";
import CardTwo from "../CardTwo";
import bg1 from "../../assets/images/solutions/retail1.png";
import bg2 from "../../assets/images/solutions/retail2.png";
import bg3 from "../../assets/images/solutions/retail3.png";
import bg4 from "../../assets/images/solutions/retail4.png";
import Carousel from "./Carousel";

const RetailDetails = () => (
  <main className="max-w-[1700px] m-auto">
    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">Benefits For Retailers</h2>

      <div className='flex flex-col justify-between gap-12 lg:flex-row lg:flex-wrap'>
        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg1} alt="" />
          </div>

          <CardTwo heading="Traceability and Quality Assurance:" details="Gain access to detailed information about the origin and quality of the products you source, enabling you to provide transparency and build trust." />
          <Button clas="white" name="Get Started" linkTo="/auth/signup" />
        </div>

        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg2} alt="" />
          </div>

          <CardTwo heading="Diverse Product Range:" details="Explore a wide variety of products from different farmers, allowing you to meet the diverse needs and preferences of your customers." />
          <Button clas="white" name="Get Started" linkTo="/auth/signup" />
        </div>

        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg3} alt="" />
          </div>

          <CardTwo heading="Streamlined Ordering Process:" details="Simplify your procurement process by accessing a centralized platform for sourcing, placing orders, and managing transactions." />
          <Button clas="white" name="Get Started" linkTo="/auth/signup" />
        </div>

        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg4} alt="" />
          </div>

          <CardTwo heading="Market Insights:" details="Receive market insights and trends to stay ahead of the competition and make informed decisions" />
          <Button clas="white" name="Get Started" linkTo="/auth/signup" />
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">Retailer Success Stories</h2>
      <p>Hear from retailers who have already experienced the advantages of sourcing through OneFarm</p>

      <Carousel />
    </section>

    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">More Benefits For Retailers</h2>

      <CardTwo heading="Simplify Product Sourcing and Management:" details="On OneFarm, you can easily source and manage your product inventory. Explore a diverse range of fresh produce directly from farmers, place orders effortlessly, and manage your stock efficiently. Simplify your sourcing process and deliver the best quality to your customers" />

      <CardTwo heading="Direct Connections and Seamless Transactions:" details="Experience the benefits of direct connections with farmers on OneFarm. Connect, communicate, and transact directly with the producers of your products. Enjoy streamlined ordering processes, secure transactions, and build strong relationships with the farmers behind the produce." />

      <CardTwo heading="Ensure Supply Chain Transparency and Traceability:" details='OneFarm provides transparency and traceability in your supply chain. Gain access to detailed information about the origin, farming practices, and certifications of the products you source. Ensure the highest standards of quality and build trust with your customers.' />
    </section>
  </main>
);

export default RetailDetails;
