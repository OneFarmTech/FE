import { BiSearchAlt2 } from "react-icons/bi";
import products from "../js/productsList";
import Product from "../components/WaitingList/Product";
import BuyPop from "../components/WaitingList/BuyPop";
import { useState } from "react";

const Products = () => {
  const [pop, setPop] = useState(false);
  const [search, setSearch] = useState('');
  const [listOfProducts, setList] = useState(products);

  const handleSearch = () => {
    let word = search.toLowerCase();
    setList(products.filter((product) => ((product.name.toLowerCase()).includes(word))));
  }

  const handleChange = (e) => {
    setSearch(e.currentTarget.value);
    handleSearch();
  }

  const closeBuy = () => {
    setPop(false);
    document.body.classList.toggle('overflow-hidden');
  };

  const openBuy = () => {
    setPop(true);
    document.body.classList.toggle('overflow-hidden');
  }

  return (
    <main className="bg-[#f2f2f2] min-h-screen">
      <div className="pl-3 bg-transparent border border-[#374E61] rounded-lg w-fit m-auto flex gap-2 items-center">
        <BiSearchAlt2 size={20} />
        <input onChange={handleChange} type="search" className="border-none bg-transparent md:w-80" placeholder="Search" value={search} />
        <button onClick={handleSearch} className="inline-block px-10 py-3 rounded-lg bg-green-30 text-green-10">Search</button>
      </div>

      <section className="flex flex-wrap gap-14 m-auto max-w-7xl justify-center my-8 py-2">

        {
          listOfProducts.map((product) => (
            <Product key={product.name} name={product.name} image={product.img} measure={product.measure} openBuy={openBuy} />
          ))
        }
      </section>
      {pop && <BuyPop closeBuy={closeBuy} />}
    </main>
  )
};

export default Products;
