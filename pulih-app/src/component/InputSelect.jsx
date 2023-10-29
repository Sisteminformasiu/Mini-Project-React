import React from "react";

const InputSelect = ({
  label,
  name,
  value,
  value1,
  value2,
  value3,
  onChange,
  option1,
  option2,
  option3,
  option4,
  option5,
}) => {
  return (
    <label className="font-semibold">
      {label}
      <select
        value={value}
        onChange={onChange}
        className="w-full border h-14 p-4 rounded-md shadow-md border-slate-500 focus:outline-none"
        name={name}
      >
        <option value={value1}>{option1}</option>
        <option value={value2}>{option2}</option>
        <option value={value3}>{option3}</option>
      </select>
    </label>
  );
};

export default InputSelect;
