import React, { useState } from "react";
function InputBoxes(props) {
  let { placeholderText, image, inputName } = props;
  const [state, setState] = useState({
    bill: 0,
    people: 0,
    Custom: 0,
  });

  function handleChange(event) {
    setState((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        className=" relative appearance-none rounded-[0.3125rem]  
        bg-inputBG py-[0.38rem] pr-[1.08rem]  text-right 
       text-VeryDarkCyan caret-StrongCyan accent-StrongCyan placeholder:text-[1.5rem] placeholder:text-DarkGrayishCyan"
        placeholder={placeholderText}
        name={inputName}
      />
      <img src={image} className="absolute pl-[1.2rem] pt-[1rem]" />
    </>
  );
}
export default InputBoxes;
