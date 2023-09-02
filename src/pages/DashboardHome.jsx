import DashCardOne from "../components/dashboardComp/DashCardOne";

const DashboardHome = () => {
  return (
    <section className="px-[4%] py-4 flex flex-col w-full h-full">
      <div className="overflow-auto">
        <div className="flex gap-6 h-52 w-fit py-4 items-stretch">
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

      <div className="mt-10">
        <div className="flex flex-col gap-8 w-full max-w-[42rem]">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Pending Orders</h2>
            <button className="underline text-base">View more</button>
          </div>

          <div className="overflow-auto">
            <div className="flex flex-col h-[850px] items-start gap-6 flex-wrap">
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default DashboardHome;
