import { useState } from "react"
import "../styles/gridItems.css"

interface Props {
    gridSize: {
        rows:number,
        cols:number
    }
}
interface GridValues {
    id:number | null,
    value:number | null
}

const GridItems = (props:Props) => {
    const {gridSize : {rows, cols}} = props
    const [gridValues,setGridValues] = useState<GridValues[]>([])
    
    const handleClick = (e) => {
        // console.log(e.target)
        // console.log(e.target.attributes.id.value)
        const id = e.target.attributes.id.value
        const temp = [...gridValues]
        temp.push({id,value:gridValues.length + 1})
        setGridValues(temp)
    }
    
    return(
        <>
        {Array.from({length: rows}).map((_,i) => (
            <div className="grid-container" onClick={(e) => handleClick(e)}>
                {Array.from({length:cols}).map((_,j) => (
                    <span className="grid-item" id={`${i}`+j}>{gridValues.filter((item)=> item.id == (`${i}`+j))[0]?.value}</span>
        ))}
            </div>
        ))}
        <div>
            <button onClick={() => setGridValues([])} >Clear</button>    
        </div>
        </>
    )
}

export default GridItems