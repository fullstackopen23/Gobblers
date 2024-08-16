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
    type: 'Figure',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  useEffect(() => {
    if (isDragging) {
      console.log(getFigure())
      handleSelectFigure(getFigure())
    }
  }, [isDragging])

  function getFigure() {
    return [...redFigures, ...blueFigures].filter(
      (f) => f.id === figure.id
    )[0]
  }

  const classNames = `figure ${team} ${size} ${
    isDragging ? 'isDragging' : ''
  }`
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
