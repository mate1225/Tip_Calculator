function InputBoxes({
  handleChange,
  placeholderText,
  inputName,
  inputValue,
  image,
  error,
}) {
  return (
    <div className="grid">
      <input
        type="text"
        onChange={handleChange}
        className={`relative appearance-none rounded-[0.3125rem] border-2 border-solid bg-inputBG py-[0.38rem] pr-[1.08rem]  text-right text-VeryDarkCyan caret-StrongCyan placeholder:text-[1.5rem] placeholder:text-DarkGrayishCyan 
         ${
           error !== ""
             ? "border-Error"
             : "border-inputBG focus:border-StrongCyan"
         } focus:outline-none`}
        placeholder={placeholderText}
        name={inputName}
        value={inputValue}
      />
      <img src={image} className="absolute pl-[1.2rem] pt-[1rem]" />
    </div>
  );
}
export default InputBoxes;
