function Sum(props) {
  const { result, title } = props;
  return (
    <div className="mb-[1.56rem] flex items-center justify-between">
      <div>
        <h3 className=" text-[1rem] text-White ">{title}</h3>
        <h4 className=" text-[0.8125rem] text-DarkGrayishCyan ">/ person</h4>
      </div>

      <h2 className=" text-[2rem] text-StrongCyan lg:text-[3rem] ">
        ${result}
      </h2>
    </div>
  );
}
export default Sum;
