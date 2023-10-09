import React, { useState } from "react";
import DesktopSideBar from "../components/DesktopSideBar";
import DesktopNotes from "../components/DesktopNotes";
import Popup from "../components/Popup";
import NotesList from "../components/NotesList";

function DesktopView() {
  const [selected, setSelected] = useState(false);
  const [noteName, setNoteName] = useState([]);
  const [noteObject, setNoteObject] = useState({});
  const [messageName, setMessageName] = useState("");
  
  return (
    <div style={{ overflow: "hidden" }}>
      <div style={{ display: "flex" }}>
        <DesktopSideBar
          selected={selected}
          setSelected={setSelected}
          noteName={noteName}
          setNoteName={setNoteName}
          messageName={messageName}
          setMessageName={setMessageName}
        />
        {/* <DesktopNotes /> */}
        <NotesList
          noteObject={noteObject}
          setNoteObject={setNoteObject}
          messageName={messageName}
          setMessageName={setMessageName}
          noteName={noteName}
        />
      </div>
      {selected && (
        <div>
          <Popup
            noteObject={noteObject}
            noteName={noteName}
            setNoteName={setNoteName}
            setSelected={setSelected}
            setNoteObject={setNoteObject}
          />
        </div>
      )}
    </div>
  );
}

export default DesktopView;
