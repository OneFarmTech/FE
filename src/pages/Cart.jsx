import { Input, Radio } from "@material-tailwind/react";
import CartProduct from "../components/dashboardComp/CartProduct"
import { MdOutlineKeyboardArrowDown } from "react-icons/md"

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

        <form className="rounded-lg shadow-md bg-white p-4 h-auto flex flex-col gap-1">
          <section action="#" className="flex flex-col gap-6 py-2 border-b pb-7 border-black-50">
            <details className="">
              <summary className="font-semibold text-xl flex justify-between items-center list-none">
                <h3>Contact Information</h3>
                <MdOutlineKeyboardArrowDown size={25} className="text-black-100" />
              </summary>
              <div className="h-auto flex flex-col gap-4 pt-5">
                <Input label="Your Name" className="w-full pl-4" size="lg" />
                <Input label="Email Address" type="email" className="w-full pl-4" size="lg" />
                <Input label="Phone Number" type="tel" className="w-full pl-4" size="lg" />
              </div>
            </details>

            <details className="">
              <summary className="font-semibold text-xl flex justify-between items-center list-none">
                <h3>Delivery Options</h3>
                <MdOutlineKeyboardArrowDown size={25} className="text-black-100" />
              </summary>
              <div className="h-auto flex flex-col gap-1 pt-5">
                <Radio className="!font-normal" name="delivery" color="green" size="lg" label="Pick-up Station" />
                <Radio className="!font-normal" name="delivery" color="green" size="lg" label="Door Delivery (Abuja only)" defaultChecked />
              </div>
            </details>

            <details className="">
              <summary className="font-semibold text-xl flex justify-between items-center list-none">
                <h3>Shipping Address</h3>
                <MdOutlineKeyboardArrowDown size={25} className="text-black-100" />
              </summary>
              <div className="h-auto flex flex-col gap-4 pt-5">
                <Input label="Your Shipping Address" className="w-full pl-4" size="lg" />
                <button className="text-white px-5 lg:px-9 bg-green-30 py-3">Confirm Address</button>
              </div>
            </details>

            <details className="">
              <summary className="font-semibold text-xl flex justify-between items-center list-none">
                <h3>Promo Code</h3>
                <MdOutlineKeyboardArrowDown size={25} className="text-black-100" />
              </summary>
              <div className="h-auto flex flex-col gap-4 pt-5 relative">
                <Input label="Enter Promo Code" className="w-full pl-4" size="lg" />
                <button className="text-white px-5 lg:px-9 bg-green-30 flex items-center justify-center h-[44px] absolute right-0 top-5">Apply</button>
              </div>
            </details>
          </section>

          <section className="flex flex-col gap-6 border-b py-6 border-black-50 text-xl">
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <h2 className="font-bold">N56,352</h2>
            </div>

            <div className="flex justify-between items-center">
              <p>Delivery</p>
              <h2 className="font-bold">N56,352</h2>
            </div>

            <div className="flex justify-between items-center">
              <p>Total</p>
              <h2 className="font-bold text-green-30">N56,352</h2>
            </div>
          </section>

          <section className="flex flex-col gap-6 py-6 text-xl">
              <div className="h-auto flex flex-col gap-1 pt-5">
                <Radio className="!font-normal" name="delivery" color="green" size="lg" label="Pay with Paystack" />
                <Radio className="!font-normal" name="delivery" color="green" size="lg" label="Pay with Flutterwave" defaultChecked />
              </div>
          </section>
          <button className="text-white px-5 lg:px-9 bg-green-30 py-3 mt-8 self-stretch" type="submit">Place Order</button>
        </form>
      </div>
    </section>
  )
};

export default Cart;
