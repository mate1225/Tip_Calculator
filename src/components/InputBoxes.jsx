function InputBoxes(props) {
  let { placeholderText, image } = props;
  return (
    <>
      <input
        type="text"
        className=" appearance-none rounded-[0.3125rem] bg-inputBG  
        py-[0.38rem] pr-[1.08rem] text-right text-VeryDarkCyan caret-StrongCyan 
       accent-StrongCyan placeholder:text-[1.5rem] placeholder:text-DarkGrayishCyan"
        placeholder={placeholderText}
      />
      <img src={image} />
    </>
  );
}
export default InputBoxes;
//<div className="grid ">
//</div>
