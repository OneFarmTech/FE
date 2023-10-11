import dealtag from "../../assets/images/offtag.svg"
import onion from "../../assets/images/onion.png"

const Deal = () => {
  return (
    <section className="flex flex-col gap-8 my-8 items-center">
      <div>
        <h2 className="text-5xl text-center leading-[3.2rem] relative">Deal Of The Week <div className="absolute top-0 -right-14 w-16"><img src={dealtag} alt="" /></div></h2>
        
      </div>
      <p className="text-center text-lg">Save <span className="text-green-30">25%</span> when you buy a bag of onions only this week</p>

      <div className="w-[90%] max-w-3xl rounded-lg overflow-hidden h-auto">
        <img src={onion} alt="" />
      </div>

      <div className="flex items-center gap-4">
        <span className="text-3xl font-bold">#58,500</span>
        <span className="text-2xl text-black-50 line-through">#78,000</span>
        <span className="text-white bg-green-30 rounded-md p-2">-25%</span>
      </div>
    </section>
  )
};

export default Deal;
