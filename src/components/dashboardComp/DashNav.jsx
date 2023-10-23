import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/onefarm.svg';
import logout from '../../assets/images/dashboard/logout.svg';
import market from '../../assets/images/dashboard/market.svg';
import message from '../../assets/images/dashboard/message.svg';
import pay from '../../assets/images/dashboard/pay.svg';
import profile from '../../assets/images/dashboard/profile.svg';
import support from '../../assets/images/dashboard/support.svg';
import home from '../../assets/images/dashboard/home.svg';
import { VscMenu } from 'react-icons/vsc';
import { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/register/registerSlice';

const DashNav = () => {
  const [ activeNav, setActive ] = useState(false);
  const dispatch = useDispatch();

  const openNav = () => {
    setActive(true);
  };

  const closeNav = () => {
    setActive(false);
  };

  return (
    <section className={`fixed top-0 lg:hidden 2xl:flex lg:w-[16%] w-full flex-col gap-20 2xl:left-0 ${activeNav ? 'h-full' : 'h-fit'} lg:h-full bg-white 2xl:border 2xl:border-r-2 border-black-15 p-5 z-50`}>
      <div className='flex justify-between items-center'>
        <Link to='/dashboard/home' className='block w-32 h-[15%]'>
          <img src={logo} alt="Onefarm Logo" />
        </Link>

        {!activeNav && (<div className='lg:hidden cursor-pointer' onClick={openNav}>
          <VscMenu size={25} />
        </div>)}

        
        {activeNav && (<div className='lg:hidden cursor-pointer' onClick={closeNav}>
          <GrClose size={35} />
        </div>)}        
      </div>
      <nav className={`${activeNav ? 'flex' : 'hidden'} flex-col justify-between h-[87%] 2xl:flex`}>
        <ul className='flex flex-col gap-5 pt-7'>
          <li>
            <NavLink to='home' className='flex gap-4 items-center text-green-30' onClick={closeNav}>
              <div className='w-6'>
                <img src={home} alt="Home Icon" />
              </div>  
              <h4 className='text-xl'>Home</h4>
            </NavLink>
          </li>
          <li>
            <NavLink className='flex gap-4 items-center' onClick={closeNav}>
              <div className='w-6'>
                <img src={market} alt="Market place icon" />
              </div>  
              <h4 className='text-xl text-black-50'>MarketPlace</h4>
            </NavLink>
          </li>
          <li>
            <NavLink className='flex gap-4 items-center' onClick={closeNav}>
              <div className='w-6'>
                <img src={message} alt="Messages" />
              </div>  
              <h4 className='text-xl text-black-50'>Messages</h4>
            </NavLink>
          </li>
          <li>
            <NavLink className='flex gap-4 items-center' onClick={closeNav}>
              <div className='w-6'>
                <img src={pay} alt="" />
              </div>  
              <h4 className='text-xl text-black-50'>Payment</h4>
            </NavLink>
          </li>
          <li>
            <NavLink className='flex gap-4 items-center' onClick={closeNav}>
              <div className='w-6'>
                <img src={support} alt="" />
              </div>  
              <h4 className='text-xl text-black-50'>Support</h4>
            </NavLink>
          </li>
        </ul>

        <ul className='flex flex-col gap-5'>
          <li>
            <Link to='profile' className='flex gap-4 items-center' onClick={closeNav}>
              <div className='w-6'>
                <img src={profile} alt="" />
              </div>  
              <h4 className='text-xl text-black-20'>Profile</h4>
            </Link>
          </li>
          <li>
            <Link className='flex gap-4 items-center' onClick={() => {
              closeNav();
              dispatch(clearUser());
            }}>
              <div className='w-6'>
                <img src={logout} alt="" />
              </div>  
              <h4 className='text-xl text-red-50'>Sign Out</h4>
            </Link>
          </li>

        </ul>
      </nav>
    </section>
  );
};
export default DashNav;
