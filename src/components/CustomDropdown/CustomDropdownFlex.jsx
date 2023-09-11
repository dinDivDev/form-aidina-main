import React, { useState } from "react";

const CustomDropdownFlex = ({
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
    <div className="d-flex mb-2">
      <div className="d-flex" style={{ width: `${width}` }}>
        <label className="form-label text-nowrap mb-0 mx-2">{label}:</label>
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
      <span className="mx-3 fw-bold" style={{ alignSelf: "end" }}>
        {secondLabel?.toUpperCase()}
      </span>
    </div>
  );
};

export default CustomDropdownFlex;
