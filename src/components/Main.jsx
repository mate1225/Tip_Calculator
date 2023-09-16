import React, { useState } from "react";
//image
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";
//jsx
import Buttons from "./Buttons";
import Title from "./Titles";
/* import InputBoxes from "./InputBoxes"; */
import Sum from "./Sum";
import buttonData from "./buttonData";
import ResetBtn from "./ResetBtn";
function Main() {
  //inputs state
  const [iptState, setIptState] = useState({
    bill: 0,
    Custom: 0,
    people: 0,
  });
  //buttons state
  const [btnState, setBtnState] = useState(buttonData);
  //calculations
  function tip() {
    if (iptState.bill > 0 && iptState.people > 0) {
      let output = (iptState.bill * iptState.Custom) / iptState.people;
      return output.toFixed(2);
    } else {
      return "0.00";
    }
  }
  function total() {
    if (iptState.bill > 0 && iptState.people > 0) {
      let tipAmount = (iptState.bill * iptState.Custom) / iptState.people;
      let output = iptState.bill / iptState.people + tipAmount;
      return output.toFixed(2);
    } else {
      return "0.00";
    }
  }
  //inputs
  function handleInputChange(event) {
    setIptState((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  }

  //Buttons
  function handleBtnChange(id) {
    setBtnState((prev) => {
      return prev.map((btn) => {
        return btn.id === id ? { ...btn, on: !btn.on } : { ...btn, on: false };
      });
    });
  }
  const buttonElements = btnState.map((btnElementData) => (
    <Buttons
      key={btnElementData.id}
      on={btnElementData.on}
      handelClick={() => handleBtnChange(btnElementData.id)}
      text={btnElementData.value}
    />
  ));
  /* const [btnValue, setBtnValue] = useState(0);
  function getButtonData() {
    btnData.map((btn) => {
      btn.on === true ? setBtnValue(btn.value) : "";
    });
  } */

  //reset btn
  function resetBtn() {
    setBtnState(buttonData);
    setIptState({
      bill: 0,
      Custom: 0,
      people: 0,
    });
  }
  function errorMessages() {
    console.log("error");
  }
  return (
    <div className=" lg:flex lg:justify-center ">
      <main
        className="rounded-[1.56rem] bg-White pb-8 lg:flex lg:w-[57.5rem] 
      lg:justify-between lg:pb-0"
      >
        <section className="p-8  lg:p-[3rem] lg:pr-0">
          <Title text="Bill" margin="mb-[0.38rem]" />
          <div className="grid">
            <input
              type="text"
              onChange={handleInputChange}
              className=" relative appearance-none rounded-[0.3125rem]  
                        bg-inputBG py-[0.38rem] pr-[1.08rem]  text-right 
                        text-VeryDarkCyan caret-StrongCyan accent-StrongCyan placeholder:text-[1.5rem] placeholder:text-DarkGrayishCyan"
              placeholder="0"
              name="bill"
              value={iptState.bill}
            />
            <img src={iconDollar} className="absolute pl-[1.2rem] pt-[1rem]" />
          </div>
          <Title text="Select Tip %" margin="mb-4 mt-8" />
          <div
            className="grid grid-cols-2 gap-4 lg:w-[23.7rem] lg:grid-cols-3
           lg:grid-rows-2 lg:gap-x-[0.87rem]"
          >
            {buttonElements}
            <input
              type="text"
              onChange={handleInputChange}
              className=" relative appearance-none rounded-[0.3125rem]  
        bg-inputBG py-[0.38rem] pr-[1.08rem]  text-right 
       text-VeryDarkCyan caret-StrongCyan accent-StrongCyan placeholder:text-[1.5rem] placeholder:text-DarkGrayishCyan"
              placeholder="Custom"
              name="Custom"
              value={iptState.Custom}
            />
          </div>
          <Title text="Number of People" margin="mt-8 mb-[0.38rem]" />
          <div className="grid">
            <input
              type="text"
              onChange={handleInputChange}
              className=" relative appearance-none rounded-[0.3125rem]  
                        bg-inputBG py-[0.38rem] pr-[1.08rem]  text-right 
                        text-VeryDarkCyan caret-StrongCyan accent-StrongCyan placeholder:text-[1.5rem] placeholder:text-DarkGrayishCyan"
              placeholder="0"
              name="people"
              value={iptState.people}
            />
            <img src={iconPerson} className="absolute pl-[1.2rem] pt-[1rem]" />
          </div>
        </section>
        <section
          className=" mx-6  flex-col rounded-[0.9375rem] bg-VeryDarkCyan pb-6 
        pl-6 pr-[1.37rem] pt-[2.44rem] lg:m-8 lg:flex lg:h-[26.1rem]
         lg:w-[25.8rem] lg:justify-between"
        >
          <div>
            <Sum result={tip()} title="Tip Amount" />
            <Sum result={total()} title="Total" />
          </div>
          <ResetBtn
            customStyle={
              iptState.bill && iptState.Custom && iptState.people
                ? "bg-StrongCyan hover:bg-ButtonHoverCL"
                : "bg-InputFalse cursor-default"
            }
            reset={
              iptState.bill && iptState.Custom && iptState.people
                ? () => resetBtn()
                : () => errorMessages()
            }
          />
        </section>
      </main>
    </div>
  );
}

export default Main;
