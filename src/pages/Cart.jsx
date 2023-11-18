import CartProduct from "../components/dashboardComp/CartProduct"

const Cart = () => {
  return (
    <section className="px-[4%] py-4 flex flex-col lg:flex-row gap-8 w-full h-full">
      <div className="flex flex-col gap-5 flex-1">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>

      <div className="flex-1">
        <h2>Checkout</h2>

        <div></div>
      </div>
    </section>
  )
};

export default Cart;
