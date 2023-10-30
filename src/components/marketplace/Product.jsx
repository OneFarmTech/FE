const ProductItem = () => {
  return (
    <article className="rounded-md shadow-md p-3 bg-white flex flex-col gap-4 w-80">
      <figure className="w-[60%] h-32 bg-black-15 self-center">
        <img src="" alt="" />
      </figure>

      <div className="font-bold flex justify-between items-center text-base">
        <h2>1 Tuber of Yam</h2>
        <h2 className="text-green-30">N950.00</h2>
      </div>

      <p className="text-black-50 text-sm">Paperback big yam</p>

      <button className="bg-green-30 text-white py-3">Edit Product</button>
      <button className="border border-red-50 text-red-50 py-3">Delete Product</button>
    </article>
  )
};

export default ProductItem;
