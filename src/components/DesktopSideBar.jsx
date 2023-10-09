import React, { useEffect, useState } from "react";
import barstyle from "./DesktopSideBar.module.css";

function DesktopSideBar({
  selected,
  setSelected,
  noteName,
  setNoteName,
  messageName,
  setMessageName,
}) {
  // localStorage.clear();
  const [notes, setNotes] = useState([]);
  // noteObj.hasOwnProperty('naveen')
  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("noteName"));
    if (Array.isArray(storedNotes)) {
      setNotes(storedNotes);
    } else {
      setNotes([]);
    }
  }, [noteName]);

  return (
    <div className={barstyle.sidebar}>
      <p className={barstyle.heading}>Pocket Notes</p>
      <button
        className={barstyle.btn}
        onClick={() => {
          setSelected(!selected);
        }}
      >
        + Create Notes Group
      </button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "5%",
          marginTop: "10%",
        }}
      >
        {notes.map((note, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "5%",
              cursor: "pointer",
            }}
            onClick={() => {
              setMessageName(note.name);
              // console.log(messageName)
            }}
          >
            <div
              className={barstyle.logo}
              style={{ backgroundColor: note.colour }}
            >
              {note.name.toUpperCase().slice(0, 2)}
            </div>
            <div className={barstyle.name}>{note.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DesktopSideBar;
