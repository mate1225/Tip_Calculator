function ResetBtn(props) {
  const { customStyle, reset } = props;
  return (
    <div className="grid">
      <button
        onClick={reset}
        className={` mt-[0.63rem] rounded-[0.3125rem]
               py-[0.56rem] text-[1.25rem] text-VeryDarkCyan 
               ${customStyle} `}
      >
        RESET
      </button>
    </div>
  );
}

export default ResetBtn;
