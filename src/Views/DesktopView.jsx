import React, { useState } from "react";
import DesktopSideBar from "../components/DesktopSideBar";
import DesktopNotes from "../components/DesktopNotes";
import Popup from "../components/Popup";

function DesktopView() {
  const [selected,setSelected]=useState('false');
  const [bg,setBG]=useState('white');
  // selected && (setBG('#2F2F2F'));
  return (
    <div>
    <div style={{ display: "flex" }}>
      <DesktopSideBar selected={selected} setSelected={setSelected} setBG={setBG} />
      <DesktopNotes/>
    </div>
    {selected || <div> <Popup/> </div>}
    </div>
  );
}

export default DesktopView;
