import React from "react";
import "./header.scss";
import help from "../../assets/help.png";
import hamburger from "../../assets/hamburger-menu-icon.png";
import githubLogo from "../../assets/github-logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <a href="https://github.com/tomasohCHOM/MatriXpert">
        <img src={githubLogo} alt="hamburger" className="icon-images" />
      </a>
      <Link className="title" to="/">
        <h1 className="title">MatriXpert</h1>
      </Link>
      <Link to="/help">
        <img src={help} alt="help" className="icon-images" />
      </Link>
    </header>
  );
}
