/* eslint-disable react/prop-types */
import ShoppingCart from "/src/js/Cart.js";

const RetailProductItem = ({ data }) => {


  const Shop = new ShoppingCart(); // Initialize the ShoppingCart

  const handleAddToCart = (item) => {
    Shop.addToCart(item)
    window.location.href="/dashboard/cart";
  };

  const displayCost = () => {
    // Check the product class to determine the cost display format
    if (data.name === 'Strawberry') {
      return `${Number(data.cost).toLocaleString()}/kg`;
    } else if (data.name === 'Irish Potato') {
      return `${Number(data.cost).toLocaleString()}/bag`;
    } else {
      return `${Number(data.cost).toLocaleString()}/unit`; // Default display if no product class is specified
    }
  };

  return (
    <div className="rounded-md shadow-md p-3 bg-white flex flex-col gap-4 lg:w-72">
      <figure className="w-[90%] lg:w-[68%] h-32 bg-black-15 self-center">
      <img src={data.images[0].image || ''} alt={data.name} loading="lazy"/>

      </figure>

      <div className="pl-6 flex flex-col gap-3">
        <h2>{data.name}</h2>
        <h2 className="text-green-30 naira-sign">{displayCost()}</h2>


      {/*<p className="text-black-50 text-sm">{data.description}</p> */}
      </div>
      <button  onClick={() => handleAddToCart(data)} className="bg-green-30 text-white py-3" >
       Add to Cart
       </button>
      
      <button className="border border-red-50 text-red-50 py-3" > <a href={`viewproduct/${data.id}`} >View Product
      </a></button>
      </div>
  )
};

export default RetailProductItem;
