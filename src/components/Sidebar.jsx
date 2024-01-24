import React from "react";
import "../styles/Sidebar.css";
import { FaBarsStaggered } from "react-icons/fa6";

function sidebar() {
  return (
    <div id="sideBarContainer">
      <div className="sbHeader">
        <p><a>📎</a>TodoFolio</p>
        <a className="Bars"><FaBarsStaggered />  </a>
      </div>
    </div>
  );
}

export default sidebar;
