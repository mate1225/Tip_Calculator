import React, { useState } from "react";
import logo from "./images/logo.svg";
function Header() {
  return (
    <header className="mb-[2.55rem] mt-[3.12rem] flex justify-center">
      <img src={logo} alt="image" />
    </header>
  );
}

export default Header;
