import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import QueryClient from "../js/QueryClient";
import ShoppingCart from "../js/Cart";




const ViewProduct = () => {
  const [switchProd, setSwitch] = useState(false);
  const [product, setProduct] = useState({});
  const  { productId }  = useParams();
  const [startIndex, setStartIndex] = useState(0);
  
  
  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
    const client = new QueryClient(authToken);

    const fetchData = async () => {
      try {
        const data = await client.get(`products/${productId}/find`);
        console.log(data[0].images);
          
        // Handling images
        
        setProduct(data[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [productId]);

  {/*
  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
    const client = new QueryClient(authToken);

    const fetchData = async () => {
      try {
        const dataArray = await client.get(`products/${productId}/find`);
        const data = dataArray[0];

        // Handling images
        const imagesArray = data.images.map((imageObj) => imageObj.image);
        setProduct({ ...data, images: imagesArray });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [productId]);*

{/*console.log(product);*/}
const nextPic = () => {
  setStartIndex((index) => (index + 3 >= product.images.length ? 0 : index + 3));
};

const prevPic = () => {
  setStartIndex((index) => (index - 3 < 0 ? product.images.length - (product.images.length % 3 || 3) : index - 3));
};

  const switchFruits = () => {
    setSwitch(true);
  }

  const switchVegetables = () => {
    setSwitch(false);
  }

  const userId = localStorage.getItem('userId');
  const Shop = new ShoppingCart(userId); // Initialize the ShoppingCart

  const handleAddToCart = (item) => {
    Shop.addToCart(item)
    window.location.href="/dashboard/cart";
  
  };

  const displayCost = () => {
    // Check if product and product.name are defined
    if (product && product.name) {
      const lowerCaseName = product.name.toLowerCase();
  
      // Check the product class to determine the cost display format
      if (lowerCaseName === 'strawberry') {
        return `${Number(product.cost).toLocaleString()}/kg`;
      } else if (lowerCaseName === 'irish potato') {
        return `${Number(product.cost).toLocaleString()}/bag`;
      } else {
        return `${Number(product.cost).toLocaleString()}/unit`; // Default display if no product class is specified
      }
    } else {
      // Handle the case where product or product.name is undefined
      return 'N/A';
    }
  };

  return (
    <section className=" py-4 flex flex-col w-full h-full gap-8">
      <div className="flex flex-col lg:flex-row gap-0">
        
        <div className="flex flex-col gap-6 lg:w-4/12 pl-[2%]">
          <figure className="w-9/12 rounded-3xl overflow-hidden ml-6">
          {product.images?.[0] && (
    <img src={product.images[0].image || ""} alt={product.name} />
      )}
     </figure>

     <div className="flex gap-5 items-center w-4/5 ml-6">
          <div className="text-black-25 cursor-pointer" onClick={prevPic}>
            <IoIosArrowBack size={30} />
          </div>
          <ul className="flex gap-2">
          {product.images?.slice(startIndex, startIndex + 3).map((image, index) => (
              <li className="rounded-md overflow-hidden flex-1" key={index} style={{ width: "calc(100% / 3)" }}>
                <img src={image.image || ""} alt={product.name} className="rounded-md" style={{ width: "95%", height:"90%", }} />
              </li>
            ))}
          </ul>
          <div className="text-black-25 cursor-pointer" onClick={nextPic}>
            <IoIosArrowForward size={30} />
          </div>
        </div>
</div>
       

        <div className="lg:w-1/2 flex flex-col gap-3 lg:gap-6 px-[4%] lg:px-0 lg:py-4">
          <h1 className="text-lg lg:text-2xl font-semibold capitalize">{product.name}</h1>
          {/*<p className="text-2xl">Product Quantities</p>*/}
          <div className="flex gap-6 items-center">
            <h3 className="font-medium text-xl naira-sign">{displayCost()}</h3>
            <h5 className="text-white bg-green-200 rounded p-1">-12%</h5>
          {/*  <h4 className="font-semibold text-2xl line-through italic text-black-50">#8,500</h4>
            <h5 className="text-white bg-green-200 rounded p-1">-12%</h5>*/}
          </div>
          <p className="text-2xl">Shipping from Pankshin, Jos</p>
          <button onClick={() => handleAddToCart(product)} className="text-white w-4/5 bg-green-30 py-3 text-xl rounded-full">Add To Cart</button>

        </div>
      </div>

      <div className="pl-[2%]">
        <div className="flex gap-3 pb-4 ">
          <h3 className={`p-5 px-14 after:h-1 after:w-full ${switchProd ? 'after:bg-black-50 text-black-50' : 'after:bg-green-30 text-green-30'} relative after:absolute after:bottom-0 after:left-0`} onClick={switchVegetables}>Description</h3>
          <h3 className={`p-5 px-14 after:h-1 after:w-full ${!switchProd ? 'after:bg-black-50 text-black-50' : 'after:bg-green-30 text-green-30'} relative after:absolute after:bottom-0 after:left-0`} onClick={switchFruits}>Rating</h3>
        </div>

         {/*Fruits  */}
         { !switchProd &&
          (<div className="flex flex-col gap-8">
            <p>{product.description}</p>
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
