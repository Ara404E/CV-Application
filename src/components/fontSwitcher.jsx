import { useState } from "react";
import '../styles/font-switcher.css'

const FontSwitcher = ()=>{
    const [font , setFont] = useState("Garamond")

    return (
        <div className="font-switcher" style={{fontFamily:font}}>
            <h1> Choose the desired Font style for your CV </h1>
            <div className="buttons-div">
                <button onClick={() => setFont("Garamond") }> Garamond </button>
                <button onClick={() => setFont("Times New Roman")}> Times New Roman </button>
                <button onClick={() => setFont("Georgia")}> Georgia </button>
            </div>
        </div>
    )
} 

export default FontSwitcher;