const Checkbox = ({ checked, onChange, label }) => {
  return (
    <div>
      <input
        type="checkbox"
        className="form-check-input"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <label htmlFor="" className="form-check-lable">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
