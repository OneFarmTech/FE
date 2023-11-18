import { Link } from 'react-router-dom';
import mango from '../../assets/images/dashboard/mango.png';

const RetailProduct = () => {
  return (
    <Link to='/dashboard/viewproduct' className="flex flex-col gap-4 rounded-lg overflow-hidden bg-white w-60">
      <img src={mango} alt="" />
      <div className="flex flex-col gap-4 p-5">
        <h3 className="font-semibold text-lg">Mango</h3>
        <p className="text-lg">2kg per basket</p>
        <h4 className="font-semibold text-xl">#7,500</h4>
        <h5 className="text-black-50 line-through italic">#8,500</h5>
      </div>
    </Link>
  )
};

export default RetailProduct;
