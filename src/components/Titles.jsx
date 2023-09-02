function Title(props) {
  return (
    <>
      <h2 className={`${props.margin}  text-[1rem] text-DarkGrayishCyan`}>
        {props.text}
      </h2>
    </>
  );
}

export default Title;
