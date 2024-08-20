import Figure from './Figure'
import { useDrop } from 'react-dnd'
import { motion } from 'framer-motion'

export default function Cell({
  cell,
  handleClickOnCell,
  handleSelectFigure,
  redFigures,
  isRedsTurn,
  blueFigures,
}) {
  // adds border to the cells to make a tic-tac-toe grid
  const isValidMove = cell?.isMoveValid ? 'isMoveValid' : ''
  const isWinningCell = cell?.winningCell ? 'winningCell' : ''
  const classNames = `cell ${isValidMove} ${isWinningCell}`
  const lastFigureOnCell = cell.figuresOnCell.at(-1)
  const [{}, drop] = useDrop(
    () => ({
      accept: 'FIGURE',
      drop: (item) => {
        handleClickOnCell(cell)
      },
    }),
    []
  )
  return (
    <div
      onClick={() => {
        handleClickOnCell(cell)
      }}
      ref={drop}
      key={cell.id}
      className={classNames}
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
