import React, { useState } from "react";
function Buttons(props) {
  let { text, value, handelClick } = props;
  return (
    <>
      <button
        onClick={handelClick}
        className=" cursor-pointer rounded-[0.3125rem] bg-VeryDarkCyan
         py-[0.37rem] text-White hover:bg-ButtonHoverCL
          hover:text-VeryDarkCyan focus:bg-StrongCyan focus:text-VeryDarkCyan "
      >
        {text}
      </button>
    </>
  );
}
export default Buttons;
