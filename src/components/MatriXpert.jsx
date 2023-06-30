import React from "react";
import "../index.css";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import Help from "./Help/Help.jsx";
import tester from "../utils/tester";

export default function MatriXpert({ isOpen, toggleSidebar }) {
  return (
    <>
      <Help
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
      ></Help>
      <Hero></Hero>
    </>
  );
}
