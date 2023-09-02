import img from '../assets/images/bg2.png'
import Button from './Button';
import CardSix from './CardSix';
import about1 from '../assets/images/about1.png'
import about2 from '../assets/images/about2.png'
import about3 from '../assets/images/about3.png'
import about4 from '../assets/images/about4.png'
import about5 from '../assets/images/about5.png'
import about6 from '../assets/images/about6.png'
import about7 from '../assets/images/about7.png'
import about8 from '../assets/images/about8.png'
import CardTwo from './CardTwo';


const AboutDetails = () => (
  <main className="max-w-[1700px] m-auto">
    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">OneFarm Background</h2>
      <p className="leading-10">OneFarm was founded in 2023 with a vision to transform Nigeria's agricultural landscape. Since then, we have been dedicated to connecting farmers, wholesalers, and retailers to create a fair and transparent ecosystem. OneFarm Tech is committed to transforming Nigeria's agricultural supply chain through technology. By empowering farmers, promoting transparency, and creating a fair marketplace, we strive to build sustainable futures for smallholder farmers, wholesalers, retailers, and the overall agricultural ecosystem.</p>
    </section>

    <section className="py-10 px-[5%]">
      <article className="flex flex-col lg:flex-row gap-8 justify-around">
        <div className="lg:flex-[40%]">
          <img src={img} alt="" />
        </div>

        <div className="flex lg:flex-[55%] flex-col justify-center items-start gap-3">
          <h3 className="text-green-30 text-2xl">Our Mission</h3>
          
          <p className='leading-10'>Our mission is to empower smallholder farmers in Nigeria by connecting them directly with retailers, ensuring fair revenue distribution. Through our technology-driven solution, we aim to revolutionize the agricultural ecosystem, create a fair and transparent marketplace, and drive sustainable growth in the industry.</p>
          <Button linkTo="/auth/signup" name="Get Started" clas="white" />
        </div>
      </article>
    </section>

    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">Our Core Values</h2>
      <p className="leading-10">At OneFarm, we prioritize transparency, believing it is essential for a fair and ethical agricultural supply chain. We foster open communication, share information, and build trust among farmers, wholesalers, and retailers. Fairness is central to our platform, as we strive to eliminate unfair pricing practices and ensure farmers receive equitable compensation. Sustainability is a guiding principle, and we promote sustainable agriculture, reduce environmental impact, and support regenerative farming techniques. Through collaboration, we forge partnerships with stakeholders to create a strong network that drives collective growth, leveraging expertise and knowledge to strengthen the agricultural community.</p>
    </section>

    <section className="py-10 px-[5%] flex flex-col gap-7">
      <h2 className="text-green-30 text-3xl">Our Impact</h2>

      <div className='dot-card green-dot-card'>
        <CardSix img={about1} order="" heading="Empowering Farmers" details="Our platform empowers smallholder farmers by providing them with direct market access, enabling fair revenue distribution, and offering resources to improve their productivity and profitability. By empowering farmers, we help create sustainable livelihoods and uplift farming communities." />
      </div>
      <div className='dot-card orange-dot-card'>
        <CardSix img={about2} order="lg:order-last" heading="Economic Growth" details="We contribute to the economic growth of the agriculture sector by fostering market opportunities, promoting fair trade practices, and supporting the growth of small businesses. Our platform drives economic prosperity, job creation, and overall industry development." />
      </div>

      <div className='dot-card blue-dot-card'>
        <CardSix img={about3} order="" heading="Environmental Stewardship" details="Environmental stewardship is a key aspect of our mission. We advocate for sustainable farming practices, resource conservation, and responsible sourcing. By promoting environmentally friendly approaches, we aim to minimize our ecological footprint and protect natural resources." />
      </div>

      <div className='blor-dot-card dot-card'>
        <CardSix img={about4} order="lg:order-last" heading="Social Impact" details="Our platform has a positive social impact by promoting inclusivity, gender equality, and community development. We support smallholder farmers, prioritize fair compensation, and work towards reducing inequalities in the agricultural sector. Through our efforts, we aim to create a more equitable and socially just agricultural ecosystem" />
      </div>
    </section>

    <section className="flex flex-col gap-8 py-10 px-[5%]">
      <h2 className="text-green-30 text-3xl lg:mb-0">What We Provide</h2>

      <div className='flex flex-col justify-between gap-12 lg:flex-row lg:flex-wrap'>
        <div className='flex-[45%] flex flex-col gap-6'>
          <div className='w-full'>
            <img src={about5} alt="" />
          </div>

          <CardTwo heading="Direct Farmer-Retailer Connection:" details="Connect directly with farmers to source high-quality produce, ensuring freshness and traceability." />
        </div>

        <div className='flex-[45%] flex flex-col gap-6'>
          <div className='w-full'>
            <img src={about6} alt="" />
          </div>

          <CardTwo heading="Data Analytics:" details="Leverage powerful data analytics to gain valuable insights into market trends, pricing, and consumer preferences." />
        </div>

        <div className='flex-[45%] flex flex-col gap-6'>
          <div className='w-full'>
            <img src={about7} alt="" />
          </div>

          <CardTwo heading="Technical Assistance:" details="Access expert guidance and technical support to enhance farming practices, increase productivity, and reduce risks." />
        </div>

        <div className='flex-[45%] flex flex-col gap-6'>
          <div className='w-full'>
            <img src={about8} alt="" />
          </div>

          <CardTwo heading="Market Insights:" details="Stay informed with market insights and research reports to make informed business decisions and seize opportunities." />
        </div>
      </div>
    </section>
  </main>
);

export default AboutDetails;
