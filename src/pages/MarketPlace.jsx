import { useEffect, useState } from "react";
import ProductItem from "../components/marketplace/ProductItem";
import TopSection from "../components/marketplace/TopSection";
import { useOutletContext } from "react-router-dom";
import QueryClient from "../js/QueryClient";

import { useDispatch, useSelector } from "react-redux";


const MarketPlace = () => {
  const [changeHeading, resetHeading] = useOutletContext();
  const [myProducts, setMyProducts] = useState([]);
  const [Products, setProducts] = useState([]);

  // let role = sessionStorage.getItem('role');
  const user = useSelector((state) => (state.user));
  const { userDetails, error, role } = user;

  
  const handleDeleteProduct = (productId) => {
    setMyProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };
  
  useEffect(() => {
    changeHeading("Farmer's MarketPlace");
    return () => {
      resetHeading();
    };
  }, [changeHeading, resetHeading]);

  useEffect(() => {
    let authToken = sessionStorage.getItem("token");
    const client = new QueryClient(authToken);
    client
      .get("products")
      .then((data) => {
        setProducts(data); // Set the state using setMyProducts
      })
      .catch((error) => {
        console.log(error);
      });

    client
      .get("myproducts")
      .then((data) => {
        setMyProducts(data); // Set the state using setMyProducts
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="">
   <div className="h-auto mb-0 flex flex-col content-between items-stretch m-auto">
        <TopSection />
        </div>
        <div className="overflow-x-hidden flex flex-col w-full h-auto px-[2%] py-2 gap-5 lg:gap-0">

      <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-8 sm:w-full md:w-full">
          <div className="flex justify-between items-center ml-2">
            <h2 className="text-2xl font-bold">Your Products</h2>
            {/*<button className="underline text-base">View more</button>*/}
          </div>

          <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center ">
              {myProducts.map((product) => (
                <ProductItem key={product.id} data={product}  onDelete={handleDeleteProduct}  className="flex-shrink-0 w-full mb-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-10" />
              ))}
            </div>
          </div>
        </div>
     
      </div>
      </div>
    </section>
  );
};

export default MarketPlace;
