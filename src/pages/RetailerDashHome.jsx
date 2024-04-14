
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RetailerDashHome = () => {
  const navigate = useNavigate();
  const [orderCount, setOrderCount] = useState(0);
  const [spending, setSpending] = useState(0);
  


  const redirectToMarketplace = () => {
    const Role = localStorage.getItem('userRole');
    if (Role === 'retailer') {
      navigate('/dashboard/retailmarketplace');
    } 
  };

  useEffect(() => {
    const fetchOrderData = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const token = sessionStorage.getItem('token');
        const response = await axios.get(`https://api.onefarmtech.com/api/orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const orders = response.data.filter(order => order.user_id === parseInt(userId));
        setOrderCount(orders.length);

        // Calculate spending
        let totalSpending = 0;
        orders.forEach(order => {
          totalSpending += order.total_cost;
        });
        setSpending(totalSpending);
      } catch (error) {
        console.error('Error fetching order data:', error);
      }
    };

    fetchOrderData();
  }, []);

  return (
    <>
    <section className="px-[4%] py-4 flex flex-col w-full h-full">
        <div className="flex overflow-x-auto md:overflow-x-hidden  gap-5 lg:gap-10 h-52  w-auto py-4 items-stretch px-2">
         
         

           <Link    to='/dashboard/buyerorders'> <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-[33%] bg-white text-black-100">
              <h4 className="text-sm md:text-lg">Order History</h4>
              <h2 className="text-lg md:text-2xl">{orderCount} Orders</h2>
              <p className="text-sm md:text-lg"></p>
            </div>
            </Link>

           {/*} <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-[33%] bg-white text-black-100">
              <h4 className="text-sm md:text-lg">Settled Orders</h4>
              <h2 className="text-lg md:text-2xl">0</h2>
              <p className="text-sm md:text-lgd"></p>
  </div>*/}
          
          <div className="flex flex-col justify-between rounded-md p-5 w-[33%] bg-green-30 text-white shadow-lg">
            <h4 className="text-sm md:text-lg">Spendings</h4>
            <h2 className="text-lg md:text-2xl naira-sign">{spending}</h2>
            <p className="text-sm md:text-lg"></p>
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
      </button> to view products</span>
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
          <div className="flex flex-col gap-5 w-full max-w-[42rem]">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Messages</h2>
              {/*<button className="underline text-base">View more</button>*/}
  </div> 
            
           {/* <div>
              <AvatarMessage name="ALiko Dangote" text="Great products I will refer you when I get the package" />
              <AvatarMessage name="ALiko Dangote" text="Great products I will refer you when I get the package" />
              <AvatarMessage name="ALiko Dangote" text="Great products I will refer you when I get the package" />
          </div> */}
          <p>Your messages will appear here. You dont have any messages yet</p>
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
    
    </>
  )
};

export default RetailerDashHome;
