import React, { useState, useEffect } from "react";

const HorizontalProgress = ({ done, attribute }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 200);
  });

  return (
    <div className="progress-bar">
      <div className="progress">
        <div className="progress-done" style={style}>
          <span>{attribute}</span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalProgress;
