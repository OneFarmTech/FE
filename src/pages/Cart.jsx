import { useState, useEffect} from "react";
import { Input, Radio } from "@material-tailwind/react";
import CartProduct from "../components/dashboardComp/CartProduct";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PaystackButton } from "react-paystack"
import ShoppingCart from "../js/Cart";
import axios from "axios";
import Swal from "sweetalert2";


const Cart = () => {
  
  const userId = localStorage.getItem('userId');
  const cart = new ShoppingCart(userId);
  const [cartItems, setCartItems] = useState(new ShoppingCart(userId).getCartItems());
  const [email, setEmail] = useState("");
  const [firstname, setName] = useState("");
  const [lastname, setlastName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedDelivery, setSelectedDelivery] = useState("");
  const [shippingAddressVisible, setShippingAddressVisible] = useState(false);
  const [pickUpStation, setPickUpStation] = useState("");

  const [shippingAddress, setShippingAddress] = useState("");


  const handleDeliveryOptionChange = (option) => {
    setSelectedDelivery(option);
    setShippingAddressVisible(option === "doorDelivery");
  };




 const orderID = cart.generateOrderID();
 const selectedCartItems = cartItems ? cartItems.map(item => ({
  product_id: item.product_id,
  cost: item.cost,
  quantity: item.quantity,
  user_id: item.user_id
})) : [];

 const orderData = {
  orderID,
  cartItems: selectedCartItems,
  shipping_address:'',
  
};

const handlePlaceOrder = () => {
  // Validate all form fields including shipping address
  if (
    email == '' ||
    firstname == '' ||
    lastname == '' ||
    phone == '' ||
    selectedDelivery == '' ||
    (selectedDelivery === "doorDelivery" && !shippingAddress)
  ) {
    Swal.fire({
      title: "Error",
      text: "Please fill in all fields including shipping address",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }

};


  useEffect(() => {
    // Retrieve cartItems from localStorage
    const userId = localStorage.getItem('userId');
    const items = localStorage.getItem(`cartItems_${userId}`);
    const parsedItems = JSON.parse(items) || [];
    setCartItems(parsedItems);
  },[setCartItems]);

  useEffect(() => {
    
    fetchUserData(); 
  }, []);

  const fetchUserData = async () => {
    try {
      const token = sessionStorage.getItem("token");
      const response = await axios.get('https://api.onefarmtech.com/api/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log("Response data:", response.data);
  
      if (response.status === 200) { 
        const userData = response.data.data;
        setName(userData.user.firstname);
        setlastName(userData.user.lastname);
        setEmail(userData.user.email);
        setPhone(userData.user.phone);
      } else {
        console.error('Failed to fetch user details');
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };
  

const handleRemoveFromCart = (itemId) => {
    cart.removeFromCart(itemId);
    setCartItems(cart.getCartItems());
  };

  const handleAddToCart = (item) => {
    cart.addToCart(item);
    setCartItems(cart.getCartItems());
  };


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
  const delivery = 0;

  let amount = (cart.getTotalAmount()+ delivery);

  
  const componentProps = {

    email,

    amount,

    firstname,

    lastname,

    phone,

    shippingAddress,

    metadata: {

    

      

    },

    publicKey,

    text: "Place Order",
    className: "text-white px-5 lg:px-9 bg-green-30 py-3 mt-8 self-stretch",

    onSuccess: function() {
      
      orderData.cartItems.forEach(async (item) => {
        try {
          // Prepare order item data with orderID
          const orderItemData = {
            ...item,
            order_id: orderData.orderID,
            shipping_address:''

            
          };
          if (selectedDelivery === "pickUpStation") {
            // Handle pick-up station delivery
            orderItemData.shipping_address = pickUpStation;
          } else if (selectedDelivery === "doorDelivery") {
            // Handle door delivery
            orderItemData.shipping_address = shippingAddress;
          }
      const token = sessionStorage.getItem('token')
          // Send order item data to the order create endpoint
          const itemResponse = await axios.post('https://api.onefarmtech.com/api/orders/create', orderItemData, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
      
          if (itemResponse.status === 201) {
            console.log("Order item created successfully:", orderItemData);
            setCartItems(cart.emptyCart());
            // Update the cart items state
            
          }
        } catch (error) {
          console.error("Error creating order item:", error);
        }
      });


      Swal.fire({
        title: 'Congratulations',
        text: `You have successfully placed your order, your order ID is ${orderData.orderID}. Your order will be confirmed soon. 
        You can track your order confirmation status on the Order History tab`,
        imageUrl: '/public/sweetcheck.png',
        imageHeight: 200,
        imageWidth: 200,
        imageAlt: 'success Icon',
        showCloseButton: false,
        allowOutsideClick: false,
        focusConfirm: true,
        confirmButtonText: 'Okay',
        confirmButtonColor: '#5baa60',
      }).then((result) => {
        if (result.isConfirmed) {
          setTimeout(() => {
          
          }, 1000);
        }
      });
      
      
    },

    onClose: () => alert("Wait! Don't leave :("),

  }
  

 
  return (
    <section className="px-[4%] py-4 flex flex-col md:flex-row gap-8 w-full h-full">
      <div className="flex flex-col gap-5 flex-1">
      {cartItems ? cartItems.map((item) => (
    <CartProduct
      key={item.id}
      item={item}
      onRemove={handleRemoveFromCart}
      onAddMore={handleAddToCart}
    />
  )) : (
  <p>Your cart is empty</p>
)}
      </div>

      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-[32px] text-green-500">Checkout</h1>

        <div className="rounded-lg shadow-md bg-white p-4 h-auto flex flex-col gap-1">
          <section
            action="#"
            className="flex flex-col gap-6 py-2 border-b pb-7 border-black-50"
          >
           {/* <details className="">*/}
           <div>
              <div className="font-medium text-xl flex justify-between items-center list-none">
                <h3 className="text-green-50  font-bold">Contact Information</h3>
               
              </div>
              <div className="h-auto flex flex-col gap-4 pt-5">
                <Input label="First Name" required value={firstname} name="firstname" id="firstname"  onChange={(e) => setName(e.target.value)} className="w-full pl-4 focus:outline-green-600 border border-green-30" size="lg" />
                <Input label="Last Name" required value={lastname} name="lastname" id="lastname"  onChange={(e) => setlastName(e.target.value)} className="w-full pl-4 focus:outline-green-600 border border-green-30" size="lg" />
                <Input
                  required
                  id="email"
                  name="email"
                  value={email}
                  label="Email Address"
                  type="email"
                  className="w-full pl-4  focus:outline-green-600 border border-green-30"
                  size="lg"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  required
                  id="phone"
                  name="phone"
                  value={phone}
                  label="Phone Number"
                  type="tel"
                  className="w-full pl-4 focus:outline-green-600  active:outline-green-600 border border-green-30"
                  size="lg"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="">
              <div className="font-medium text-green-60 text-xl flex justify-between items-center list-none">
                <h3 className="text-green-60 font-bold">Delivery Options</h3>
                <MdOutlineKeyboardArrowDown
                  size={25}
                  className="text-black-100"
                />
              </div>
              <div className="h-auto flex flex-col gap-1 pt-5 ">
                <Radio
                required
                  className="!font-normal text-green-60"
                  name="delivery"
                  color="green"
                  size="lg"
                  label="Pick-up Station"
                  checked={selectedDelivery === "pickUpStation"}
                  onChange={() => handleDeliveryOptionChange("pickUpStation")}
                />
                 {selectedDelivery === "pickUpStation" && (
                  <select
                  
                    className="w-full py-2 pl-4 focus:outline-green-600 border border-green-30"
                    onChange={(e) => setPickUpStation(e.target.value)}
                  >
                    <option value=""  disabled selected>Select Your Prefered Pickup Station</option>
                    <option value="OneFarm Head Office">OneFarm Head Office - Suite No. 7, cherry hill plaza, Eke Yusuf close, behind Eterna Filling station Utako, Abuja</option>
                    <option value="God is Good Motors">God is Good Motors (GIGM) Head office, Utako, Abuja</option>
                    <option value="GUO Motors">GUO Motors, Jabi, Abuja</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Calabar">Calabar</option>
                    <option value="PortHarcourt">PortHarcort</option>
                  </select>
                )}

                <Radio
                  className="!font-normal text-green-60"
                  name="delivery"
                  color="green"

                  size="lg"
                  label="Door Delivery (Abuja only)"
                  defaultChecked={selectedDelivery === "doorDelivery"}
                  onChange={() => handleDeliveryOptionChange("doorDelivery")}
                />
              </div>
            </div>

            {shippingAddressVisible && (
              <div className="">
                <div className="font-medium text-xl flex justify-between items-center list-none">
                  <h3 className="text-green-50  font-bold">Shipping Address</h3>
                  <MdOutlineKeyboardArrowDown
                    size={25}
                    className="text-black-100"
                  />
                </div>
                <div className="h-auto flex flex-col gap-4 pt-5">
                  <Input
                  required
                    label="Your Shipping Address"
                    value={shippingAddress}
                    onChange={(e) => setShippingAddress(e.target.value)}
                    className="w-full pl-4"
                    size="lg"
                  />
                  {/*<button className="text-white px-5 lg:px-9 bg-green-30 py-3">
                    Confirm Address
            </button>*/}
                </div>
              </div>
            )}
{/*<details className="">
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
      </details>*/}
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
           <PaystackButton {...componentProps} 
           onClick={handlePlaceOrder}
           />
        </div>
      </div>
    </section>
  );
};

export default Cart;
