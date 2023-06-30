import React, { useState } from "react";
import "./help.css";

export default function Help() {
  return (
    <>
      <article className="help-container">
        <h2 className="sub-header help-sub-header">About</h2>
        <p className="help-contents">
          MatriXpert is a free, open-source Matrix calculator built in ReactJS.
          MatriXpert provides solutions and explanations to many of the concepts
          that students would encounter in a Linear Algebra class.
        </p>
        <h2 className="sub-header help-sub-header">How to Use</h2>
        <p className="help-contents">
          To use MatriXpert, simply choose the operation you want to perform by
          navigating the list of available operations.
        </p>
        <p className="help-contents">
          Then input your matrix by filling in the forms (invalid inputs will
          automatically be evaluated to 0). Finally, press the "Calculate"
          button to display your chosen operation's result. Further explanations
          will also pop up to explain how the result is calculated.
        </p>
        <p className="help-contents">
          Experienced some bugs? You can{" "}
          <a href="https://github.com/tomasohCHOM/MatriXpert/issues">
            come here
          </a>{" "}
          to report them. Thank you for using MatriXpert!
        </p>
      </article>
    </>
  );
}
