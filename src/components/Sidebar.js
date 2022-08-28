import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Siderbar() {
  return (
    <div className="organisations-container">
    <div className="organisations-side-bar">
      <h2 className="side-bar-active">DS</h2>
      <h2 className="side-bar-inactive">BH</h2>
      <h2 className="side-bar-inactive">KH</h2>
      <h2 className="side-bar-add-org"><FontAwesomeIcon icon="fa-solid fa-plus" /></h2>
    </div>
  </div>
  )
}
