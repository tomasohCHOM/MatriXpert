import React, { useState } from "react";
import "../index.css";
import Header from "./Header/Header.jsx";
import Hero from "./Hero/Hero.jsx";
import Help from "./Help/Help.jsx";
import tester from "../utils/tester";

export default function MatriXpert() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar}></Header>
      <Help
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleSidebar={toggleSidebar}
      ></Help>
      <Hero></Hero>
    </>
  );
}
