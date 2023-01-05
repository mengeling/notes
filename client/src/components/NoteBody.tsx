import React, { useState } from "react";
// import { NewNote } from ".";

const NoteBody = () => {
  // const [navIsOpen, setNavIsOpen] = useState(false);

  // const toggleSideNav = () => {
  //   setNavIsOpen(!navIsOpen);
  // };

  return (
    <div className="notebody-wrapper">
      {/* <button className="sidenav-toggle" onClick={toggleSideNav}> */}
      {/* <i className="fa fa-bars"></i> */}
      {/* </button> */}
      {/* <nav style={{ display: navIsOpen ? "block" : "none" }}> */}
      {/* <NewNote /> */}
      <div className="notebody"></div>
      <div className="notebody-footer">
        <button className="newnote-button">
          <i className="fa-solid fa-plus"></i>
          <span className="newnote-button-text">New</span>
        </button>
      </div>
    </div>
  );
};

export default NoteBody;
