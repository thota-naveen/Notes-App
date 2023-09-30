import './App.css'
import { useState } from 'react'
import DesktopView from './Views/DesktopView';
function App() {
  const [screenSize,setScreenSize]=useState(window.innerWidth);

  return (
    <>
       {screenSize >500 && <DesktopView/>}
    </>
  )
}

export default App
