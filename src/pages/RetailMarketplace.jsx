import { useState } from "react";
import RetailTop from "../components/marketplace/RetailMarketplaceTop";
import RetailProduct from "../components/marketplace/RetailProd";

const RetailMarketplace = () => {
  const [switchProd, setSwitch] = useState(false);

  const switchFruits = () => {
    setSwitch(true);
  }

  const switchVegetables = () => {
    setSwitch(false);
  }

  return (
    <section className="px-[4%] py-4 flex flex-col w-full h-full">
      <RetailTop />

      <div className="flex flex-col gap-4 mt-14">
        <h2 className="text-2xl font-bold">Your Products</h2>

        <div className="flex gap-3">
          <h3 className={`p-5 px-14 after:h-1 after:w-full ${switchProd ? 'after:bg-black-50 text-black-50' : 'after:bg-green-30 text-green-30'} relative after:absolute after:bottom-0 after:left-0`} onClick={switchVegetables}>Vegetables</h3>
          <h3 className={`p-5 px-14 after:h-1 after:w-full ${!switchProd ? 'after:bg-black-50 text-black-50' : 'after:bg-green-30 text-green-30'} relative after:absolute after:bottom-0 after:left-0`} onClick={switchFruits}>Fruits</h3>
        </div>

         {/*Fruits  */}
         { !switchProd &&
          (<div className="flex flex-wrap gap-5">
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
          </div>)
        }

         {/*Fruits  */}
        { switchProd &&
          (<div className="flex flex-wrap gap-5">
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
            <RetailProduct />
          </div>)
        }
      </div>
    </section>
  )
};

export default RetailMarketplace;
