import { useDrag } from 'react-dnd'
import { useEffect } from 'react'

export default function Figure({
  team,
  size,
  figure,
  handleSelectFigure,
  redFigures,
  blueFigures,
}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'FIGURE',
    item: { figure },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  useEffect(() => {
    if (!isDragging) return
    handleSelectFigure(getFigure())
  }, [isDragging])

  function getFigure() {
    return [...redFigures, ...blueFigures].filter(
      (f) => f.id === figure.id
    )[0]
  }

  console

  const classNames = `figure ${team} ${size}`
  return (
    <div
      ref={drag}
      className={classNames}
      onClick={() => {
        handleSelectFigure(getFigure())
      }}
    >
      O
    </div>
  )
}
