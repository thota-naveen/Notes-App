import React, { useState } from "react";
import DesktopSideBar from "../components/DesktopSideBar";
import DesktopNotes from "../components/DesktopNotes";
import Popup from "../components/Popup";

function DesktopView() {
  const [selected, setSelected] = useState(false);
  const [noteName, setNoteName] = useState([]);
  
  return (
    <div>
      <div style={{ display: "flex" }}>
        <DesktopSideBar
          selected={selected}
          setSelected={setSelected}
          noteName={noteName}
          setNoteName={setNoteName}
        />
        <DesktopNotes />
      </div>
      {selected && (
        <div>
          {" "}
          <Popup noteName={noteName} setNoteName={setNoteName} setSelected={setSelected} />{" "}
        </div>
      )}
    </div>
  );
}

export default DesktopView;
