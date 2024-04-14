import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TopSection = () => {
  return (
    <section className='xl:m-auto w-[96%]'>
      <div className=" flex overflow-x-auto md:overflow-x-hidden gap-5 lg:gap-10 h-52  w-auto py-4 items-stretch px-2">
     
          {
            <Link to='/dashboard/new' className="flex flex-col gap-1 justify-between rounded-md p-5 w-[33%] bg-green-30 text-white shadow-md">
              <div className="text-sm md:text-lg"><FiUpload size={28} /></div>
              <h2 className="text-sm md:text-2xl">Upload your products</h2>
              {/*<p className="text-sm md:text-lg">0 products uploaded so far</p>*/}
            </Link>
          }

<Link to='/dashboard/approveorders' title='View approved orders' className="flex flex-col justify-between shadow-md rounded-lg p-5 w-[33%] bg-white text-black-100">
              <h4 className="text-sm md:text-lg">Approved Orders</h4>
              <h2 className="text-lg md:text-2xl"></h2>
              <p className="text-sm md:text-lgd"></p>
            </Link>
            
        

            <Link to='/dashboard/pendingorders' title='View approved orders' className="flex flex-col justify-between shadow-md rounded-lg p-5 w-[33%] bg-white text-black-100">
              <h4 className="text-sm md:text-lg">Pending Orders</h4>
              <h2 className="text-lg md:text-2xl"></h2>
              <p className="text-sm md:text-lg"></p>
            </Link>
      </div>
    </section>
  );
};

export default TopSection;
