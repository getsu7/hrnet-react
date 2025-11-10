import './Select.css';

const Select = ({ options, value, onChange, id, name, required = false }) => {
  return (
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="custom-select"
    >
      <option value="">Sélectionner...</option>
      {options.map((option, index) => (
        <option key={index} value={option.value || option}>
          {option.label || option}
        </option>
      ))}
    </select>
  );
};

export default Select;

