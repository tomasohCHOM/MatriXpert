import React, { useState } from "react";
import cross from "../../assets/cross.png";
import "./help.css"

export default function Help() {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <>
      <nav className="help-container">
        <img src={cross} alt="exit" className="icon-images" />
        <h2 className="sub-header">Welcome to MatriXpert!</h2>
        <p className="help-contents">
          MatriXpert is a free-to-use Matrix calculator that can perform various
          operations very quickly and effectively. It provides well layed-out
          solutions to many of the concepts that students struggle with when
          then encounter Linear Algebra for the first time.
        </p>
      </nav>
    </>
  );
}
