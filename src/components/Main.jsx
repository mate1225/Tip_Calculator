import React, { useState } from "react";
//image
import iconDollar from "./images/icon-dollar.svg";
//jsx
import Buttons from "./Buttons";
import Title from "./Titles";
import InputBoxes from "./InputBoxes";
import Sum from "./Sum";

function Main() {
  return (
    <main className="rounded-[1.56rem] bg-White pb-8 ">
      <section className="p-8">
        <Title text="Bill" margin="mb-[0.38rem]" />
        <div className="grid">
          <InputBoxes value="bill" />
        </div>
        <Title text="Select Tip %" margin="mb-4 mt-8" />
        <div className=" grid grid-cols-2 gap-4">
          <Buttons text="5%" value={5} />
          <Buttons text="10%" value={10} />
          <Buttons text="15%" value={15} />
          <Buttons text="25%" value={25} />
          <Buttons text="50%" value={50} />
          <InputBoxes placeholderText="Custom" />
        </div>
        <Title text="Number of People" margin="mt-8 mb-[0.38rem]" />
        <div className="grid">
          <InputBoxes value="people" />
        </div>
      </section>
      <section className=" mx-6  rounded-[0.9375rem] bg-VeryDarkCyan pb-6 pl-6 pr-[1.37rem] pt-[2.44rem]">
        <Sum result="$4.27" />
        <Sum result="$32.79" />
        <div className="grid">
          <button
            className=" mt-[0.63rem] rounded-[0.3125rem]
           bg-StrongCyan py-[0.56rem] text-[1.25rem] text-VeryDarkCyan hover:bg-ButtonHoverCL"
          >
            RESET
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
