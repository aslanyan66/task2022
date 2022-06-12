import { useState } from 'react';

const Checkbox = ({ isActive, onChange, className, name, label, ...props }) => {
  const [checked, setChecked] = useState(isActive);
  const handleChange = () => {
    onChange({ name, label, isActive: !checked });
    setChecked(!checked);
  };
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={handleChange}
      className={className}
      name={name}
      {...props}
    />
  );
};

export default Checkbox;
