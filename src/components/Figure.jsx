export default function Figure({
  team,
  size,
  figure,
  handleSelectFigure,
  redFigures,
  blueFigures,
}) {
  const classNames = `figure ${team} ${size}`
  function getFigure(clickedFig) {
    return [...redFigures, ...blueFigures].filter(
      (f) => f.id === clickedFig.id
    )[0]
  }
  return (
    <div
      className={classNames}
      onClick={() => {
        const tempFig = getFigure(figure)
        handleSelectFigure(tempFig)
      }}
    >
      O
    </div>
  )
}
