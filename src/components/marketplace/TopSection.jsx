import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TopSection = () => {
  return (
    <section className="overflow-auto">
      <div className="flex gap-10 h-52 w-fit py-4 items-stretch">
        <div className="flex gap-6">
          <Link to='/dashboard/new' className="flex flex-col justify-between rounded-md p-5 w-80 bg-green-30 text-white shadow-md">
            <div className="text-lg"><FiUpload size={28} /></div>
            <h2 className="text-3xl">Upload your product</h2>
            <p className="text-md">291 products uploaded so far</p>
          </Link>

          <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-80 bg-white text-black-100">
            <h4 className="text-lg">Pending Orders</h4>
            <h2 className="text-3xl">12</h2>
            <p className="text-md">28% increase from last month</p>
          </div>
        </div>

        <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-80 bg-white text-black-100">
          <h4 className="text-lg">Settled Orders</h4>
          <h2 className="text-3xl">912</h2>
          <p className="text-md">82% customer satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
