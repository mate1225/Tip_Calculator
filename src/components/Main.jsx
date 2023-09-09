import React, { useState } from "react";
//image
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";
//jsx
import Buttons from "./Buttons";
import Title from "./Titles";
import InputBoxes from "./InputBoxes";
import Sum from "./Sum";
import buttonData from "./buttonData";
import inputData from "./inputData";
function Main() {
  const [iptData, setIptData] = useState(inputData);
  const [btnData, setBtnData] = useState(buttonData);
  function resetBtn() {
    //ez még csak idéglenes megoldás
    location.reload();
  }

  function handleInputChange(event) {
    setIptData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }
  function handleBtnChange(event) {
    //még nincsen kész
    setBtnData((prev) => {
      return {
        ...prev,
        btn5: !prev.btn5,
      };
    });
    console.log(buttonData);
  }
  return (
    <div className=" lg:flex lg:justify-center ">
      <main className="rounded-[1.56rem] bg-White pb-8 lg:flex lg:max-w-[57.5rem] lg:pb-0">
        <section className="p-8 lg:max-w-[23.7rem] lg:p-[3rem] lg:pr-0">
          <Title text="Bill" margin="mb-[0.38rem]" />
          <div className="grid">
            <InputBoxes
              inputName="bill"
              image={iconDollar}
              placeholderText="0"
              handleChange={handleInputChange}
            />
          </div>
          <Title text="Select Tip %" margin="mb-4 mt-8" />
          <div className=" grid grid-cols-2 gap-4 lg:grid-cols-3 lg:grid-rows-2">
            <Buttons text="5%" value={5} handelClick={handleBtnChange} />
            <Buttons text="10%" value={10} />
            <Buttons text="15%" value={15} />
            <Buttons text="25%" value={25} />
            <Buttons text="50%" value={50} />
            <InputBoxes
              placeholderText="Custom"
              inputName="Custom"
              /*  handleChange={handleChange} */
            />
          </div>
          <Title text="Number of People" margin="mt-8 mb-[0.38rem]" />
          <div className="grid">
            <InputBoxes
              inputName="people"
              image={iconPerson}
              placeholderText="0"
              /* handleChange={handleChange} */
            />
          </div>
        </section>
        <section
          className=" mx-6  flex-col rounded-[0.9375rem] bg-VeryDarkCyan pb-6 
        pl-6 pr-[1.37rem] pt-[2.44rem] lg:m-8 lg:flex lg:h-[26.1rem] lg:w-[25.8rem] lg:justify-between"
        >
          <div>
            <Sum result="$0.00" />
            <Sum result="$0.00" />
          </div>
          <div className="grid">
            <button
              onClick={resetBtn}
              className=" mt-[0.63rem] rounded-[0.3125rem]
           bg-StrongCyan py-[0.56rem] text-[1.25rem] text-VeryDarkCyan hover:bg-ButtonHoverCL"
            >
              RESET
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Main;

//$4.27
//$32.79
