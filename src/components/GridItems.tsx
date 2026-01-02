import { useState } from "react"
import "../styles/gridItems.css"

interface Props {
    gridSize:number
}
const GridItems = (props:Props) => {
    const {gridSize} = props
    console.log(gridSize)
    
    const handleClick = (e) => {
        console.log(e.target)
        console.log(e.target.attributes.id.value)
        
    }

    if(gridSize){
        return(
            <>
               <div className="grid-container" onClick={(e) => handleClick(e)}>
                    <span className="grid-item" id="1"></span>
                    <span className="grid-item" id="2"></span>
                    <span className="grid-item" id="3"></span>
               </div>
               <div className="grid-container" onClick={(e) => handleClick(e)}>
                    <span className="grid-item" id="4"></span>
                    <span className="grid-item" id="5"></span>
                    <span className="grid-item" id="6"></span>
               </div>
               <div className="grid-container" onClick={(e) => handleClick(e)}>
                    <span className="grid-item" id="7"></span>
                    <span className="grid-item" id="8"></span>
                    <span className="grid-item" id="9"></span>
               </div>
               </>
            )
    }
}

export default GridItems