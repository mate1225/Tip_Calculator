import React, { useEffect, useState } from "react";
//image
import iconDollar from "./images/icon-dollar.svg";
import iconPerson from "./images/icon-person.svg";
//jsx
import Buttons from "./Buttons";
import InputBoxes from "./InputBoxes";
import Sum from "./Sum";
import buttonData from "./buttonData";
import ResetBtn from "./ResetBtn";
import SectionHeader from "./SectionHeader";

function Main() {
  //error
  const [errorState, setErrorState] = useState({
    bill: "",
    Custom: "",
    people: "",
  });
  //inputs state
  const [iptState, setIptState] = useState({
    bill: "",
    Custom: "",
    people: "",
  });

  //buttons state
  const [btnState, setBtnState] = useState(buttonData);
  const [btnValue, setBtnValue] = useState(0);
  //calculations and displaying result
  let percentageValue;
  if (iptState.Custom !== "" && iptState.Custom !== 0) {
    percentageValue = iptState.Custom;
  } else {
    percentageValue = btnValue;
  }
  //reset btn/custom input filed
  useEffect(() => {
    if (iptState.Custom !== "") {
      setBtnState(buttonData);
      setBtnValue(0);
    }
  }, [iptState.Custom]);

  useEffect(() => {
    if (btnValue !== 0) {
      setIptState((prev) => {
        return {
          ...prev,
          Custom: "",
        };
      });
    }
  }, [btnState]);

  function tip() {
    if (iptState.bill > 0 && iptState.people > 0 && percentageValue > 0) {
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
        [event.target.name]: isNaN(Number(event.target.value))
          ? event.target.value
          : Number(event.target.value),
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
    setErrorState({
      bill: "",
      Custom: "",
      people: "",
    });
    setBtnValue(0);
  }
  //form validation
  function validation(
    inputFiled,
    inputName,
    value1,
    displayError,
    inputFiled2,
  ) {
    if (inputFiled > value1) {
      setIptState((prev) => {
        return {
          ...prev,
          [inputName]: "",
        };
      });

      setErrorState((prev) => {
        return {
          ...prev,
          [inputName]: `can't be grater then ${displayError}`,
        };
      });
    } else if (inputFiled === 0) {
      setIptState((prev) => {
        return {
          ...prev,
          [inputName]: "",
        };
      });

      setErrorState((prev) => {
        return {
          ...prev,
          [inputName]: "can't be 0",
        };
      });
    } else if (inputFiled <= -1) {
      setIptState((prev) => {
        return {
          ...prev,
          [inputName]: "",
        };
      });

      setErrorState((prev) => {
        return {
          ...prev,
          [inputName]: "can't be lower than 0",
        };
      });
    } else if (typeof inputFiled === "string" && inputFiled !== "") {
      setIptState((prev) => {
        return {
          ...prev,
          [inputName]: "",
        };
      });
      setErrorState((prev) => {
        return {
          ...prev,
          [inputName]: "can't be text",
        };
      });
    }
    useEffect(() => {
      if ((inputFiled > 0 && inputFiled < value1) || inputFiled2 > 0) {
        setErrorState((prev) => {
          return {
            ...prev,
            [inputName]: "",
          };
        });
      }
    }, [inputFiled, inputFiled2]);
  }
  //bill
  validation(iptState.bill, "bill", 1000000, "1 000 000");
  //tip
  validation(iptState.Custom, "Custom", 100, "100", btnValue);
  //people
  validation(iptState.people, "people", 1000, "1000");

  return (
    <div className=" lg:flex lg:justify-center ">
      <main
        className="rounded-[1.56rem] bg-White pb-8 lg:flex lg:w-[57.5rem] 
      lg:justify-between lg:pb-0"
      >
        <section className="p-8  lg:p-[3rem] lg:pr-0">
          <SectionHeader
            text={errorState.bill}
            title="Bill"
            margin="mb-[0.38rem]"
          />
          <InputBoxes
            handleChange={handleInputChange}
            placeholderText="0"
            inputName="bill"
            inputValue={iptState.bill}
            image={iconDollar}
            error={errorState.bill}
          />
          <SectionHeader
            text={errorState.Custom}
            title="Select Tip %"
            margin=" mb-4 mt-8"
          />
          <div
            className="grid grid-cols-2 gap-4 lg:w-[23.7rem] lg:grid-cols-3
           lg:grid-rows-2 lg:gap-x-[0.87rem]"
          >
            {buttonElements}
            <input
              type="text"
              onChange={handleInputChange}
              className={` relative    
        appearance-none rounded-[0.3125rem] border-2  border-solid 
         bg-inputBG   py-[0.38rem]  
       pr-[1.08rem]  text-right text-VeryDarkCyan
        caret-StrongCyan placeholder:text-[1.5rem]
         placeholder:text-DarkGrayishCyan 
          focus:outline-none ${
            errorState.Custom !== ""
              ? "border-Error"
              : "border-inputBG focus:border-StrongCyan"
          }`}
              placeholder="Custom"
              name="Custom"
              value={iptState.Custom}
            />
          </div>
          <SectionHeader
            text={errorState.people}
            title="Number of People"
            margin=" mb-[0.38rem] mt-8"
          />
          <InputBoxes
            handleChange={handleInputChange}
            placeholderText="0"
            inputName="people"
            inputValue={iptState.people}
            image={iconPerson}
            error={errorState.people}
          />
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
            reset={
              iptState.bill || iptState.Custom || iptState.people
                ? () => resetBtn()
                : ""
            }
          />
        </section>
      </main>
    </div>
  );
}

export default Main;
