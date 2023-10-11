import PropTypes from 'prop-types';

const CardOne = (props) => {

  const { heading, details } = props;
  
  return (
    <article>
      <p className="inline-block text-lg leading-10"><span className="text-green-30 text-2xl font-bold">{heading} </span> {details}</p>
    </article>
  );
};

export default CardOne;

CardOne.propTypes = {
  heading: PropTypes.string,
  details: PropTypes.string,
}
