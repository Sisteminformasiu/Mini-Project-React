import React from "react";

const Input = ({
  type,
  value,
  name,
  placeholder,
  onChange,
  label,
  border,
  size,
}) => {
  return (
    <div className="w-full h-full">
      <label className="font-semibold">{label}</label>
      <input
        className={`w-full h-12 ${size === "small" ? "w-full h-8" : ""} ${
          border === "border" ? "border border-slate-500" : ""
        } p-4 rounded-md shadow-md focus:outline-none`}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
