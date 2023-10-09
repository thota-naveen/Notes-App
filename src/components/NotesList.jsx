import React, { useEffect, useState } from "react";
import list from "./NotesList.module.css";
import iconEnter from "../images/icon-enter.png";

function NotesList({
  noteObject,
  setNoteObject,
  messageName,
  setMessageName,
  noteName,
}) {
  const [text, setText] = useState("");
  const [listm, setListm] = useState({});
  // let noteArray=[];
  const [noteArray, setNoteArray] = useState([]);
  const handleAddNote = (e) => {
    e.preventDefault();

    // Check if "messages" exists in localStorage
    const getLocal = localStorage.getItem("messages");
    const messages = getLocal ? JSON.parse(getLocal) : {};
    const timestamp = new Date().toISOString();
    const newListm = { ...messages[messageName], [timestamp]: text };
    setListm(newListm);
    localStorage.setItem(
      "messages",
      JSON.stringify({ ...messages, [messageName]: newListm })
    );
    setText("");

    // let temp = Object.entries(JSON.parse(localStorage.getItem('messages')).messageName);
    const message = JSON.parse(localStorage.getItem("messages")) || {}; 
    const temp = Object.entries(message[messageName] || {});

    setNoteArray(temp);
    console.log(noteArray);
  };

  return (
    <div className={list.list}>
      <header className={list.header}>
        <div className={list.logo}>{messageName.toUpperCase().slice(0, 2)}</div>
        <div className={list.noteName}>{messageName}</div>
      </header>
      {noteArray.map(([time, note], index) => (
        <div key={index}>
          {time} {note}
        </div>
      ))}
      <form className={list.inputField}>
        <textarea
          type="text"
          onChange={(e) => {
            setText(e.currentTarget.value);
          }}
          value={text}
          placeholder="Enter your Text here...."
          className={list.input}
        />
        <button onClick={handleAddNote} className={list.btn}>
          <img src={iconEnter} alt="" />
        </button>
      </form>
    </div>
  );
}

export default NotesList;
