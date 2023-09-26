import search from '../../assets/images/dashboard/search.svg';
import bell from '../../assets/images/dashboard/bell.svg';
import { Link } from 'react-router-dom';
import { Spinner } from '@material-tailwind/react';

const DashHeader = (props) => {
  const { title } = props;

  return (
    <header className="px-[4%] py-10 flex flex-col lg:flex-row gap-8 items-center justify-between bg-white fixed top-[110px] lg:top-0 w-full 2xl:w-[85%] z-30">
      <div className='flex justify-between items-center w-full lg:w-fit'>
        {!title ? (<Spinner />) : (<h2 className="text-black-100 text-2xl underline capitalize">{title}</h2>)}

        <div className='lg:hidden'>
          <img src={bell} alt="Notification icon" />
        </div>
      </div>
      
      <div className='flex items-center gap-14 justify-end'>
        <div className="bg-black-15 px-9 rounded-xl lg:rounded-[50px] h-14 w-auto min-w-md flex gap-3 items-center">
          <label className='w-6'>
            <img src={search} alt="Search icon" />
          </label>
          <input type="search" placeholder="Search" className="bg-transparent outline-none placeholder:text-black-30" />
        </div>

        <div className='text-green-30 text-md hidden lg:block'>
          {`${new Date().toUTCString().slice(5, 16)}, ${new Date().getHours()}:${new Date().getMinutes()}`}
        </div>

        <div className='w-6 hidden lg:block'>
          <img src={bell} alt="Notification icon" />
        </div>

        <Link to='profile' className='items-center gap-2 hidden lg:flex'>
          <div className='h-14 w-14 rounded-full bg-black-30'></div>
          <h3 className='text-black-100 text-lg'>Toma John</h3>
        </Link>
      </div>
      
    </header>
  );
}

export default DashHeader;
