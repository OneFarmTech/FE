import mango from "../../assets/images/dashboard/mango.png"

const CartProduct = ({ item }) => {
  return (
    <article className="bg-white rounded-lg shadow-md flex gap-5 items-center lg:gap-8 p-3 pt-10 relative">
      <button className="absolute top-2 right-4 capitalize text-base font-semibold bg-transparent text-red-50">remove</button>
      <figure className="w-2/5">
        <img src={item.image} alt="Product" />
      </figure>
  
      <div className="lg:w-3/5 flex flex-col gap-3">
        <h1 className="font-semibold text-3xl">{item.name}</h1>
        <p className="text-xl">2kg per basket</p>
        <div className="flex gap-4 items-center">
          <h3 className="font-semibold text-2xl">#{item.cost}</h3>
          <h4 className="font-semibold text-xl line-through italic text-black-50">#8,500</h4>
          <h5 className="text-white bg-green-200 rounded p-1">-12%</h5>
        </div>
      </div>
    </article>
  )
};

export default CartProduct;
