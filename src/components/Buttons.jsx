function Buttons(props) {
  const { text, handelClick, on } = props;
  const bgColor = on
    ? "bg-StrongCyan text-VeryDarkCyan"
    : "bg-VeryDarkCyan text-White";
  return (
    <>
      <button
        onClick={handelClick}
        className={` cursor-pointer rounded-[0.3125rem] 
        py-[0.37rem]  hover:bg-ButtonHoverCL
         hover:text-VeryDarkCyan ${bgColor}`}
      >
        {text}%
      </button>
    </>
  );
}
export default Buttons;
