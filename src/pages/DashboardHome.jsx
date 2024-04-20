import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';


const DashboardHome = () => {
  const navigate = useNavigate();
  const [spending, setSpending] = useState(0);
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

        // Calculate erning
        let totalSpending = 0;
        orders.forEach(order => {
          totalSpending += (order.cost * order.quantity);
        });
        setSpending(totalSpending);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, []);


  const redirectToMarketplace = () => {
    const Role = localStorage.getItem('userRole');
    if (Role === 'retailer') {
      navigate('/dashboard/retailmarketplace');
    } else if (Role === 'farmer') {
      navigate('/dashboard/marketplace');
    } else {
      console.log(Role);
    }
  };

  return (
    <>
    <section className="px-[4%] py-4 flex flex-col w-full h-full">
        <div className="flex overflow-x-auto md:overflow-x-hidden  gap-5 lg:gap-10 h-52  w-auto py-4 items-stretch px-2">
         
         
            
            <Link to='/dashboard/pendingorders' className="flex flex-col justify-between shadow-md rounded-lg p-5 w-[33%] bg-white text-black-100">
            <div className='flex flex-col md:flex-row justify-between'>
              <h4 className="text-sm md:text-lg">Pending Orders</h4>
              <h2 className="text-lg md:text-xl">{pendingCount}</h2>
              </div>
              <p className="text-sm md:text-lg"></p>
            </Link>
            

            
            <Link to='/dashboard/approveorders' className="flex flex-col justify-between shadow-md rounded-lg p-5 w-[33%] bg-white text-black-100">
              <div className='flex flex-col md:flex-row justify-between'>              
              <h4 className="text-sm md:text-lg">Approved Orders</h4>
              <h2 className="text-lg md:text-xl">{approvedCount}</h2>
              </div>
            <p className="text-sm md:text-lg"></p>
            </Link>
            
          
          <div className="flex flex-col justify-between rounded-md p-5 w-[33%] bg-green-30 text-white shadow-lg">
            <h4 className="text-sm md:text-lg">Earning</h4>
            <div  className='flex justify-between flex-col md:flex-row'> 
          <h2 className="text-[12px] md:text-xl ">Total:</h2>
          <p className="text-[12px] md:text-lg naira-sign">{spending.toLocaleString()}</p>
          </div>
          </div>
        </div>

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-8 w-full max-w-[42rem]">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Pending Orders</h2>
            {/*<button className="underline text-base">View more</button>*/}
          </div>
         
          <div className="overflow-auto">
        <span>  Your pending orders will appear here. Go to  <button
        className={`inline gap-4 items-center text-black-50 hover:text-green-600 `}
        onClick={redirectToMarketplace}
      >
        <span className="text-x text-green-600">MarketPlace</span>
      </button> to add products</span>
             {/*
            <div className="flex flex-col h-[600px] items-start gap-6 gap-y-8 flex-wrap">
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
              <DashCardOne />
            </div>*/}
          </div>
        </div> 
            
        <div className="flex flex-col gap-10">
         {/* <div className="flex flex-col gap-5 w-full max-w-[42rem]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Messages</h2>
              {/*<button className="underline text-base">View more</button>
  </div> 
            
           {/* <div>
              <AvatarMessage name="ALiko Dangote" text="Great products I will refer you when I get the package" />
              <AvatarMessage name="ALiko Dangote" text="Great products I will refer you when I get the package" />
              <AvatarMessage name="ALiko Dangote" text="Great products I will refer you when I get the package" />
          </div> 
          <p>Your messages will appear here. You dont have any messages yet</p>
          </div>*/}

          <div className="flex flex-col gap-5 w-full max-w-[42rem]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Market Insights</h2>
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
    
    </>
  )
};

export default DashboardHome;
