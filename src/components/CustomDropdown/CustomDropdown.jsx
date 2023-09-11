import React, { useState } from "react";

const CustomDropDown = ({
  options,
  label,
  secondLabel = "",
  name,
  onChangeHandler,
  width = "100%",
  size = "sm",
}) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onSelectionChange = (e) => {
    setSelectedOption(e.target.value);
    onChangeHandler(e.target.name, e.target.value);
  };

  return (
    <div className="mb-3">
      <div className="d-inline-block" style={{ width: `${width}` }}>
        <label className="form-label text-nowrap mb-0">
          {label}
          {label && ":"}
        </label>
        <select
          className={`form-select form-select-${size}`}
          name={name}
          id={name}
          value={selectedOption}
          onChange={onSelectionChange}
        >
          {/* <option selected>Select one</option> */}
          {options.map((el, index) => (
            <option value={el} key={index}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <span className="mx-3 fw-bold">{secondLabel?.toUpperCase()}</span>
    </div>
  );
};

export default CustomDropDown;
