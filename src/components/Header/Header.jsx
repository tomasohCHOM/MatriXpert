import React from "react"
import "./header.css"
import help from "../../assets/help.png"
import hamburger from "../../assets/hamburger-menu-icon.png"
import githubLogo from "../../assets/github-logo.png";

export default function Header() {
  return (
    <header className="header">
      <img src={githubLogo} alt="hamburger" className="header-images" />
      <h1 className="title">MatriXpert</h1>
      <img src={help} alt="help" className="header-images" />
    </header>
  )
}
