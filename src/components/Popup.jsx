import React, { useRef, useState } from "react";
import pop from "../components/PopUp.module.css";

function Popup({ noteName, setNoteName, setSelected }) {
  const bg = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];

  const nameRef = useRef("");
  const [colorSelected, setColorSelected] = useState("");

  const handleCreate = () => {
    if (!(nameRef.current.value === "" || colorSelected === "")) {
      // Create a new note object
      const newNote = {
        name: nameRef.current.value,
        colour: colorSelected,
      };
      // Retrieve existing data from local storage
      const existingNotes = JSON.parse(localStorage.getItem("noteName")) || [];
      // Append the new note to the existing data
      const updatedNotes = [...existingNotes, newNote];
      // Update the state with the new note
      setNoteName(updatedNotes);
      // Update local storage with the modified noteName
      localStorage.setItem("noteName", JSON.stringify(updatedNotes));
  
      setSelected(false);
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
