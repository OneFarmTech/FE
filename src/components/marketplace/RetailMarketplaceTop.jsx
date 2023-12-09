import { FiUpload } from "react-icons/fi"
import { Link } from "react-router-dom"

const RetailTop = () => {
  return (
    <section className="overflow-auto">
      <div className="flex gap-10 h-52 w-fit py-4 items-stretch">
        <div className="flex gap-6">
          <Link to='' className="flex flex-col justify-between rounded-md p-5 w-80 shadow-md bg-white text-black-100">
            <div className="text-lg"><FiUpload size={28} /></div>
            <h2 className="text-3xl">Order Status</h2>
            <p className="text-md">172 Total Orders</p>
          </Link>

          <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-80 bg-white text-black-100">
            <h4 className="text-lg">Your Orders</h4>
            <h2 className="text-3xl">12</h2>
            <p className="text-md">On-Time Delivery Rate: 82%</p>
          </div>
        </div>

        <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-80 bg-green-30 text-white">
          <h4 className="text-lg">Your spending this month</h4>
          <h2 className="text-3xl">N4,331,912</h2>
          <p className="text-md">17% less than last month (N4,995,013)</p>
        </div>
      </div>
    </section>
  )
};

export default RetailTop;
