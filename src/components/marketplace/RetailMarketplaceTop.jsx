import { FiUpload } from "react-icons/fi"
import { Link } from "react-router-dom"

const RetailTop = () => {
  return (
    <section className="xl:m-auto">
      <div className="flex overflow-x-auto xl:overflow-x-hidden gap-5 lg:gap-10 h-52  w-auto py-4 items-stretch px-2">

          <Link to='' className="flex flex-col justify-between rounded-md p-5 w-96 shadow-md bg-white text-black-100">
            <h2 className="text-sm md:text-2xl">Order Status</h2>
            <p className="text-sm md:text-lg">0 Total Orders</p>
          </Link>

          <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-96 bg-white text-black-100">
            <h4 className="text-sm md:text-lg">Your Orders</h4>
            <h2 className="text-lg md:text-2xl">0</h2>
            <p className="text-sm md:text-lg">Delivery Rate: 0%</p>
          </div>
        
        <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-96 bg-green-30 text-white">
          <h4 className="text-sm md:text-lg ">Your spending this month</h4>
          <h2 className="text-lg md:text-2xl">N0</h2>
          <p className="text-sm md:text-lg">0% less than last month (N0)</p>
        </div>
      </div>
    </section>
  )
};

export default RetailTop;
