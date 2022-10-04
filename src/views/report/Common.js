import React from "react";

const Dropdowm = ({
  id,

  name,

  options,

  handleChange,

  selectedValue
}) => (
  <div className="mt-2">
    <select id={id} name={name} onChange={handleChange} value={selectedValue}>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Dropdowm;
