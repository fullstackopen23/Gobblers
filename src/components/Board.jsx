import Cell from './Cell'

export default function Board({
  cells,
  handleClickOnCell,
  handleSelectFigure,
  redFigures,
  blueFigures,
}) {
  return (
    <div className="board">
      {cells.map((cell) => {
        return (
          <Cell
            handleSelectFigure={handleSelectFigure}
            key={cell.id}
            cell={cell}
            handleClickOnCell={handleClickOnCell}
            redFigures={redFigures}
            blueFigures={blueFigures}
          ></Cell>
        )
      })}
    </div>
  )
}
