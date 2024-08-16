import Figure from './Figure'

export default function Cell({
  cell,
  handleClickOnCell,
  handleSelectFigure,
  redFigures,
  blueFigures,
}) {
  const lastFigureOnCell = cell.figuresOnCell.at(-1)

  return (
    <div
      key={cell.id}
      className="cell"
      onClick={() => {
        handleClickOnCell(cell)
      }}
    >
      {lastFigureOnCell ? (
        <Figure
          handleSelectFigure={handleSelectFigure}
          team={lastFigureOnCell.team}
          size={lastFigureOnCell.size}
          figure={lastFigureOnCell}
          redFigures={redFigures}
          blueFigures={blueFigures}
        ></Figure>
      ) : (
        <></>
      )}
    </div>
  )
}
