import React from "react";
import "../index.css";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import MatrixCalculations from "../lib/matrixCalculations";

export default function MatriXpert() {
  const test = new MatrixCalculations();
  console.log(test.addMatrices([[2, 2], [1, 4]], [[1, 4],[2, 2]]))
  return (
    <>
      <Header></Header>
      <Hero></Hero>
    </>
  );
}
