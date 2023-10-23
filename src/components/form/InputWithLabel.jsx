import PropTypes from 'prop-types';

const InputWithLabel = (props) => {
  const { changeFunction, value } = props;

  return (
    <div className="flex flex-col gap-4">
      <label htmlFor="name" className="font-bold">Name</label>
      <input onChange={changeFunction} value={value} className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type="text" id="name" name="name" placeholder="Enter Your Full Name" />
    </div>
  )
};

InputWithLabel.propTypes = {
  changeFunction: PropTypes.func,
  value: PropTypes.string,
}

export default InputWithLabel;
