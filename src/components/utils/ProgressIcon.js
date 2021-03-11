import React from "react";

const ProgressIcon = ({ path, fill, width }) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: fill, width: width }}
    >
      <title>HTML5 icon</title>
      <path d={path} />
    </svg>
  );
};

export default ProgressIcon;
