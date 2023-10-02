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
import Error from "./Error";

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
  //if all buttons inactive make the "btnValue" 0
  useEffect(() => {
    console.log(iptState.Custom);
    const findTrueValue = btnState.find((item) => item.on === true);

    if (findTrueValue === undefined && btnValue !== 0) {
      console.log("btn value set to 0");
      setBtnValue(0);
    }
  }),
    [btnState];
  //calculations and displaying result
  let percentageValue;
  if (iptState.Custom !== "" && iptState.Custom !== "0") {
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
  //bill
  if (iptState.bill > 10000) {
    setIptState((prev) => {
      return {
        ...prev,
        bill: "",
      };
    });

    setErrorState((prev) => {
      return {
        ...prev,
        bill: "can't be grater then 100000",
      };
    });
  } else if (iptState.bill === "0") {
    setIptState((prev) => {
      return {
        ...prev,
        bill: "",
      };
    });
    setErrorState((prev) => {
      return {
        ...prev,
        bill: "can't be 0",
      };
    });
  }
  useEffect(() => {
    if (iptState.bill > "0" && iptState.bill < "100000") {
      setErrorState((prev) => {
        return {
          ...prev,
          bill: "",
        };
      });
    }
  }, [iptState.bill]);
  //tip
  if (iptState.Custom > 100) {
    setIptState((prev) => {
      return {
        ...prev,
        Custom: "",
      };
    });

    setErrorState((prev) => {
      return {
        ...prev,
        Custom: "can't be grater then 100",
      };
    });
  } else if (iptState.Custom === "0") {
    setIptState((prev) => {
      return {
        ...prev,
        Custom: "",
      };
    });
    setErrorState((prev) => {
      return {
        ...prev,
        Custom: "can't be 0",
      };
    });
  }
  useEffect(() => {
    if ((iptState.Custom > 0 && iptState.Custom < 100) || btnValue > 0) {
      setErrorState((prev) => {
        return {
          ...prev,
          Custom: "",
        };
      });
    }
  }, [iptState.Custom, btnValue]);
  //people
  if (iptState.people > 1000) {
    setIptState((prev) => {
      return {
        ...prev,
        people: "",
      };
    });

    setErrorState((prev) => {
      return {
        ...prev,
        people: "can't be grater then 1000",
      };
    });
  } else if (iptState.people === "0") {
    setIptState((prev) => {
      return {
        ...prev,
        people: "",
      };
    });
    setErrorState((prev) => {
      return {
        ...prev,
        people: "can't be 0",
      };
    });
  }
  useEffect(() => {
    if (iptState.people > "0" && iptState.people < "1000") {
      setErrorState((prev) => {
        return {
          ...prev,
          people: "",
        };
      });
    }
  }, [iptState.people]);
  return (
    <div className=" lg:flex lg:justify-center ">
      <main
        className="rounded-[1.56rem] bg-White pb-8 lg:flex lg:w-[57.5rem] 
      lg:justify-between lg:pb-0"
      >
        <section className="p-8  lg:p-[3rem] lg:pr-0">
          <div className=" mb-[0.38rem] flex items-center justify-between">
            <Title text="Bill" />
            <Error text={errorState.bill} />
          </div>

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
          <div className=" mb-4 mt-8 flex items-center justify-between">
            <Title text="Select Tip %" />
            <Error text={errorState.Custom} />
          </div>

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

          <div className=" mb-[0.38rem] mt-8 flex items-center justify-between">
            <Title text="Number of People" />
            <Error text={errorState.people} />
          </div>

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
