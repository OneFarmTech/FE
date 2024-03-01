import { useEffect, useState } from "react";
import ProductItem from "../components/marketplace/ProductItem";
import TopSection from "../components/marketplace/TopSection";
import RetailTop from "../components/marketplace/RetailMarketplaceTop";
import RetailProduct from "../components/marketplace/RetailProd";
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
        console.log(data[0].id);
        setProducts(data); // Set the state using setMyProducts
      })
      .catch((error) => {
        console.log(error);
      });

    client
      .get("myproducts")
      .then((data) => {
        console.log(data[0].id);
        setMyProducts(data); // Set the state using setMyProducts
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <section className="px-[4%] py-2 flex gap-10 lg:gap-0 flex-col h-auto ">
   <div className="h-auto mb-40 lg:mb-0 flex flex-col lg:m-0 lg:items-stretch m-auto ">
        <TopSection />
        </div>
        <div className="flex flex-col w-full h-auto">

      <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:gap-10">
        <div className="flex flex-col gap-8 w-full max-w-[42rem]">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Your Products</h2>
            <button className="underline text-base">View more</button>
          </div>

          <div className="overflow-auto">
            <div className="flex flex-col h-[800px] items-start gap-6 gap-y-8 flex-wrap">
              {myProducts.map((product) => (
                <ProductItem key={product.id} data={product} />
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
