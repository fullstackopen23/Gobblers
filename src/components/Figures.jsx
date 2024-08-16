import Figure from './Figure'

export default function Figures({
  team,
  handleSelectFigure,
  isRedsTurn,
  redFigures,
  blueFigures,
}) {
  const figures = team === 'red' ? redFigures : blueFigures
  return (
    <div>
      {figures.map((figure) => {
        // typeof figure.on checks if figure is onBoard yet, therefore has an proper on value
        if (typeof figure.on === 'number') {
          return null
        } else {
          return (
            <Figure
              handleSelectFigure={handleSelectFigure}
              figure={figure}
              key={figure.id}
              team={figure.team}
              isRedsTurn={isRedsTurn}
              size={figure.size}
              redFigures={redFigures}
              blueFigures={blueFigures}
            ></Figure>
          )
        }
      })}
    </div>
  )
}
