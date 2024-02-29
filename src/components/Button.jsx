import { Link } from "react-router-dom"

const Button = (props) => {
  const { name, linkTo, clas, type } = props;

  const checkLink = linkTo == '#' ? true : false;

  const checkClass = (check) => {
    if (check == 'green') {
      return 'inline-block px-8 py-3 rounded-xl bg-green-30 text-green-10';
    }

    if (check == 'white') {
      return 'inline-block px-10 py-3 bg-transparent rounded-xl border-[3px] border-green-30 text-green-30';
    }

    if (check == 'login') {
      return 'inline-block px-5 py-2 bg-transparent rounded-xl border-[3px] border-green-30 text-green-30 text-base ';
    }

  };

  return (
    <>
      { checkLink && 
        <button
          className={checkClass(clas)}
          type={type}
        >{name}</button>
      }

      {
        !checkLink && 
        <Link
          to={linkTo}
          className={checkClass(clas)}
        >{name}</Link>
      }
    </>
  )
};

Button.defaultProps = {
  name: 'button',
  linkTo: '#',
  clas: 'white',
  type: 'button',
};

export default Button;
