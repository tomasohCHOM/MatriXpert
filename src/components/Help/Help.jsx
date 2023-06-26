import React, { useState } from "react";
import cross from "../../assets/cross.png";
import "./help.css";

export default function Help({ isOpen, setIsOpen, toggleSidebar }) {
  return (
    <>
      <nav className={`help-container ${isOpen === true ? "active" : ""}`}>
        <div className="help-header">
          <h2 className="sub-header">About</h2>
          <img
            src={cross}
            alt="exit"
            className="icon-images"
            onClick={toggleSidebar}
          />
        </div>
        <p className="help-contents">
          MatriXpert is a free, open source Matrix calculator built in ReactJS.
          It provides well layed-out solutions to many of the concepts that
          students struggle with when encountering Linear Algebra for the first
          time.
        </p>
        <h3 className="sub-header smaller-header">How to Use</h3>
        <p className="help-contents">
          To use MatriXpert, simply choose the operation that you want to
          perform by navigating through the list of available operations.
        </p>
        <p className="help-contents">
          Then input your matrix by filling in the forms (invalid inputs will
          automatically be evaluated to 0). Finally, press the "Calculate"
          button to display the result of your chosen operation, along with some
          further explanations as to how the result was calculated.
        </p>
        <p className="help-contents">
          Experienced some bugs? You can{" "}
          <a href="https://github.com/tomasohCHOM/MatriXpert/issues">
            come here
          </a>{" "}
          to report them. Thank you for using MatriXpert!
        </p>
      </nav>
      <div
        className={`help-overlay ${isOpen == true ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}
