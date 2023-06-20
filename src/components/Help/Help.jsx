import React, { useState } from "react";
import cross from "../../assets/cross.png";
import "./help.css";

export default function Help({ isOpen, setIsOpen, toggleSidebar }) {
  return (
    <>
      <nav className={`help-container ${isOpen === true ? "active" : ""}`}>
        <div className="help-header">
          <h2 className="sub-header">More Help</h2>
          <img
            src={cross}
            alt="exit"
            className="icon-images"
            onClick={toggleSidebar}
          />
        </div>
        <p className="help-contents">
          MatriXpert is a free-to-use Matrix calculator that can perform various
          operations very quickly and effectively. It provides well layed-out
          solutions to many of the concepts that students struggle with when
          then encounter Linear Algebra for the first time.
        </p>
      </nav>
      <div
        className={`help-overlay ${isOpen == true ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}
