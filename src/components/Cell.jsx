import Figure from './Figure'
import { useDrop } from 'react-dnd'
import { getBorder } from '../utils/utils'

export default function Cell({
  cell,
  handleClickOnCell,
  handleSelectFigure,
  redFigures,
  isRedsTurn,
  blueFigures,
}) {
  // adds border to the cells to make a tic-tac-toe grid
  const border = getBorder(cell.id)
  const isValidMove = cell?.isMoveValid ? 'isMoveValid' : ''
  const classNames = `cell ${border} ${isValidMove}`
  const lastFigureOnCell = cell.figuresOnCell.at(-1)
  const [{}, drop] = useDrop(
    () => ({
      accept: 'FIGURE',
      drop: (item) => {
        handleClickOnCell(cell, item.figure)
      },
    }),
    []
  )
  return (
    <div
      ref={drop}
      key={cell.id}
      className={classNames}
      onClick={() => {
        handleClickOnCell(cell, 'tischs')
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
          isRedsTurn={isRedsTurn}
        ></Figure>
      ) : (
        <></>
      )}
    </div>
  )
}
