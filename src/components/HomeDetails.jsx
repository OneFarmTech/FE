import Button from "./Button";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";
import farmer from "../assets/images/farmer.png";
import middle from "../assets/images/middle.png";
import retail from "../assets/images/retail.png";

const HomeDetails = () => (
  <main className="max-w-[1700px] m-auto">
    <section className="flex flex-col lg:flex-row gap-4 py-10 px-[5%] xl:min-h-[30rem]">
      <div className="bg-backone flex-1 min-h-[20rem] bg-no-repeat bg-cover"></div>
      <div className="flex-1 flex flex-col gap-9 items-start py-4">
        <CardOne heading="Our Mission:" details="Empower smallholder farmers in Nigeria by revolutionizing the agricultural supply chain, creating a fair and transparent ecosystem that benefits farmers, middlemen, and retailers"/>

        <CardOne heading="Market Opportunity:" details="The West African agriculture industry is valued at $10 billion. Join us in transforming Nigeria's agricultural supply chain." />

        <Button clas="white" name="Get Started" />
      </div>
    </section>

    <section className="py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl mb-5 lg:mb-0 lg:translate-y-10">Why One Farm Tech</h2>
      <div className="flex flex-col lg:flex-row gap-4 xl:min-h-[30rem]">
        <div className="flex-1 flex flex-col gap-9 items-start py-4 order-last lg:order-first lg:translate-y-10">
          <CardTwo heading="The Challenge:" details="Nigeria's agricultural supply chain faces inefficiency and unfairness, resulting in financial losses for farmers and abandoned farms." />

          <CardTwo heading="Our Solution:" details="OneFarm Tech is a technology-driven platform that connects farmers, middlemen, and retailers, streamlining logistics, ensuring fair pricing, and promoting transparency" />

          <Button clas="white" name="Get Started" />
        </div>

        <div className="bg-backtwo flex-1 min-h-[20rem] bg-no-repeat bg-cover"></div>
      </div>
    </section>
    
    <section className="py-7 px-[5%]">
      <h2 className="text-green-30 text-3xl mb-9">We Have Something For You</h2>

      <div className="flex flex-col lg:flex-row xl:gap-7 gap-4">
        <CardThree img={farmer} name="Farmer" heading="Empowerment for Farmers:" details="Join OneFarm and gain access to a network of retailers, streamlined logistics, fair pricing, and technical assistance to boost your income, productivity, and agricultural success." />

        <CardThree img={middle} name="Middleman" heading="Simplify Your Role:" details="OneFarm eliminates complexities for middlemen by directly connecting you with farmers and retailers. Benefit from a transparent supply chain, efficient processes, and enhanced profitability." />

        <CardThree img={retail} name="Retailers" heading="Source Fresh, Local Produce:" details="OneFarm enables retailers to source high-quality, locally grown produce directly from farmers. Ensure freshness, traceability, fair pricing, and diverse product offerings to meet consumer demand." />
      </div>
    </section>
  </main>
);

export default HomeDetails;
