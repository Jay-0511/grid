import GridItems from "../components/GridItems"

const GridLayout = () => {
    const gridSize = {
        rows : 3,
        cols : 3
    }
    
    return (<>
        <div>Gridlayout</div>
        <GridItems gridSize={gridSize} />
        </>
    )
}

export default GridLayout