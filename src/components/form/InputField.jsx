import PropTypes from 'prop-types';

const InputField = (props) => {
  const { handleChange, value, name, type, placeholder } = props;

   return (<div className="flex flex-col gap-4 flex-1">
    <input className="pl-3 bg-transparent border border-[#C7CDD2] p-3" type={type} required id={name} name={name} placeholder={placeholder} onChange={handleChange} value={value} />
  </div>)
};

InputField.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
}

export default InputField;
