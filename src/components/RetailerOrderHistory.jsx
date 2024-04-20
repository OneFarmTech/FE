import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const RetailerOrderHistory = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const userId = localStorage.getItem('userId');
      const token = sessionStorage.getItem('token');
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + 'orders', {
          headers: {
            Authorization: `Bearer ${token}`
          },
         
        });

        const filteredOrders = response.data.filter(order => order.user_id === parseInt(userId));
        setOrders(filteredOrders);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);
  

  const getFormattedDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', options);
    // Convert the first character of month to uppercase
    return formattedDate.replace(/^\w/, (c) => c.toUpperCase());
  };


  const getLatestOrders = () => {
    const latestOrdersMap = new Map();

    orders.forEach(order => {
      const orderId = order.order_id;
      // Check if order ID already exists in map and if it's the latest order
      if (!latestOrdersMap.has(orderId) || order.created_at > latestOrdersMap.get(orderId).created_at) {
        latestOrdersMap.set(orderId, order);
      }
    });

    return Array.from(latestOrdersMap.values());
  };

  // Get the latest orders
  const latestOrders = getLatestOrders();

  return (
    <div>
      <h2 className='text-2xl ml-10 mb-8 font-bold'>Orders</h2>
      <table className='overflow-x-auto bg-white w-[94%] mx-auto h-auto rounded-[10px]  hidden md:table'>
        
        <thead>
          <tr className='flex py-[20px] px-[5px] md:py-[20px] w-[98%] 
          gap-[20px] mx-auto h-auto items-center mb-4 flex-shrink-0 rounded-[10px] font-semibold tracking-normal xl:tracking-wide leading-normal underline justify-between'>
            <td className=' font-bold '>Product Name</td>
            <td className=' font-bold '>Order ID</td>
            <td className=' font-bold '>Quantity</td>
            <td className=' font-bold '>Price</td>
            <td className=' font-bold '>Date of Order</td>
           {/* <td className=' font-bold '>Order Status</td>*/}
          </tr>
        </thead>
        <tbody>
          {latestOrders.map(order => (
            

            <tr title='click on order ID to view more details' key={order.id}  className=' flex py-[20px] px-[5px] md:py-[20px]
            gap-[20px] mx-auto w-[98%] h-auto items-center mb-4 rounded-[10px] bg-[#FBFBFB] justify-between'>
              <td>{order.product.name}</td>
              <td className='text-green-30 '>
                <Link to={`/dashboard/buyerorders/${order.order_id}`}>
                  {order.order_id}
                </Link>
              </td>
              <td>{order.quantity}</td>
              <td className='naira-sign'>{order.cost.toLocaleString()}</td>
              <td>{getFormattedDate(order.created_at)}</td>
             {/* <td className={order.status === 'Approved' ? 'text-green-500' : 'text-red-300'}>{order.status}</td>*/}
             
            </tr>
          ))}
        </tbody>
      </table>
     {/* *************************************************mobile-view********************************************/}
      <div  className='md:hidden flex flex-col gap-4'>
      
      {latestOrders.map(order => (
        
        <Link to={`/dashboard/buyerorders/${order.order_id}`}  title='click here to view more details about this order' className='w-[80%] flex mb-10 flex-col gap-2 p-6 mx-auto bg-white rounded-[10px] h-auto flex-shrink-0 border-[0.5px] border-[#7B7B7B]
        ' key={order.id}>

           <div  className='flex gap-4 justify-between'>
            <p className='font-lato text-[16px] font-bold tracking-[0.255px] underline text-[#0D1821]' >Name:</p>
            <p className='text-[14px]'>{order.buyer.firstname} {order.buyer.lastname}</p>
            </div>

          <div  className='flex gap-5 justify-between'>
            <p className='font-lato text-[16px]  font-bold tracking-[0.255px] underline text-[#0D1821]'>Product:</p>
            <p className='text-[14px]'>{order.product.name}</p>
            </div>

          <div  className='flex gap-5 justify-between'>
            <p className='font-lato  text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Order ID:</p>
            <p className='text-[14px]'>{order.order_id}</p>
            </div>

          <div  className='flex gap-5 justify-between'>
            <p className='font-lato  text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Quantity:</p>
            <p className='text-[14px]'>{order.quantity}</p>
            </div>

          <div  className='flex gap-5 justify-between'>
            <p className='font-lato text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Price:</p>
            <p className='naira-sign text-[14px]'>{order.cost.toLocaleString()}</p>
            </div>

          <div  className='flex gap-5 justify-between'>
            <p className='font-lato text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Date:</p>
            <p  className='text-[14px]'>{getFormattedDate(order.created_at)}</p>
            </div>

          {/*<div  className='flex gap-5 justify-between'>
            <p className='font-lato text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Status:</p>
            <p  className={order.status === 'Approved' ? 'text-green-500 font-semibold  text-[14px]' : 'text-red-300 text-[14px] font-semibold'}>{order.status}</p>
      </div>*/}

            </Link>
        
        ))}
        
      </div>
    </div>
  );
};

export default RetailerOrderHistory;
