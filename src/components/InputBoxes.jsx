function InputBoxes({
  handleChange,
  placeholderText,
  inputName,
  inputValue,
  image,
}) {
  return (
    <div className="grid">
      <input
        type="text"
        onChange={handleChange}
        className=" relative appearance-none rounded-[0.3125rem]  
        bg-inputBG py-[0.38rem] pr-[1.08rem]  text-right 
       text-VeryDarkCyan caret-StrongCyan accent-StrongCyan placeholder:text-[1.5rem] placeholder:text-DarkGrayishCyan"
        placeholder={placeholderText}
        name={inputName}
        value={inputValue}
      />
      <img src={image} className="absolute pl-[1.2rem] pt-[1rem]" />
    </div>
  );
}
export default InputBoxes;
