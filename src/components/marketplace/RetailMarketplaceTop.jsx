import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RetailTop = () => {

  const navigate = useNavigate();
  const [orderCount, setOrderCount] = useState(0);
  const [spending, setSpending] = useState(0);

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
        const orders = response.data.filter(order => order.user_id === parseInt(userId));

         // Extract unique order IDs
      const uniqueOrderIds = new Set(orders.map(order => order.order_id));

      // Count the number of unique order IDs
      const totalOrders = uniqueOrderIds.size;

      setOrderCount(totalOrders);

        // Calculate spending
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

return (
    <section className="ml-6">

<div className="flex overflow-x-auto md:overflow-x-hidden gap-5 lg:gap-10 h-52  w-auto py-4 items-stretch px-2">
         
         <Link to='/dashboard/buyerorders' title='click to view all your Orders' className="flex flex-col justify-between shadow-md rounded-lg py-5 px-2 md:px-5 md:w-[33%]  w-[50%] bg-white text-black-100">
            <h2 className="text-sm md:text-xl text-green-600  font-bold">Order History</h2>
            <div  className='flex flex-col md:flex-row justify-between'>            
              <p className="text-sm md:text-xl">Total Orders:</p>
            <p className="text-sm md:text-lg">{orderCount}</p>
            </div>

          </Link>
        
        <div className="flex flex-col justify-between rounded-md py-5 px-2  md:px-5 md:w-[33%]  w-[50%] bg-green-30 text-white shadow-lg">
          <h4 className="text-[12px] md:text-xl font-bold">Spendings</h4>
          <div  className='flex justify-between flex-col md:flex-row'> 
          <h2 className="text-[12px] md:text-xl ">Total:</h2>
          <p className="text-[12px] md:text-lg naira-sign">{spending.toLocaleString()}</p>
          </div>
        </div>
      </div>
      {/*<div className="flex overflow-x-auto md:overflow-x-hidden gap-5 lg:gap-10 h-52  w-auto py-4 items-stretch px-2">

          <Link to='' className="flex flex-col justify-between rounded-md p-5 w-96 shadow-md bg-white text-black-100">
            <h2 className="text-sm md:text-2xl">Order History</h2>
            <p className="text-sm md:text-lg">0 Total Orders</p>
          </Link>

          {/*<div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-96 bg-white text-black-100">
            <h4 className="text-sm md:text-lg">Your Orders:</h4>
            <h2 className="text-lg md:text-2xl">0</h2>
            <p className="text-sm md:text-lg"></p>
  </div>
        
        <div className="flex flex-col justify-between shadow-md rounded-lg p-5 w-96 bg-green-30 text-white">
          <h4 className="text-sm md:text-lg ">Your spending this month</h4>
          <h2 className="text-lg md:text-2xl naira-sign">0</h2>
          <p className="text-sm md:text-lg"></p>
        </div>
  </div>*/}

    </section>
  )
};

export default RetailTop;
