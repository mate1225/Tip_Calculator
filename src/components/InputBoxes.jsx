function InputBoxes(props) {
  let { placeholderText, image, value } = props;
  function getValue() {
    if (value === "bill") {
    }
    if (value === "people") {
    }
  }
  return (
    <>
      <input
        type="text"
        onChange={getValue}
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
