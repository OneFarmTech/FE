import { useEffect, useState } from "react";
import ProductItem from "../components/marketplace/Product";
import TopSection from "../components/marketplace/TopSection";
import RetailTop from "../components/marketplace/RetailMarketplaceTop";
import RetailProduct from "../components/marketplace/RetailProd";
import { useOutletContext } from "react-router-dom";
import QueryClient from "../js/QueryClient";

const MarketPlace = () => {
  const [changeHeading, resetHeading] = useOutletContext();
  const [myProducts, setMyProducts] = useState([]);
  const [Products, setProducts] = useState([]);
  
  let role = sessionStorage.getItem('role');

  useEffect(() => {
    changeHeading("MarketPlace");
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
    <section className="px-[4%] py-4 flex flex-col w-full h-full">
       {role === 'retailer' ? (
       <RetailTop />
      ) : (
        <TopSection />
      )}
     

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
        {role === 'retailer' ? (
     ''
      ) : (
        <div className="flex flex-col gap-5 w-full max-w-[27rem] lg:pt-10">
       <div className="flex justify-between items-center">
         <h2 className="text-2xl font-bold">Market Insights</h2>
         <button className="underline text-base">View more</button>
       </div>

       <div className="p-5 bg-white shadow-md rounded-md">
         <ul className="flex flex-col gap-3">
           <li>
             Demand for rice{" "}
             <span className="text-green-30">(High 30%)</span>
           </li>
           <li>
             Demand for sugarcane{" "}
             <span className="text-green-30">(High 92%)</span>
           </li>
           <li>
             Demand for palm oil{" "}
             <span className="text-orange-30">(High 8%)</span>
           </li>
           <li>
             Demand for corn <span className="text-red-50">(Low -0.9%)</span>
           </li>
         </ul>
       </div>
     </div>
      )}
        
      </div>
    </section>
  );
};

export default MarketPlace;
