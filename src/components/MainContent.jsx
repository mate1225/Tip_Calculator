import React, { useEffect, useState } from "react";
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
  //error
  const [errorState, setErrorState] = useState("error");
  //inputs state
  const [iptState, setIptState] = useState({
    bill: "",
    Custom: "",
    people: "",
  });
  //buttons state
  const [btnState, setBtnState] = useState(buttonData);
  const [btnValue, setBtnValue] = useState(0);
  //if all buttons inactive make the "btnValue" 0
  useEffect(() => {
    let array = [];
    btnState.map((onData) => {
      array.push(onData.on);
    });
    const findTrueValue = array.find((element) => element === true);
    findTrueValue === undefined ? setBtnValue(0) : "";
  }),
    [btnState];
  //calculations and displaying result
  let percentageValue;
  if (iptState.Custom !== "" && iptState.Custom !== "0") {
    percentageValue = iptState.Custom;
  } else {
    percentageValue = btnValue;
  }

  function tip() {
    //error handling
    if (
      iptState.bill >= 10000 ||
      iptState.people >= 10000 ||
      percentageValue >= 100
    ) {
    } else if (
      iptState.bill > 0 &&
      iptState.people > 0 &&
      percentageValue > 0
    ) {
      let output = (iptState.bill * (percentageValue / 100)) / iptState.people;
      return output.toFixed(2);
    } else {
      return "0.00";
    }
  }

  function total() {
    if (iptState.bill > 0 && iptState.people > 0 && percentageValue > 0) {
      let tipAmount =
        (iptState.bill * (percentageValue / 100)) / iptState.people;
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
  console.log(iptState);
  //Buttons
  function handleBtnChange(id) {
    setBtnState((prev) => {
      return prev.map((btn) => {
        return btn.id === id ? { ...btn, on: !btn.on } : { ...btn, on: false };
      });
    });
    btnState.map((btn) => {
      btn.id === id ? setBtnValue(btn.value) : "";
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
  //reset btn
  function resetBtn() {
    setBtnState(buttonData);
    setIptState({
      bill: "",
      Custom: "",
      people: "",
    });
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
          {/*  <div className=" mt-3 flex justify-end">
            <p className=" text-Red absolute text-[0.7rem] ">{errorState}</p>
          </div> */}
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
              iptState.bill || iptState.Custom || iptState.people
                ? "bg-StrongCyan hover:bg-ButtonHoverCL"
                : "bg-InputFalse cursor-default"
            }
            reset={() => resetBtn()}
          />
        </section>
      </main>
    </div>
  );
}

export default Main;
