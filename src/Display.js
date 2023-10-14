import React from "react";
const Display = ({ value }) => {
  return (
    <input
      type="text"
      value={value}
      readOnly
      className="display"
    />
  );
};

export default Display;
