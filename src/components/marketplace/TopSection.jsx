import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TopSection = () => {
  return (
    <section >
      <div className="mt-1 w-full flex flex-col gap-2 lg:flex-row lg:gap-10 lg:mt-0 h-52 lg:w-fit py-4 items-stretch">
        
          {
            <Link to='/dashboard/new' className="flex flex-col justify-between rounded-md p-5 w-80 bg-green-30 text-white shadow-md">
              <div className="text-lg"><FiUpload size={28} /></div>
              <h2 className="text-3xl">Upload your product</h2>
              <p className="text-md">0 products uploaded so far</p>
            </Link>
          }

          <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-80 bg-white text-black-100">
            <h4 className="text-lg">Pending Orders</h4>
            <h2 className="text-3xl">0</h2>
            <p className="text-md">0% increase from last month</p>
          </div>
        

        <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-80 bg-white text-black-100">
          <h4 className="text-lg">Settled Orders</h4>
          <h2 className="text-3xl">0</h2>
          <p className="text-md">0% customer satisfaction</p>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
