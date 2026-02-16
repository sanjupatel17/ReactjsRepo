const Input = ({ label, value, onChange, id }) => {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        id={id}
      />
    </div>
  );
};

export default Input;
