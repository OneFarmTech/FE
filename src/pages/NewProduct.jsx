import { useEffect, useRef, useState } from "react";
import dummy from "../assets/images/dashboard/dummyimg.svg";
import { useOutletContext } from "react-router-dom";

const NewProduct = () => {
  const productImage = useRef(null);
  const [ productDetails, setDetails ] = useState({
    name: '',
    cost: '',
    image: null,
    desc: ''
  });
  const [changeHeading, resetHeading] = useOutletContext();

  useEffect(() => {
    changeHeading('Upload Product');
    return () => {
      resetHeading();
    }
  });

  const handleChange = (e) => {
    let newKey = e.currentTarget.name;
    let val = e.currentTarget.value;

    setDetails((state) => ({...state, [newKey]: val}));
  }

  const clickRedirect = (e) => {
    e.preventDefault();
    productImage.current?.click();
  }

  const changeImage = (e) => {
    let newfile = URL.createObjectURL(e.currentTarget.files[0]);
    setDetails((state) => ({...state, image: newfile}))
  }

  return (
    <form action="" className="flex flex-col gap-16 bg-transparent px-[4%] py-4 w-full h-full">
      <div className="flex flex-col gap-5 lg:gap-9 lg:flex-row w-full">
        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="name" className="font-bold text-lg">Name of Product</label>
          <div className="bg-white p-4 rounded-md shadow-md flex w-full">
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full" type="text" required id="name" name="name" placeholder="Enter Name of Product" value={productDetails.name} onChange={handleChange} />
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="cost" className="font-bold text-lg">Cost of Product</label>
          <div className="bg-white p-4 rounded-md shadow-md flex w-full">
            <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full" type="text" required id="cost" name="cost" placeholder="Enter Cost of Product" value={productDetails.cost} onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:gap-9 lg:flex-row w-full items-stretch">
        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="name" className="font-bold text-lg">Product Image</label>
          <div className="bg-white p-10 rounded-md shadow-md flex flex-col items-center gap-5 w-full">
            <figure>
              <img src={dummy} alt="" />
            </figure>
            <input ref={productImage} type="file" hidden accept="image/*" onChange={changeImage} />
            <button onClick={clickRedirect} className="bg-white text-green-30 border border-green-30 px-20 py-2 font-bold text-sm">Upload product image</button>
          </div>
        </div>

        <div className="flex flex-col gap-3 w-full">
          <label htmlFor="name" className="font-bold text-lg">Product Description</label>
          <div className="bg-white p-4 rounded-md shadow-md flex w-full">
            <textarea name="desc" id="" className="pl-3 bg-transparent border border-[#C7CDD2] p-3 w-full h-60" placeholder="What is your product about?" value={productDetails.desc} onChange={handleChange}></textarea>
          </div>
        </div>
      </div>

      <button className="bg-green-30 px-20 md:px-32 py-5 self-center font-bold text-xl text-white disabled:bg-black-50" disabled={productDetails.name == '' || productDetails.cost == '' || productDetails.desc == '' || productDetails.image == null}>Upload your product</button>
    </form>
  );
}

export default NewProduct;
