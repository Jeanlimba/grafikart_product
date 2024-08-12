const Input = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        className="form-control"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
