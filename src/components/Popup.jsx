import React, { useEffect, useRef, useState } from "react";
import pop from "../components/PopUp.module.css";

function Popup({
  noteObject,
  noteName,
  setNoteName,
  setSelected,
  setNoteObject,
}) {
  const bg = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

  const nameRef = useRef("");
  const [colorSelected, setColorSelected] = useState("");
  // const [date, SetDate] = useState(new Date(Date.now()));
  

  const handleCreate = () => {
    if (!(nameRef.current.value === "" || colorSelected === "")) {
      // Create a new note object
      const newNote = {
        name: nameRef.current.value,
        colour: colorSelected,
      };
      const existingNotes = JSON.parse(localStorage.getItem("noteName")) || [];
      const updatedNotes = [...existingNotes, newNote];
      setNoteName(updatedNotes);
      localStorage.setItem("noteName", JSON.stringify(updatedNotes));
      setSelected(false);
      // createNoteObj(noteName.name);
      setNoteObject((prevNoteObject) => {
        return {
          ...prevNoteObject,
          [newNote.name]: {
            name: newNote.name,
            messages: {},
          },
        };
      });
      localStorage.setItem('messages',JSON.stringify(noteObject));
      
    }
  };

  return (
    <div className={pop.bg}>
      <h1 className={pop.h}>Create New Notes Group</h1>
      <div style={{ display: "flex" }} className={pop.sec}>
        <span className={pop.txt}>Group Name</span>
        <input
          className={pop.bar}
          type="text"
          ref={nameRef}
          placeholder="Enter your group name..."
        />
      </div>
      <div style={{ display: "flex" }} className={pop.col}>
        <span className={pop.nam}>Choose Colour</span>
        {bg.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className={pop.color}
            onClick={() => {
              setColorSelected(color);
            }}
          ></div>
        ))}
      </div>
      <button className={pop.btn} onClick={handleCreate}>
        Create
      </button>
    </div>
  );
}

export default Popup;
