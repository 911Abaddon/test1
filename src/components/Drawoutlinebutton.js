import React, { useState } from "react";
import "./Drawoutlinebutton.css";

const DrawOutlineButton = ({ children, ...rest }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => {
      setClicked(false);
    }, 300); // Reset clicked state after 300 milliseconds
  };

  return (
    <button
      {...rest}
      className={`draw-outline-button group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300 ${clicked ? "clicked" : ""}`}
      onClick={handleClick}
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="line top"></span>

      {/* RIGHT */}
      <span className="line right"></span>

      {/* BOTTOM */}
      <span className="line bottom"></span>

      {/* LEFT */}
      <span className="line left"></span>

      {clicked && <span className="pop-in"></span>}
    </button>
  );
};

export default DrawOutlineButton;
