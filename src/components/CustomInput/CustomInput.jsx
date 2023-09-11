import React, { useState } from "react";

const CustomInput = ({
  label,
  name,
  onChangeHandler,
  width = "100%",
  placeholder = "",
  type = "text",
  defaultValue = "",
  isHorizontal = false,
}) => {
  const [value, setValue] = useState(defaultValue);
  const onInputChange = (e) => {
    setValue(e.target.value);
    onChangeHandler(e.targetName, e.targetValue);
  };
  return (
    <div
      style={{ width: `${width}` }}
      className={`${
        isHorizontal
          ? "d-flex align-items-center justify-content-center mb-2"
          : "mb-2"
      }`}
    >
      <label className="form-label-sm text-nowrap">
        {label}
        {label && ":"}
      </label>
      <input
        id={name}
        className={"form-control"}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onInputChange}
      />
    </div>
  );
};

export default CustomInput;
