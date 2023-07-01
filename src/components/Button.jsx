import { Link } from "react-router-dom"

const Button = (props) => {
  const { name, linkTo, clas, type } = props;

  const checkLink = linkTo == '#' ? true : false;

  const checkClass = (check) => {
    if (check == 'green') {
      return 'inline-block px-8 py-1 rounded-lg bg-green-600 text-white';
    }

    if (check == 'white') {
      return 'inline-block px-8 py-1 rounded-lg border border-slate-500';
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
