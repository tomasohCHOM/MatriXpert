import React from "react"
import "./hero.css"
import MatrixPrompt from "./MatrixPrompt/MatrixPrompt"
import MatrixResult from "./MatrixResult/MatrixResult"

export default function Hero() {
  return (
    <>
      <main className="main-wrapper">
        <MatrixPrompt></MatrixPrompt>
        <MatrixResult></MatrixResult>
      </main>
    </>
  )
}
