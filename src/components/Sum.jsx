function Sum(props) {
  const { result } = props;
  return (
    <div className="mb-[1.56rem] flex items-center justify-between">
      <div>
        <h3 className=" text-[1rem] text-White ">Tip Amount</h3>
        <h4 className=" text-[0.8125rem] text-DarkGrayishCyan ">/ person</h4>
      </div>

      <h2 className=" text-[2rem] text-StrongCyan ">{result}</h2>
    </div>
  );
}
export default Sum;
