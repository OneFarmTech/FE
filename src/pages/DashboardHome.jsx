import AvatarMessage from "../components/dashboardComp/AvatarMessage";
import DashCardOne from "../components/dashboardComp/DashCardOne";

const DashboardHome = () => {
  return (
    <section className="px-[4%] py-4 flex flex-col w-full h-full">
      <div className="overflow-auto">
        <div className="flex gap-10 h-52 wx-fit py-4 items-stretch">
          <div className="flex gap-6">
            <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-80 bg-white text-black-100">
              <h4 className="text-lg">Pending Orders</h4>
              <h2 className="text-3xl">12</h2>
              <p className="text-md">28% increase from last month</p>
            </div>
            <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-80 bg-white text-black-100">
              <h4 className="text-lg">Settled Orders</h4>
              <h2 className="text-3xl">912</h2>
              <p className="text-md">82% customer satisfaction</p>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-md p-5 w-96 bg-green-30 text-white shadow-lg">
            <h4 className="text-lg">Your Earnings this month</h4>
            <h2 className="text-3xl">N4,331,912</h2>
            <p className="text-md">17% less than last month (N4,995,013)</p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-8 w-full max-w-[42rem]">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Pending Orders</h2>
            <button className="underline text-base">View more</button>
          </div>
          
          <div className="overflow-auto">
            <div className="flex flex-col h-[600px] items-start gap-6 gap-y-8 flex-wrap">
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5 w-full max-w-[42rem]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Messages</h2>
              <button className="underline text-base">View more</button>
            </div>
            
            <div>
              <AvatarMessage name="ALiko Dangote" text="Great products I will refer you when I get the package" />
              <AvatarMessage name="ALiko Dangote" text="Great products I will refer you when I get the package" />
              <AvatarMessage name="ALiko Dangote" text="Great products I will refer you when I get the package" />
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full max-w-[42rem]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Market Insights</h2>
              <button className="underline text-base">View more</button>
            </div>
            
            <div className="p-5 bg-white shadow-md rounded-md">
              <ul className="flex flex-col gap-3">
                <li>Demand for rice <span className="text-green-30">(High 30%)</span></li>
                <li>Demand for sugarcane <span className="text-green-30">(High 92%)</span></li>
                <li>Demand for palm oil <span className="text-orange-30">(High 8%)</span></li>
                <li>Demand for corn <span className="text-red-50">(Low -0.9%)</span></li>
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
};

export default DashboardHome;
