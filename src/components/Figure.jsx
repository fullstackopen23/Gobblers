import { useDrag } from 'react-dnd'
import { useEffect } from 'react'

export default function Figure({
  team,
  size,
  figure,
  handleSelectFigure,
  redFigures,
  blueFigures,
  selectedFigure,
  isRedsTurn,
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FIGURE',
    item: { figure },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  useEffect(() => {
    if (isDragging) {
      handleSelectFigure(figure)
    }
  }, [isDragging])

  function getFigure() {
    return [...redFigures, ...blueFigures].filter(
      (f) => f.id === figure.id
    )[0]
  }

  let activeFigure
  if (selectedFigure?.id === figure.id) {
    activeFigure = 'activeFigure'
  } else {
    activeFigure = ''
  }

  // is it the figures team turn?
  let markUnplayable
  if (isRedsTurn && team === 'blue') {
    markUnplayable = 'markUnplayable'
  } else if (!isRedsTurn && team === 'red') {
    markUnplayable = 'markUnplayable'
  } else {
    markUnplayable = ''
  }

  const classNames = `figure ${team} ${size} ${activeFigure} ${markUnplayable}`
  return (
    <div
      ref={drag}
      className={classNames}
      onClick={() => {
        handleSelectFigure(getFigure())
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </svg>
    </div>
  )
}
