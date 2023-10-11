import Button from "../Button";
import CardTwo from "../CardTwo";
import bg1 from "../../assets/images/solutions/farm1.png";
import bg2 from "../../assets/images/solutions/farm2.png";
import bg3 from "../../assets/images/solutions/farm3.png";
import bg4 from "../../assets/images/solutions/farm4.png";
import Carousel from "./Carousel";

const FarmersDetails = () => (
  <main className="max-w-[1700px] m-auto">
    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">Benefits For Farmers</h2>

      <div className='flex flex-col justify-between gap-12 lg:flex-row lg:flex-wrap'>
        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg1} alt="" />
          </div>

          <CardTwo heading="Increased Market Access:" details="Expand your reach and connect directly with retailers, eliminating intermediaries." />
          <Button linkTo="/auth/signup" clas="white" name="Get Started" />
        </div>

        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg2} alt="" />
          </div>

          <CardTwo heading="Reduced Transportation Costs:" details="Save on transportation expenses with optimized supply chain logistics." />
          <Button linkTo="/auth/signup" clas="white" name="Get Started" />
        </div>

        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg3} alt="" />
          </div>

          <CardTwo heading="Improved Storage Facilities:" details="Access better storage facilities to preserve the quality of your produce." />
          <Button linkTo="/auth/signup" clas="white" name="Get Started" />
        </div>

        <div className='flex-[45%] items-start flex flex-col gap-6'>
          <div className='w-full'>
            <img src={bg4} alt="" />
          </div>

          <CardTwo heading="Technical Assistance:" details="Get expert guidance and support to enhance your farming practices." />
          <Button linkTo="/auth/signup" clas="white" name="Get Started" />
        </div>
      </div>
    </section>

    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">Farmer Success Stories</h2>
      <p>Hear inspiring success stories from farmers who have already experienced the transformative impact of OneFarm</p>

      <Carousel />
    </section>

    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">More Benefits For Farmers</h2>

      <CardTwo heading="Create Your Farm Profile and Manage Your Products:" details="Easily create your farm profile on OneFarm and showcase your products to potential buyers. With our intuitive interface, you can list your products, provide detailed descriptions, set prices, and manage your inventory effectively. Maximize the visibility of your offerings and attract more customers with compelling product descriptions and high-quality images" />

      <CardTwo heading="Receive Direct Orders and Streamlined Transactions:" details="Say goodbye to complex and time-consuming transactions. With OneFarm, you can receive direct orders from retailers who appreciate the quality and freshness of your produce. Enjoy seamless transactions, secure payments, and efficient order management, all while building strong relationships with buyers." />

      <CardTwo heading="Expert Guidance and Support:" details="At OneFarm, we are committed to supporting your success. Gain access to our dedicated technical assistance and support team, who are ready to assist you with any challenges you may face. From troubleshooting to best practices, we are here to provide the guidance and resources you need to thrive." />

      <CardTwo heading="Promoting Sustainable and Responsible Farming:" details='Join OneFarm and be a part of our commitment to sustainability. We promote responsible farming practices, such as organic farming, regenerative agriculture, and resource conservation. Together, we can contribute to a more sustainable future for agriculture.' />
    </section>
  </main>
);

export default FarmersDetails;
