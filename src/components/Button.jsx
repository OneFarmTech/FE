import { Link } from "react-router-dom"

const Button = (props) => {
  const { name, linkTo } = props;

  return (
    <Link to={linkTo}>{name}</Link>
  )
};

export default Button;
