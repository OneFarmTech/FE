import PropTypes from 'prop-types';

const Product = (props) => {
  const { name, measure, openBuy, image } = props;

  return (
    <article className="bg-white rounded-lg p-3 flex flex-col items-center gap-2 w-64">
      <figure className="w-[50%] rounded-lg bg-black-30 h-auto min-h-[100px] overflow-hidden">
        <img src={image} alt="" />
      </figure>

      <h2 className="text-lg">{name}</h2>
      <p className="text-sm">(487 baskets sold)</p>
      <h3 className="text-lg font-semibold uppercase">{measure}</h3>

      <button className="bg-green-30 rounded-md text-lg font-semibold text-white py-3 px-10" onClick={openBuy}>Buy this product</button>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string,
  measure: PropTypes.string,
  openBuy: PropTypes.func,
  image: PropTypes.any,
}

export default Product;
