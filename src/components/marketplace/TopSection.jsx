import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const TopSection = () => {

  const [pendingCount, setPendingCount] = useState(0);
  const [approvedCount, setApprovedCount] = useState(0);

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const token = sessionStorage.getItem('token');
        const response = await axios.get(import.meta.env.VITE_API_URL + `orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const orders = response.data.filter(order => order.product.user_id === parseInt(userId));
        // Calculate pending and approved counts
        const pendingOrders = {};
        const approvedOrders = {};

        orders.forEach(order => {
          if (order.status === 'Pending') {
            pendingOrders[order.order_id] = true;
          } else if (order.status === 'Approved') {
            approvedOrders[order.order_id] = true;
          }
        });

        // Count unique order IDs for pending and approved orders
        const pendingCount = Object.keys(pendingOrders).length;
        const approvedCount = Object.keys(approvedOrders).length;

        setPendingCount(pendingCount);
        setApprovedCount(approvedCount);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, []);

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
<div className='flex flex-col md:flex-row justify-between'>              
              <h4 className="text-sm md:text-lg">Approved Orders</h4>
              <h2 className="text-lg md:text-xl">{approvedCount}</h2>
              </div>
              <p className="text-sm md:text-lgd"></p>
            </Link>
            
        

            <Link to='/dashboard/pendingorders' title='View Pending orders' className="flex flex-col justify-between shadow-md rounded-lg p-5 w-[33%] bg-white text-black-100">
            <div className='flex flex-col md:flex-row justify-between'>
              <h4 className="text-sm md:text-lg">Pending Orders</h4>
              <h2 className="text-lg md:text-xl">{pendingCount}</h2>
              </div>
              <p className="text-sm md:text-lg"></p>
            </Link>
      </div>
    </section>
  );
};

export default TopSection;
