import React, { useState } from "react";
import matrixpertImage from "../../assets/matrixpert.png";
import matrixpertNavbarImage from "../../assets/matrixpert-navbar.png";
import "./help.scss";

export default function Help() {
  return (
    <>
      <article className="help-container">
        <h2 className="sub-header help-sub-header">About</h2>
        <p className="help-contents">
          <strong>MatriXpert</strong> is a free, open-source Matrix calculator
          built in <strong>ReactJS</strong> in addition to{" "}
          <strong>React-Router</strong> and <strong>KaTeX</strong>. MatriXpert
          provides solutions and explanations to many of the concepts that
          students would encounter in a Linear Algebra class.
        </p>
        <h2 className="sub-header help-sub-header">How to Use</h2>
        <p className="help-contents">
          To use MatriXpert, simply choose the operation you want to perform by
          navigating the list of available operations.
        </p>
        <img
          src={matrixpertNavbarImage}
          alt="Screenshot of MatriXpert's navbar"
        ></img>
        <p className="help-contents">
          Then input your matrix by filling in the forms (invalid inputs will
          automatically be evaluated to 0). Finally, press the{" "}
          <span className="primary-color">Calculate!</span> button to display
          your chosen operation's result. Further explanations will also pop up
          to explain how the result is calculated.
        </p>
        <img
          src={matrixpertImage}
          alt="Screenshot of MatriXpert's homepage"
        ></img>
        <p className="help-contents">
          Experienced some bugs? You can{" "}
          <a href="https://github.com/tomasohCHOM/MatriXpert/issues">
            come here
          </a>{" "}
          to report them. Thank you for using <strong>MatriXpert!</strong>
        </p>
      </article>
    </>
  );
}
