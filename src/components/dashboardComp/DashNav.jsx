import { Link, NavLink,} from 'react-router-dom';
import {useNavigate } from "react-router-dom";
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
import { UserProvider, useUser} from '../contexts/UserContext.jsx';
import cart from '../../assets/images/dashboard/market.svg'


const DashNav = (props) => {
  const { userRole } = useUser();
  const { updateUserRole } = useUser();
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const { permissions } = props;
  const [activeNav, setActive] = useState(false);
  const dispatch = useDispatch();
  const userKey = localStorage.getItem('userKey');
  const can = (permission) => {
    if (permissions.includes(permission)) {
      return true;
    }
  }
  

  const redirectToMarketplace = () => {
    const Role = localStorage.getItem('userRole');
    if (Role === 'retailer') {
      navigate('/dashboard/retailmarketplace');
    } else if (Role === 'farmer') {
      navigate('/dashboard/marketplace');
    } else {
      console.log(Role);
    }
    setIsActive(true);
  };
  
   
  


  console.log(permissions);

  const openNav = () => {
    setActive(true);
  };

  const closeNav = () => {
    setIsActive(false);
  };

  const handleLogout = () => {

    closeNav();
    dispatch(clearUser());
    window.location.href = '/'
  }

  return (
    <UserProvider>
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
            <NavLink to='home' className={({ isActive }) => (isActive ? 'flex gap-4 items-center text-green-30' : 'flex gap-4 items-center text-black-50')} onClick={closeNav}>
              <div className='w-6'>
                <img src={home} alt="Home Icon" />
              </div>
              <h4 className='text-xl hover:text-green-600'>Home</h4>
            </NavLink>
          </li>
          {
            // can('read-market') ?
            <li className='active:text-green-600'>

      <button
        className={`flex gap-4 items-center text-black-50 hover:text-green-600 ${
          isActive ? 'text-green-600' : ''
        }`}
        onClick={redirectToMarketplace}
      >
        <div className="w-6">
          <img src={market} alt="Market place icon" />
        </div>
        <h4 className="text-xl hover:text-green-600">MarketPlace</h4>
      </button>
      
    </li>
          
            // : ""
          }
           {userRole !== 'farmer' && (
              <li>
                <NavLink to='cart' className={({ isActive }) => (isActive ? 'flex gap-4 items-center  text-green-30' : 'flex gap-4 items-center text-black-50')} onClick={closeNav}>
                  <div className='w-6'>
                    <img src={cart} alt="Messages" />
                  </div>
                  <h4 className='text-xl hover:text-green-600'>Cart</h4>
                </NavLink>
              </li>
            )}
          <li>
            <NavLink to='messages' className={({ isActive }) => (isActive ? 'flex gap-4 items-center  text-green-30' : 'flex gap-4 items-center text-black-50')} onClick={closeNav}>
              <div className='w-6'>
                <img src={message} alt="Messages" />
              </div>
              <h4 className='text-xl hover:text-green-600'>Messages</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to='payment' className={({ isActive }) => (isActive ? 'flex gap-4 items-center  text-green-30' : 'flex gap-4 items-center text-black-50')} onClick={closeNav}>
              <div className='w-6'>
                <img src={pay} alt="" />
              </div>
              <h4 className='text-xl hover:text-green-600'>Payment</h4>
            </NavLink>
          </li>
          <li>
            <NavLink to='support' className={({ isActive }) => (isActive ? 'flex gap-4 items-center  text-green-30' : 'flex gap-4 items-center text-black-50')} onClick={closeNav}>
              <div className='w-6'>
                <img src={support} alt="" />
              </div>
              <h4 className='text-xl hover:text-green-600'>Support</h4>
            </NavLink>
          </li>
        </ul>

        <ul className='flex flex-col gap-5'>
          <li>
            <Link to='profile' className='flex gap-4 items-center' onClick={closeNav}>
              <div className='w-6'>
                <img src={profile}  alt="" />
              </div>
              <h4 className='text-xl text-black-20 hover:text-green-600'>Profile</h4>
            </Link>
          </li>
          <li>
            <Link className='flex gap-4 items-center' onClick={handleLogout}>
              <div className='w-6 '>
                <img src={logout} alt="" />
              </div>
              <h4 className='text-xl text-red-50'>Sign Out</h4>
            </Link>
          </li>

        </ul>
      </nav>
    </section>
    </UserProvider>
  );
};

export default DashNav;
