import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const RetailerOrderDetails = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const { orderId } = useParams();
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const token = sessionStorage.getItem('token');
      try {
        const response = await axios.get('https://api.onefarmtech.com/api/orders', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const orders = response.data;
        console.log('Orders:', orders); // Log orders to check the structure
        
        // Filter orders to find all orders with the matching orderId
        const matchedOrders = orders.filter(order => order.order_id === orderId && order.user_id === parseInt(userId));
        console.log('Matched Orders:', matchedOrders); // Log matched orders to check the structure

        if (matchedOrders.length > 0) {
          setOrderDetails(matchedOrders);
        } else {
          console.error('No orders found for the given order ID');
        }
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
    };

    fetchOrderDetails();
  }, [orderId, userId]);

  
  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  const { buyer, order_id: orderID, shipping_address:shipping_address, created_at:orderDate, status:status} = orderDetails[0];

  const calculateTotalAmount = () => {
    let totalAmount = 0;
    orderDetails.forEach(order => {
      totalAmount += order.quantity * order.cost;
    });
    return totalAmount;
  };

  const getFormattedDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString('en-US', options);
    // Convert the first character of month to uppercase
    return formattedDate.replace(/^\w/, (c) => c.toUpperCase());
  };

  return (
    <div  className='w-[90%] mx-auto mt-10 flex flex-col gap-6'>

      <div  className='flex justify-between'>
      <h2 className='font-bold md:text-xl text-[18px] text-[#0D1821] tracking-wide font-lato'>Order Details</h2>
    {/*<h2 className={status === 'Approved' ? 'text-green-500 font-semibold  md:text-xl text-[14px]' : 'text-red-300 md:text-xl text-[18px] font-semibold'}>{status}</h2>*/}
      </div>
      
      <div className='flex flex-col md:flex-row gap-6 flex-shrink-0'>

      <div  className='flex flex-col gap-4 w-full md:w-[50%]'>
        <h2 className='font-bold md:text-xl text-[14px] text-[#0D1821] md:tracking-wide  tracking-normal font-lato'>Name</h2>


        <div className='flex w-full h-[64px] items-center bg-[#fff] pt-[20px] pr-[45px] pb-[22px] pl-[28px] rounded-[10px] shadow-md'>
        {buyer.firstname} {buyer.lastname}
        </div>

        </div>

        <div className='flex flex-col gap-4 w-full md:w-[50%]'>
          <h2 className='font-bold md:text-xl text-[14px] text-[#0D1821] md:tracking-wide  tracking-normal font-lato'>Order ID </h2>
          <div className='text-green-300  flex w-full h-[64px] items-center bg-[#fff] pt-[20px] pr-[45px] pb-[22px] pl-[28px] rounded-[10px] shadow-md'>
             {orderID}
             </div>
        </div>

          </div>
          <h2 className='font-bold md:text-xl text-[14px] text-[#0D1821] md:tracking-wide  tracking-normal font-lato'>Customer&apos;s Order</h2>
      <div className='flex flex-col gap-4 rounded-[10px] bg-white shadow-md p-[26px]'>
        
      {orderDetails.map(order => (
        <div key={order.id} className='flex justify-between mb-4'>
          
          <p  className='text-[#0D1821] font-lato md:text-lg text-[14px]'>{order.quantity} Unit(s) of {order.product.name}</p>
          <p className='naira-sign text-[#0D1821] font-lato md:text-lg text-[14px] hidden  md:inline-block'>{order.cost.toLocaleString()}per/unit</p>
          <p className='naira-sign text-[#0D1821] font-lato md:text-lg text-[14px]'>{(order.quantity * order.cost).toLocaleString()}</p>
        </div>
        
      ))}
       <div className='total-amount flex justify-between  text-[#0D1821] font-lato text-lg'>
        <h2 className='text-green-300 font-bold'>Total Amount </h2>
        <h2 className='naira-sign text-green-300 font-bold'>{calculateTotalAmount().toLocaleString()}</h2>
      </div>

</div>

<div className='flex flex-col md:flex-row gap-6 flex-shrink-0 mb-10'>

      <div  className='flex flex-col gap-4 w-full md:w-[50%]'>
        <h2 className='font-bold md:text-xl text-[14px] text-[#0D1821] md:tracking-wide  tracking-normal font-lato'>Shipping Address </h2>
        <div className='flex w-full h-[64px] items-center bg-[#fff] pt-[20px] pr-[45px] pb-[22px] pl-[28px] rounded-[10px] shadow-md'>
        {shipping_address}
        </div>

        </div>

        <div className='flex flex-col gap-4  w-full md:w-[50%]'>
          <h2 className='font-bold md:text-xl text-[14px] text-[#0D1821] md:tracking-wide  tracking-normal font-latot'>Date of Order </h2>
          <div className='flex w-full h-[64px] items-center bg-[#fff] pt-[20px] pr-[45px] pb-[22px] pl-[28px] rounded-[10px] shadow-md'>
          {getFormattedDate(orderDate)}
             </div>
        </div>

          </div>
          <h2 className='text-xl font-semibold'>Contact Our Sales Team via the details below to follow up on your Order</h2>
          <div className='flex flex-col md:flex-row gap-6 flex-shrink-0 mb-10'>

<div  className='flex flex-col gap-4 w-full md:w-[50%]'>

  <h2 className='font-bold md:text-xl text-[14px] text-[#0D1821] md:tracking-wide  tracking-normal font-lato'>Our Phone Number</h2>


  <div className='flex w-full h-[64px] items-center bg-[#fff] pt-[20px] pr-[45px] pb-[22px] pl-[28px] rounded-[10px] shadow-md'>
  +2348051161999
  </div>

  </div>

  <div className='flex flex-col gap-4 w-full md:w-[50%]'>
    <h2 className='font-bold md:text-xl text-[14px] text-[#0D1821] md:tracking-wide  tracking-normal font-lato'>Our Email </h2>
    <div className='text-green-300  flex w-full h-[64px] items-center bg-[#fff] pt-[20px] pr-[45px] pb-[22px] pl-[28px] rounded-[10px] shadow-md'>
         sales@onefarmtech.com   
       </div>
  </div>

    </div>
      


    </div>
  );
};

export default RetailerOrderDetails;
