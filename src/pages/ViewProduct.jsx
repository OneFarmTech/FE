import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import mango from '../assets/images/dashboard/mango.png';
import mango3 from '../assets/images/dashboard/mango3.png';
import mango2 from '../assets/images/dashboard/mango2.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import QueryClient from "../js/QueryClient";
import ShoppingCart from "../js/Cart";



const ViewProduct = () => {
  const [switchProd, setSwitch] = useState(false);
  const pics = [mango, mango3, mango2];
  const [pic, setPic] = useState(0);
  const [product, setProduct] = useState({});
  const  { productId }  = useParams();
  console.log(productId);
  useEffect(() => {
   
    let authToken = sessionStorage.getItem("token");
    const client = new QueryClient(authToken);
    client
      .get(`products/${productId}/find`)
      .then((data) => {
        console.log(data.name);
        setProduct(data); // Set the state using setMyProducts
      })
      .catch((error) => {
        console.log(error);
      });

  });

  const nextPic = () => {
    setPic((state) => (state >= (pics.length - 1) ? 0 : (state + 1)))
  }

  const prevPic = () => {
    setPic((state) => (state <= 0 ? (pics.length - 1) : (state - 1)))
  }

  const switchFruits = () => {
    setSwitch(true);
  }

  const switchVegetables = () => {
    setSwitch(false);
  }

  const Shop = new ShoppingCart(); // Initialize the ShoppingCart

  const handleAddToCart = (item) => {
    Shop.addToCart(item)
    window.location.href="/dashboard/cart";
    // You can add additional logic or UI updates here
  };

  return (
    <section className="px-[4%] py-4 flex flex-col w-full h-full gap-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-7">
        <div className="flex flex-col gap-6 lg:w-2/5">
          <figure className="w-4/5 m-auto rounded-3xl overflow-hidden">
            <img src={product.image} alt="Product picture" />
          </figure>

          <div className="flex gap-5 items-center w-3/5 m-auto">
            <div className="text-black-25 cursor-pointer" onClick={prevPic}>
              <IoIosArrowBack size={30} />
            </div>
            <ul className="flex gap-2">
              { pics.map((one) => (
                <li className="rounded-md overflow-hidden flex-1" key={one}>
                  <img src={one} alt="" />
                </li>
              ))}
            </ul>
            <div className="text-black-25 cursor-pointer" onClick={nextPic}>
              <IoIosArrowForward size={30} />
            </div>
          </div>
        </div>

        <div className="lg:w-3/5 flex flex-col gap-7">
          <h1 className="font-semibold text-5xl">{product.name}</h1>
          <p className="text-2xl">2kg per basket</p>
          <div className="flex gap-4 items-center">
            <h3 className="font-semibold text-4xl">#{product.cost}</h3>
            <h4 className="font-semibold text-2xl line-through italic text-black-50">#8,500</h4>
            <h5 className="text-white bg-green-200 rounded p-1">-12%</h5>
          </div>
          <p className="text-2xl">Shipping from Pankshin, Jos</p>
          <button onClick={() => handleAddToCart(product)} className="text-white bg-green-30 py-3 text-xl">Add To Cart</button>

        </div>
      </div>

      <div>
        <div className="flex gap-3 pb-4">
          <h3 className={`p-5 px-14 after:h-1 after:w-full ${switchProd ? 'after:bg-black-50 text-black-50' : 'after:bg-green-30 text-green-30'} relative after:absolute after:bottom-0 after:left-0`} onClick={switchVegetables}>Description</h3>
          <h3 className={`p-5 px-14 after:h-1 after:w-full ${!switchProd ? 'after:bg-black-50 text-black-50' : 'after:bg-green-30 text-green-30'} relative after:absolute after:bottom-0 after:left-0`} onClick={switchFruits}>Rating</h3>
        </div>

         {/*Fruits  */}
         { !switchProd &&
          (<div className="flex flex-col gap-8">
            <p>{product.description}</p>
            {/* <p>These succulent fruits are not just a treat for your taste buds; they&apos;re also a treasure trove of nutrients. Loaded with vitamins, minerals, and antioxidants, Peter Mangoes are your ticket to a healthier lifestyle. They boost your immune system, aid digestion, and promote radiant skin.</p> */}
          </div>)
        }

         {/*Fruits  */}
        { switchProd &&
          (<div className="flex flex-wrap gap-5">
            
          </div>)
        }
      </div>
    </section>
  )
};

export default ViewProduct;
