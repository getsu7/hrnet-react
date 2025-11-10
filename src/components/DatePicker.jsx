import './DatePicker.css';

const DatePicker = ({ value, onChange, id, name, required = false }) => {

  const formatDate = (isoDate) => {
    if (!isoDate) return '';
    const [year, month, day] = isoDate.split('-');
    return `${month}/${day}/${year}`;
  };

  const parseDate = (formattedDate) => {
    if (!formattedDate) return '';
    const [month, day, year] = formattedDate.split('/');
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
  };

  const handleChange = (e) => {
    const isoDate = e.target.value;
    const formattedDate = formatDate(isoDate);

    // Appeler onChange avec la date formatée
    onChange({
      target: {
        name: name,
        value: formattedDate
      }
    });
  };

  return (
    <input
      type="date"
      id={id}
      name={name}
      value={value ? parseDate(value) : ''}
      onChange={handleChange}
      required={required}
      className="date-picker"
    />
  );
};

export default DatePicker;

