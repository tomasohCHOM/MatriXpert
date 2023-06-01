import React from "react"
import "./header.css"
import help from "../../assets/help.png"
import hamburger from "../../assets/hamburger-menu-icon.png"

export default function Header() {
  return (
    <header className="header">
      <img src={hamburger} alt="hamburger" className="header-items hamburger" />
      <h1 className="header-items title">MatriXpert</h1>
      <img src={help} alt="help" className="header-items help" />
    </header>
  )
}
