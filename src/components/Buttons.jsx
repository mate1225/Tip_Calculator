import React, { useState } from "react";
function Buttons(props) {
  function test() {
    console.log("this is test");
  }
  return (
    <>
      <button
        onClick={test}
        className=" cursor-pointer rounded-[0.3125rem] bg-VeryDarkCyan
         text-White hover:bg-ButtonHoverCL hover:text-VeryDarkCyan
          focus:bg-StrongCyan focus:text-VeryDarkCyan "
      >
        {props.text}
      </button>
    </>
  );
}
export default Buttons;
