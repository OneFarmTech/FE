/* eslint-disable react/prop-types */
import Swal from "sweetalert2";
import { TiPlus, TiMinus } from "react-icons/ti";

const CartProduct = ({ item, onRemove, onAddMore }) => {

  const handleRemoveFromCart = () => {
    onRemove(item.id);
  };

  const handleAddToCart = () => {
    onAddMore(item);
  };

  const displayCost = () => {
    // Check the product class to determine the cost display format
    if (item.name === 'Strawberry') {
      return `${Number(item.cost).toLocaleString()}/kg`;
    } else if (item.name === 'Irish Potato') {
      return `${Number(item.cost).toLocaleString()}/bag`;
    } else {
      return `${Number(item.cost).toLocaleString()}/unit`; // Default display if no product class is specified
    }
  };


  return (
    <article className="bg-white rounded-lg shadow-md flex gap-5 items-center lg:gap-8 p-5 pt-10 relative">
      <button onClick={() => handleRemoveFromCart(item.id)} className="absolute top-2 right-4 capitalize text-base font-semibold bg-transparent text-red-50">remove</button>
      <figure className="w-2/4 md:w-2/5 lg:w-2/5 bg-white">
        <img src={item.image} alt="Product" />
      </figure>
  
      <div className="lg:w-3/5 flex flex-col gap-3 xl:gap-4 ">
        <h1 className="font-semibold text-xl capitalize">{item.name}</h1>
       {/*<p className="text-xl"> 2kg per basket</p>*/}
        <h3 className="font-medium text-lg naira-sign">{displayCost()}</h3>
        <div className="flex gap-4 items-center">
         
         {/* <h4 className="font-semibold text-xl line-through italic text-black-50">#8,500</h4>*/}
          <h5 className="text-white bg-green-200 rounded p-1">-12%</h5>
          </div>
          <div className="flex gap-3 items-center">
          <button onClick={() => handleRemoveFromCart(item.id)} className="text-black py-1 px-1 bg-green-600 rounded-md text-white"><TiMinus /></button>
          <p className="text-xl font-medium items-end">Qty: {item.quantity} </p>
          <button onClick={() => handleAddToCart(item)} className="text-black py-1 px-1 bg-green-600 rounded-md text-white"><TiPlus /></button>
          </div>
        
      </div>
    </article>
  )
};

export default CartProduct;

