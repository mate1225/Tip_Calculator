function InputBoxes(props) {
  let { placeholderText, image, nameValue } = props;
  function handleChange() {
    if (nameValue === "bill") {
      console.log("bill");
    } else if (nameValue === "people") {
      console.log("people");
    } else if (nameValue === "Custom") {
      console.log("Custom");
    }
  }
  return (
    <>
      <input
        type="text"
        onChange={handleChange}
        className=" appearance-none rounded-[0.3125rem] bg-inputBG  
        py-[0.38rem] pr-[1.08rem] text-right  text-VeryDarkCyan 
       caret-StrongCyan accent-StrongCyan placeholder:text-[1.5rem] placeholder:text-DarkGrayishCyan"
        placeholder={placeholderText}
      />
      <img src={image} />
    </>
  );
}
export default InputBoxes;
