import { useState, useEffect} from "react";
import { Input, Radio } from "@material-tailwind/react";
import CartProduct from "../components/dashboardComp/CartProduct";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PaystackButton } from "react-paystack"
import ShoppingCart from "../js/Cart";
import Swal from "sweetalert2";


const Cart = () => {
  
  const userId = localStorage.getItem('userId');
  const cart = new ShoppingCart(userId);
  const [cartItems, setCartItems] = useState(new ShoppingCart(userId).getCartItems());

  useEffect(() => {
    // Retrieve cartItems from localStorage
    const userId = localStorage.getItem('userId');
    const items = localStorage.getItem(`cartItems_${userId}`);
    const parsedItems = JSON.parse(items) || [];
    setCartItems(parsedItems);
  },[setCartItems]);

  

const handleRemoveFromCart = (itemId) => {
    cart.removeFromCart(itemId);
    setCartItems(cart.getCartItems());
  };

  const handleAddToCart = (item) => {
    cart.addToCart(item);
    setCartItems(cart.getCartItems());
  };

console.log(userId);
  console.log(cart.getCartItems());
console.log(cart.getTotalAmount());
  const [selectedPayment, setSelectedPayment] = useState("flutterwave");
  // const handlePayment = () => {
  //   // Perform payment processing based on the selected payment option
  //   if (selectedPayment === "paystack") {
  //     // Call Paystack payment processing logic
  //     console.log("Processing payment with Paystack...");
  //   } else if (selectedPayment === "flutterwave") {
  //     // Call Flutterwave payment processing logic
  //     console.log("Processing payment with Flutterwave...");
  //   }
  //   // Add additional payment gateways as needed

  //   // After payment processing, you can redirect or perform other actions
  // };
  const publicKey = "pk_test_d59dabde8abe1d35102b70be0c2e19760ece0c65"
  const delivery = 2000;

  let amount = (cart.getTotalAmount()+ delivery);

  const [email, setEmail] = useState("")

  const [name, setName] = useState("")

  const [phone, setPhone] = useState("")
  const componentProps = {

    email,

    amount,

    metadata: {

      name,

      phone,

    },

    publicKey,

    text: "Place Order",
    className: "text-white px-5 lg:px-9 bg-green-30 py-3 mt-8 self-stretch",

    onSuccess: () =>

      alert("Thanks for doing business with us! Come back soon!!"),

    onClose: () => alert("Wait! Don't leave :("),

  }
  

 
  return (
    <section className="px-[4%] py-4 flex flex-col md:flex-row gap-8 w-full h-full">
      <div className="flex flex-col gap-5 flex-1">
      {cartItems.map((item) => (
          <CartProduct key={item.id} item={item} onRemove={handleRemoveFromCart} onAddMore={handleAddToCart} />
        ))}
      </div>

      <div className="flex-1">
        <h2>Checkout</h2>

        <div className="rounded-lg shadow-md bg-white p-4 h-auto flex flex-col gap-1">
          <section
            action="#"
            className="flex flex-col gap-6 py-2 border-b pb-7 border-black-50"
          >
            <details className="">
              <summary className="font-medium text-xl flex justify-between items-center list-none">
                <h3 className="text-green-50">Contact Information</h3>
                <MdOutlineKeyboardArrowDown
                  size={25}
                  className="text-black-100"
                />
              </summary>
              <div className="h-auto flex flex-col gap-4 pt-5">
                <Input label="Your Name" name="name" id="name"  onChange={(e) => setName(e.target.value)} className="w-full pl-4" size="lg" />
                <Input
                  id="email"
                  name="email"
                  label="Email Address"
                  type="email"
                  className="w-full pl-4"
                  size="lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  id="phone"
                  name="phone"
                  label="Phone Number"
                  type="tel"
                  className="w-full pl-4"
                  size="lg"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </details>

            <details className="">
              <summary className="font-medium text-green-60 text-xl flex justify-between items-center list-none">
                <h3 className="text-green-60">Delivery Options</h3>
                <MdOutlineKeyboardArrowDown
                  size={25}
                  className="text-black-100"
                />
              </summary>
              <div className="h-auto flex flex-col gap-1 pt-5 ">
                <Radio
                  className="!font-normal text-green-60"
                  name="delivery"
                  color="green"
                  size="lg"
                  label="Pick-up Station"
                />
                <Radio
                  className="!font-normal text-green-60"
                  name="delivery"
                  color="green"
                  size="lg"
                  label="Door Delivery (Abuja only)"
                  defaultChecked
                />
              </div>
            </details>

            <details className="">
              <summary className="font-medium text-xl flex justify-between items-center list-none">
                <h3 className="text-green-50">Shipping Address</h3>
                <MdOutlineKeyboardArrowDown
                  size={25}
                  className="text-black-100"
                />
              </summary>
              <div className="h-auto flex flex-col gap-4 pt-5">
                <Input
                  label="Your Shipping Address"
                  className="w-full pl-4"
                  size="lg"
                />
                <button className="text-white px-5 lg:px-9 bg-green-30 py-3">
                  Confirm Address
                </button>
              </div>
            </details>

            <details className="">
              <summary className="font-medium text-xl flex justify-between items-center list-none">
                <h3 className="text-green-50">Promo Code</h3>
                <MdOutlineKeyboardArrowDown
                  size={25}
                  className="text-black-100"
                />
              </summary>
              <div className="h-auto flex flex-col gap-4 pt-5 relative">
                <Input
                  label="Enter Promo Code"
                  className="w-full pl-4"
                  size="lg"
                />
                <button className="text-white px-5 lg:px-9 bg-green-30 flex items-center justify-center h-[44px] absolute right-0 top-5">
                  Apply
                </button>
              </div>
            </details>
          </section>

          <section className="flex flex-col gap-6 border-b py-6 border-black-50 text-xl">
            <div className="flex justify-between items-center">
              <p  className="text-green-50">Subtotal</p>
              <h2 className="font-semibold  text-green-50 naira-sign">{cart.getTotalAmount().toLocaleString()}</h2>
            </div>

            <div className="flex justify-between items-center">
              <p  className="text-green-50">Delivery Fee</p>
              <h2 className="font-semibold  text-green-50 naira-sign">{delivery.toLocaleString()}</h2>
            </div>

            <div className="flex justify-between items-center">
              <p  className="text-green-50">Total</p>
              
              <h2 className="font-semibold text-green-30 naira-sign">{(cart.getTotalAmount() + delivery).toLocaleString()}</h2>
            </div>
          </section>

          <section className="flex flex-col gap-6 py-6 text-xl  text-green-60 font-semibold">
            <div className="h-auto flex flex-col gap-1 pt-5">
              <Radio
                className="text-green-60 font-semibold"
                name="delivery"
                value="paystack"
                checked={selectedPayment === "paystack"}
                onChange={() => setSelectedPayment("paystack")}
                color="green"
                size="lg"
                label="Pay with Paystack"
              />
              <Radio
                className="text-green-60 font-semibold"
                name="delivery"
                value="flutterwave"
                checked={selectedPayment === "flutterwave"}
                onChange={() => setSelectedPayment("flutterwave")}
                color="green"
                size="lg"
                label="Pay with Flutterwave"
                defaultChecked
              />
            </div>
          </section>
          {/* <button
            className="text-white px-5 lg:px-9 bg-green-30 py-3 mt-8 self-stretch"
            type="submit"
            onClick={handlePayment}
          >
            Place Order
          </button> */}
           <PaystackButton {...componentProps} />
        </div>
      </div>
    </section>
  );
};

export default Cart;
