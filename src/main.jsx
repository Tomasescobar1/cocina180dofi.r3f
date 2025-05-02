import { StrictMode, useState } from "react"
import { createRoot } from "react-dom/client"
import './App.css'
import {Three} from "./Three.jsx"
//import Three2 from "./Three2.jsx"
import Steps from "./PageOne.jsx"

function ToggleButton()
{

}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className="ThreeComponentContainer">
            <Three/>
        </div>
        <Steps/>
    </StrictMode>
)