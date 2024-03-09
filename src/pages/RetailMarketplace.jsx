// RetailerMarketPlace.jsx
import { useEffect, useState } from "react";
import RetailProductItem from "../components/marketplace/RetailProductItem";
import RetailTop from "../components/marketplace/RetailMarketplaceTop";
import { useOutletContext } from "react-router-dom";
import QueryClient from "../js/QueryClient";

const RetailerMarketPlace = () => {
  const [changeHeading, resetHeading] = useOutletContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    changeHeading("Retailer's MarketPlace");
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
        setProducts(data);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section className="">
      <div className=" h-auto mb-0 flex flex-col content-between items-stretch m-auto">
        <RetailTop />
      </div>
      <div className="overflow-x-hidden flex flex-col w-full h-auto px-[2%] py-2 gap-5 lg:gap-0">
        {/* Display Retailer Products */}
        <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:gap-10">
          <div className=" flex flex-col gap-8 sm:w-full md:w-full">
            <div className="flex justify-between items-center ml-2">
              <h2 className="text-2xl font-bold">Products Catalog</h2>
             {/* <button className="underline text-base">View more</button>*/}
            </div>
            <div className="">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center ">
                {products.map((product) => (
                  <RetailProductItem key={product.id} data={product} className="flex-shrink-0 w-full mb-8 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 px-10"/>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetailerMarketPlace;
