import React, { useState } from "react";
function Buttons(props) {
  let { text, value } = props;
  function test() {
    if (value === 5) {
      console.log("5");
    } else if (value === 10) {
      console.log("10");
    } else if (value === 15) {
      console.log("15");
    } else if (value === 25) {
      console.log("25");
    } else if (value === 50) {
      console.log("50");
    }
  }
  return (
    <>
      <button
        onClick={test}
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
