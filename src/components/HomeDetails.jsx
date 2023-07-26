import Button from "./Button";
import CardOne from "./CardOne";

const HomeDetails = () => (
  <>
    <section className="flex flex-col lg:flex-row gap-4 py-10 px-[5%] xl:min-h-[30rem]">
      <div className="bg-backone flex-1 min-h-[20rem] bg-no-repeat bg-cover"></div>
      <div className="flex-1 flex flex-col gap-9 items-start py-4">
        <CardOne heading="Our Mission:" details="Empower smallholder farmers in Nigeria by revolutionizing the agricultural supply chain, creating a fair and transparent ecosystem that benefits farmers, middlemen, and retailers"/>

        <CardOne heading="Market Opportunity:" details="The West African agriculture industry is valued at $10 billion. Join us in transforming Nigeria's agricultural supply chain." />

        <Button clas="white" name="Get Started" />
      </div>
    </section>
  </>
);

export default HomeDetails;
