import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ApprovedOrders = () => {
  const [approvedOrders, setApprovedOrders] = useState([]);

  //use eeffect to call and filter approved orders
  useEffect(() => {
    const fetchApprovedOrders = async () => {
      const userId = localStorage.getItem('userId')
      try {
        const response = await axios.get(import.meta.env.VITE_API_URL + 'orders', {
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem('token')}`
          },
        });
        const filteredOrders = response.data.filter(order => order.product.user_id === parseInt(userId));
        const approvedOrdersData = filteredOrders.filter(order => order.status === 'Approved');

           // Group orders by order ID
  const groupedOrders = {};
        approvedOrdersData.forEach(order => {
          if (!groupedOrders[order.order_id]) {
            groupedOrders[order.order_id] = [];
          }
          groupedOrders[order.order_id].push(order);
        });
        
        // Convert object to array of arrays
        const groupedOrdersArray = Object.values(groupedOrders);
        
        // Update state
        setApprovedOrders(groupedOrdersArray);
       
      console.log(filteredOrders);

      } catch (error) {
        console.error('Error fetching approved orders:', error);
      }
    };

    fetchApprovedOrders();
  }, []);

  // Function to format date
const getFormattedDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

{/****************************************************************JSX section**************************************************************/}
 
return (
    <div>
      <h2 className='text-2xl ml-10 mb-8 font-bold'>Approved Orders</h2>
      <table className='overflow-x-auto bg-white w-[94%] mx-auto h-auto rounded-[10px]  hidden md:table'>
        <thead>
          <tr className='flex py-[20px] px-[5px] md:py-[20px] w-[98%] 
          gap-[20px] mx-auto h-auto items-center mb-4 flex-shrink-0 rounded-[10px] font-semibold tracking-normal xl:tracking-wide leading-normal underline justify-between'>
            <td className=' font-bold '>Customer</td>
            <td className=' font-bold '>Product</td>
            <td className=' font-bold '>Order ID</td>
            <td className=' font-bold '>Quantity</td>
            <td className=' font-bold '>Price</td>
            <td className=' font-bold '>Date of Order</td>
            <td className=' font-bold '>Status</td>
          </tr>
        </thead>
        <tbody>
        {approvedOrders.map((groupedOrder, index) => (
            <tr key={index} className=' flex py-[20px] px-[5px] md:py-[20px]
            gap-[20px] mx-auto w-[98%] h-auto items-center mb-4 rounded-[10px] bg-[#FBFBFB] justify-between'>

            <td>{groupedOrder[0].buyer.firstname} {groupedOrder[0].buyer.lastname} </td>
              <td>{groupedOrder[0].product.name}</td>
              <td className='text-green-30'> <Link to={`/dashboard/orders/${groupedOrder[0].order_id}`}>
              {groupedOrder[0].order_id}
                </Link></td>
              <td>{groupedOrder[0].quantity}</td>
              <td className='naira-sign'>{groupedOrder[0].cost.toLocaleString()}</td>
              <td>{getFormattedDate(groupedOrder[0].created_at)}</td>
              <td className='text-green-30'>{groupedOrder[0].status}</td>
            </tr>
          ))}
        </tbody>
      </table>


      {/* Mobile view */}


      <div className='md:hidden flex flex-col gap-4'>
        {approvedOrders.map((groupedOrder, index) => (
          <Link to={`/dashboard/orders/${groupedOrder[0].order_id}`}  title='click here to Approve Order' key={index} className='w-[80%] flex mb-10 flex-col gap-2 p-6 mx-auto bg-white rounded-[10px] h-auto flex-shrink-0 border-[0.5px] border-[#7B7B7B]'>
            <div className='flex gap-4 justify-between'>
              <p className='font-lato text-[16px] font-bold tracking-[0.255px] underline text-[#0D1821]' >Name:</p>
              <p className='text-[14px]'>{groupedOrder[0].buyer.firstname} {groupedOrder[0].buyer.lastname}</p>
            </div>
            <div className='flex gap-5 justify-between'>
              <p className='font-lato text-[16px]  font-bold tracking-[0.255px] underline text-[#0D1821]'>Product:</p>
              <p className='text-[14px]'>{groupedOrder[0].product.name}</p>
            </div>
            <div className='flex gap-5 justify-between'>
              <p className='font-lato  text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Order ID:</p>
              <p className='text-[14px]'>{groupedOrder[0].order_id}</p>
            </div>
            <div className='flex gap-5 justify-between'>
              <p className='font-lato  text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Quantity:</p>
              <p className='text-[14px]'>{groupedOrder[0].quantity}</p>
            </div>
            <div className='flex gap-5 justify-between'>
              <p className='font-lato text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Price:</p>
              <p className='naira-sign text-[14px]'>{groupedOrder[0].cost.toLocaleString()}</p>
            </div>
            <div className='flex gap-5 justify-between'>
              <p className='font-lato text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Date:</p>
              <p className='text-[14px]'>{getFormattedDate(groupedOrder[0].created_at)}</p>
            </div>
            <div className='flex gap-5 justify-between'>
              <p className='font-lato text-[14px] font-bold tracking-[0.255px] underline text-[#0D1821]'>Status:</p>
              <p className='text-[14px] text-green-30'>{groupedOrder[0].status}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ApprovedOrders;
