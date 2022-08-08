import React from "react";

function BoundsInput({ value, handleChange, name }) {
  return (
    <div className="input-group mb-3">
      <label htmlFor={name} className="input-group-text">
        {name === "lowBound" ? "Lower Bound" : "Higher Bound"}
      </label>
      <input
        type="number"
        value={value}
        name={name}
        onChange={handleChange}
        className="form-control"
        id={name}
      />
    </div>
  );
}

export default BoundsInput;
