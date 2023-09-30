import React from "react";
import barstyle from "./DesktopSideBar.module.css";
function DesktopSideBar({ selected, setSelected,setBG }) {
  return (
    <div className={barstyle.sidebar}>
      <p className={barstyle.heading}>Pocket Notes</p>
      <button
        className={barstyle.btn}
        onClick={() => {
          setSelected(!selected);
          selected? setBG('#2F2F2F'):setBG('white');
        }}
      >
        + Create Notes Group
      </button>
    </div>
  );
}

export default DesktopSideBar;
