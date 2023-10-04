import React, { useEffect, useState } from "react";
import barstyle from "./DesktopSideBar.module.css";

function DesktopSideBar({ selected, setSelected, noteName, setNoteName }) {
  // localStorage.clear();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = JSON.parse(localStorage.getItem("noteName"));
    if (Array.isArray(storedNotes)) {
      setNotes(storedNotes);
    } else {
      setNotes([]);
    }
  }, [noteName]);
  const showMessages=()=>{
    
  }
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
        {
          // setNoteName(JSON.parse(localStorage.getItem('noteName')))
          notes.map((note, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "5%",
                cursor: "pointer",
              }}
              onClick={showMessages}
            >
              <div
                className={barstyle.logo}
                style={{ backgroundColor: note.colour }}
              >
                {note.name.toUpperCase().slice(0, 2)}
              </div>
              <div className={barstyle.name}>{note.name}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default DesktopSideBar;
