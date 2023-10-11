const InputValidation = ({ message }) => {
  return (
    <div className="rounded-md border border-1 border-red-50 px-6 py-2 text-red-50">{message} field cannot be blank</div>
  );
};

export default InputValidation;
