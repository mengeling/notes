import React, { useState } from "react";
import { GetNotes } from ".";

const SideNav = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleSideNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <div className="sidenav-wrapper">
      <button className="sidenav-toggle" onClick={toggleSideNav}>
        <i className="fa fa-bars"></i>
      </button>
      <nav style={{ display: navIsOpen ? "block" : "none" }}>
        <GetNotes />
      </nav>
    </div>
  );
};

export default SideNav;
