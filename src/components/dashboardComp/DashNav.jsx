import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/onefarm.svg';

const DashNav = () => (
  <section className="fixed top-0 lg:hidden 2xl:flex 2xl:left-0 2xl:h-full bg-white 2xl:border 2xl:border-r-2 border-black-15 p-5">
    <Link to='/dashboard/home' className='block w-32'>
      <img src={logo} alt="Onefarm Logo" />
    </Link>

    <nav>
      <ul>
        <li>
          <NavLink>
            <div>
              <img src="" alt="" />
            </div>  
            <h4 className='text-xl'>Home</h4>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <div>
              <img src="" alt="" />
            </div>  
            <h4 className='text-xl'>MarketPlace</h4>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <div>
              <img src="" alt="" />
            </div>  
            <h4 className='text-xl'>Messages</h4>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <div>
              <img src="" alt="" />
            </div>  
            <h4 className='text-xl'>Payment</h4>
          </NavLink>
        </li>
        <li>
          <NavLink>
            <div>
              <img src="" alt="" />
            </div>  
            <h4 className='text-xl'>Support</h4>
          </NavLink>
        </li>
      </ul>

      <ul>
        <li>
          <Link>
            <div>
              <img src="" alt="" />
            </div>  
            <h4 className='text-xl'>Profile</h4>
          </Link>
        </li>
        <li>
          <Link>
            <div>
              <img src="" alt="" />
            </div>  
            <h4 className='text-xl'>Sign Out</h4>
          </Link>
        </li>

      </ul>
    </nav>
  </section>
);

export default DashNav;
