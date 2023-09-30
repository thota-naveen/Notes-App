import React from 'react'
import pop from '../components/PopUp.module.css'

function Popup() {
  const bg= ['#B38BFA','#FF79F2','#43E6FC','#F19576','#0047FF','#6691FF'];
  return (
    <div className={pop.bg}>
        <h1 className={pop.h}>Create New Notes group</h1>
<div style={{display:'flex'}}  className={pop.sec}>
    <span className={pop.txt}>Group Name</span>
    <input className={pop.bar} type="text" placeholder="Enter your group name..."  />
</div>
<div style={{display:'flex'}} className={pop.col}>
    <span className={pop.nam}>Choose Colour</span>
    {bg.map((color) => (
        <div key={color} style={{ backgroundColor: color }} className={pop.color}>
         
        </div>
      ))}
</div>
    <button className={pop.btn}> Create</button>
    {/* bg.map((color)=>(<div > </div>)) */}
    
    </div>
  )

}

export default Popup