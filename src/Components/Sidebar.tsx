import React from "react";
import "./Sidebar.css";
import SidebarLogo from "./Images/sidebar/logo";
import SidebarButton1 from "./Images/sidebar/button_1";
import SidebarButton2 from "./Images/sidebar/button_2";
import SidebarButton3 from "./Images/sidebar/button_3";
import SidebarButton4 from "./Images/sidebar/button_4";
import imgg from './Images/Avatar.png';

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 bg-body-tertiary">
      <ul className="nav nav-pills nav-flush flex-column align-items-center mb-auto text-center">
        <li>
        <button className="nav-link pt-4 pb-4">
        <SidebarLogo />
        </button>
        </li>
        <li>
          <button className="nav-link pt-1">
            <SidebarButton1 />
          </button>
        </li>
        <li>
          <button className="nav-link pt-1">
            <SidebarButton2 />
          </button>
        </li>
        <li>
          <button className="nav-link pt-1">
            <SidebarButton3 />
          </button>
        </li>
        <li>
          <button className="nav-link pt-1">
            <SidebarButton4 />
          </button>
        </li>
        <li className="nav-link pt-1 down">
          <img src={imgg} height="40"/>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;