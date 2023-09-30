import React, { useState } from 'react'
import notes from '../components/DesktopNotes.module.css'
import lock from '../images/lock.png'

function DesktopNotes() {
  return (
    <div className={notes.notes} style={{backgroundColor:''}}>
        <div style={{width:'45%',position:'absolute',bottom:'15vh'}}>
        <p style={{fontSize:'1.5rem',fontWeight:'400'}}>Pocket Notes</p>
        <p>Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
        <p style={{marginTop:'0px'}} ><img src={lock} style={{width:'10px',height:'10px'}} />end-to-end encrypted</p>
        </div>
        
    </div>
  )
}

export default DesktopNotes