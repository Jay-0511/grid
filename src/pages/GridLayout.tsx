import GridItems from "../components/GridItems"

const GridLayout = () => {
    const gridSize = 3*3
    return (<>
        <div>Gridlayout</div>
        <GridItems gridSize={gridSize} />
        </>
    )
}

export default GridLayout