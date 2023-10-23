import facebook from '../assets/images/socialIcons/facebook.svg';
import google from '../assets/images/socialIcons/google.svg';
import twitter from '../assets/images/socialIcons/twitter.svg';

const SocialIcons = () => (
  <div>
    <ul className='flex justify-between items-center'>
      <li>
        <a href="#" className='inline-block w-6'>
          <img src={google} />
        </a>
      </li>
      <li>
        <a href="#" className='inline-block w-4'>
          <img src={facebook} />
        </a>
      </li>
      <li>
        <a href="#" className='inline-block w-6'>
          <img src={twitter} />
        </a>
      </li>
    </ul>
  </div>
);

export default SocialIcons;
