import Figure from './Figure'
import { useDrop } from 'react-dnd'

export default function Cell({
  cell,
  handleClickOnCell,
  handleSelectFigure,
  redFigures,
  blueFigures,
}) {
  const [, drop] = useDrop(
    () => ({
      accept: 'FIGURE',
      drop: () => handleClickOnCell(cell),
    }),
    []
  )

  const lastFigureOnCell = cell.figuresOnCell.at(-1)
  return (
    <div
      ref={drop}
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
