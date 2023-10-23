import Button from "./Button";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";
import farmer from "../assets/images/farmer.png";
import middle from "../assets/images/middle.png";
import retail from "../assets/images/retail.png";
import CardFour from "./CardFour";
import bg4 from "../assets/images/bg4.png";
import bg5 from "../assets/images/bg5.png";
import bg6 from "../assets/images/bg6.png";
import CardFive from "./CardFive";
import bg7 from "../assets/images/bg7.png";
import bg8 from "../assets/images/bg8.png";
import bg9 from "../assets/images/bg9.png";
import bg10 from "../assets/images/bg10.png";
import TestimonialCard from "./TestimonialCard";
import avatar1 from "../assets/images/avatar1.png";
import Faq from "./Faq";

const HomeDetails = () => {
  
  return (
    <main className="max-w-[1700px] m-auto">
      <section className="flex flex-col lg:flex-row gap-4 py-10 px-[5%] xl:min-h-[30rem]">
        <div className="bg-backone flex-1 min-h-[20rem] bg-no-repeat bg-cover"></div>
        <div className="flex-1 flex flex-col gap-9 items-start py-4">
          <CardOne heading="Our Mission:" details="Empower smallholder farmers in Nigeria by revolutionizing the agricultural supply chain, creating a fair and transparent ecosystem that benefits farmers, wholesalers, and retailers"/>

          <CardOne heading="Market Opportunity:" details="The West African agriculture industry is valued at $10 billion. Join us in transforming Nigeria's agricultural supply chain." />

          <Button linkTo="/auth/signup" clas="white" name="Get Started" />
        </div>
      </section>

      <section className="py-10 px-[5%]">
        <h2 className="text-green-30 text-3xl mb-5 lg:mb-0 lg:translate-y-10">Why One Farm Tech</h2>
        <div className="flex flex-col lg:flex-row gap-4 xl:min-h-[30rem]">
          <div className="flex-1 flex flex-col gap-9 items-start py-4 order-last lg:order-first lg:translate-y-10">
            <CardTwo heading="The Challenge:" details="Nigeria's agricultural supply chain faces inefficiency and unfairness, resulting in financial losses for farmers and abandoned farms." />

            <CardTwo heading="Our Solution:" details="OneFarm Tech is a technology-driven platform that connects farmers, wholesalers, and retailers, streamlining logistics, ensuring fair pricing, and promoting transparency" />

            <Button linkTo="/auth/signup" clas="white" name="Get Started" />
          </div>

          <div className="bg-backtwo flex-1 min-h-[20rem] bg-no-repeat bg-cover"></div>
        </div>
      </section>
      
      <section className="py-7 px-[5%]">
        <h2 className="text-green-30 text-3xl mb-9">We Have Something For You</h2>

        <div className="flex flex-col lg:flex-row xl:gap-7 gap-4">
          <CardThree img={farmer} name="Farmer" heading="Empowerment for Farmers:" details="Join OneFarm and gain access to a network of retailers, streamlined logistics, fair pricing, and technical assistance to boost your income, productivity, and agricultural success." />

          <CardThree img={middle} name="Wholesaler" heading="Simplify Your Role:" details="OneFarm eliminates complexities for wholesalers by directly connecting you with farmers and retailers. Benefit from a transparent supply chain, efficient processes, and enhanced profitability." />

          <CardThree img={retail} name="Retailers" heading="Source Fresh, Local Produce:" details="OneFarm enables retailers to source high-quality, locally grown produce directly from farmers. Ensure freshness, traceability, fair pricing, and diverse product offerings to meet consumer demand." />
        </div>
      </section>

      <section className="py-7 px-[5%]">
        <h2 className="text-green-30 text-3xl mb-9">How OneFarm Works</h2>
        <div className="flex flex-col gap-8">
          <div className="dot-card green-dot-card">
            <CardFour order="order-first" heading="Farmers:" list={["Sign up and select your farmer profile.", "List your products and set prices.", "Receive direct orders from retailers.", "Manage logistics and delivery."]} img={bg4} />
          </div>
          <div className="dot-card orange-dot-card">
            <CardFour order="lg:order-last" heading="Wholesalers:" list={["Sign up and choose your wholesaler profile.","Connect with farmers and retailers on the platform.", "Facilitate transactions and ensure smooth supply chain operations.", "Benefit from transparent pricing and fair revenue distribution."]} img={bg5} />
          </div>
          <div className="dot-card blue-dot-card">

            <CardFour order="order-first" heading="Retailers:" img={bg6} list={["Sign up and choose your wholesaler profile.", "Connect with farmers and retailers on the platform.", "Facilitate transactions and ensure smooth supply chain operations.", "Benefit from transparent pricing and fair revenue distribution."]} />
          </div>
        </div>
      </section>

      <section className="py-7 px-[5%] w-full">
        <h2 className="text-green-30 text-3xl mb-9">Our Track Record</h2>
        <div className="w-full overflow-auto">
          <div className="flex gap-8 min-w-[1024px]">
            <CardFive heading="Our Achievements" details="Over 50 farmers onboarded and counting, with a 100% satisfaction rating" img={bg7} />
            <CardFive heading="Increased Crop Yields" details="Onboarded farmers have experienced a remarkable 20% increase in crop yields." img={bg8} />
            <CardFive heading="Reduced Waste" details="Farmers using OneFarm have achieved a 10% reduction in waste." img={bg9} />
            <CardFive heading="Positive Social and Environmental Impact" details="Our packaging is 100% recyclable or compostable." img={bg10} />
          </div>
        </div>
      </section>

      <section className="py-7 px-[5%] w-full">
        <h2 className="text-green-30 text-3xl mb-9">Testimonial From Our Partners</h2>

        <div>
          <TestimonialCard img={avatar1} heading="Samuel" desc="Smallholder Farmer" details="Ever since I joined OneFarm, my farming business has transformed. The platform connects me directly with retailers, ensuring fair prices and eliminating wholesalers. With their support, my income has soared, and I've gained valuable resources to enhance productivity and reduce risks. OneFarm is the transparent and empowering solution every farmer needs." />
        </div>
      </section>

      <section className="py-7 px-[5%] w-full">
        <h2 className="text-green-30 text-3xl mb-9">You Have Questions? We Have Answers.</h2>
        
        <Faq />
      </section>
    </main>
  );

};

export default HomeDetails;
