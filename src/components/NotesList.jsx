import React,{useEffect, useState} from "react";
import list from "./NotesList.module.css";
import iconEnter from "../images/icon-enter.png";

function NotesList({noteObject, setNoteObject}) {
    const [text,setText]=useState('');
    const handleAddNote=(e)=>{
        e.preventDefault();

    }

  return (
    <div className={list.list}>
      <header className={list.header}>
        <div className={list.logo}>CU</div>
        <div className={list.noteName}>Cuvvete Notes</div>
      </header>
      <form className={list.inputField}>
        <textarea
          type="text"
          onChange={(e)=>{
            setText(e.currentTarget.value);
          }}
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
