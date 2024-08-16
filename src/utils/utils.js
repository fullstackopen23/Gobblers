export function isMoveValid(cell, figure) {
  const lastFigureOnBoard = cell.figuresOnCell.at(-1)

  if (
    lastFigureOnBoard?.size === 'small' &&
    figure.size === 'medium'
  ) {
    return true
  } else if (!lastFigureOnBoard) {
    return true
  } else {
    return false
  }
}
function getPlayableMoves(cells, figures) {
  const playableMoves = []
  for (let i = 0; i < cells.length; i++) {
    for (let y = 0; y < figures.length; y++) {
      if (isMoveValid(cells[i], figures[y])) {
        playableMoves.push({
          playableFigure: figures[y],
          playableCell: cells[i],
        })
      }
    }
  }
  return playableMoves
}

function evalBoard(cells) {
  // Define scoring parameters
  const WIN_SCORE = 1000
  const BLOCK_OPPONENT_SCORE = 500
  const CENTER_BONUS = 50
  const CORNER_BONUS = 25

  let score = 0

  // Evaluate center control (for a 3x3 board, the center is the 4th cell)
  const centerCell = cells[4]
  if (centerCell.figuresOnCell.length > 0) {
    if (centerCell.figuresOnCell.at(-1).team === 'blue') {
      score += CENTER_BONUS
    } else {
      score -= CENTER_BONUS
    }
  }

  // Evaluate corner control
  const cornerIndices = [0, 2, 6, 8]
  for (const i of cornerIndices) {
    const cornerCell = cells[i]
    if (cornerCell.figuresOnCell.length > 0) {
      if (cornerCell.figuresOnCell.at(-1).team === 'blue') {
        score += CORNER_BONUS
      } else {
        score -= CORNER_BONUS
      }
    }
  }

  // Evaluate rows, columns, and diagonals for winning potential and blocking
  const winningLines = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonal top-left to bottom-right
    [2, 4, 6], // diagonal top-right to bottom-left
  ]

  for (const line of winningLines) {
    const [a, b, c] = line
    const lineCells = [cells[a], cells[b], cells[c]]

    const lineTeams = lineCells.map((cell) => {
      return cell.figuresOnCell.length > 0
        ? cell.figuresOnCell.at(-1).team
        : null
    })

    const blueCount = lineTeams.filter(
      (team) => team === 'blue'
    ).length
    const redCount = lineTeams.filter((team) => team === 'red').length

    // Check if Blue is close to winning
    if (blueCount === 2 && redCount === 0) {
      score += WIN_SCORE
    }
    // Check if Red is close to winning
    if (redCount === 2 && blueCount === 0) {
      score -= WIN_SCORE
    }
    // Reward blocking an opponent's potential win
    if (redCount === 2 && blueCount === 1) {
      score += BLOCK_OPPONENT_SCORE
    }
    if (blueCount === 2 && redCount === 1) {
      score -= BLOCK_OPPONENT_SCORE
    }
  }
  const numberOfBlueOnBoard = cells.reduce((prev, curr) => {
    if (curr.figuresOnCell.length > 0) {
      if (curr.figuresOnCell.at(-1).team === 'blue') {
        return prev + 1
      }
    }
    return prev
  }, 0)

  const numberOfRedOnBoard = cells.reduce((prev, curr) => {
    if (curr.figuresOnCell.length > 0) {
      if (curr.figuresOnCell.at(-1).team === 'red') {
        return prev + 1
      }
    }
    return prev
  }, 0)
  // Overall board control
  if (numberOfBlueOnBoard > numberOfRedOnBoard) {
    score += 100
  } else if (numberOfRedOnBoard > numberOfBlueOnBoard) {
    score -= 100
  }

  return score
}

export function computerPlay(redFigures, blueFigures, cells) {
  const playableMoveForBlue = getPlayableMoves(cells, blueFigures)
  console.log(playableMoveForBlue)
  let bestMove
  let bestScore = -Infinity
  playableMoveForBlue.forEach((move) => {
    const updatedCells = cells.map((cell) => {
      if (cell.id === move.playableCell.id) {
        const temp = [...cell.figuresOnCell, move.playableFigure]
        return { ...cell, figuresOnCell: temp }
      } else if (cell.id === move.playableFigure.on) {
        const temp = cell.figuresOnCell.slice(
          0,
          cell.figuresOnCell.length - 1
        )
        return { ...cell, figuresOnCell: temp }
      } else {
        return cell
      }
    })

    const updatedBlueFigures = blueFigures.map((bf) => {
      if (bf.id === move.playableFigure.id) {
        return { ...bf, on: move.playableCell.id }
      } else {
        return bf
      }
    })

    const node = {
      cells: updatedCells,
      redFigures,
      blueFigures: updatedBlueFigures,
    }

    console.log(move)

    const score = minimax(node, 2, true, -Infinity, Infinity)
    if (score > bestScore) {
      bestScore = score
      bestMove = move
    }
  })
  console.log(bestScore)
  return bestMove
}

function minimax(node, depth, maximizingPlayer, alpha, beta) {
  const winner = checkWinner(node.cells)
  if (winner) {
    return evalBoard(node.cells)
  }
  if (depth === 0) {
    return evalBoard(node.cells)
  }

  if (maximizingPlayer) {
    let minVal = Infinity
    const playableMovesForMin = getPlayableMoves(
      node.cells,
      node.redFigures
    )
    console.log(playableMovesForMin)

    for (const move of playableMovesForMin) {
      const updatedCells = node.cells.map((cell) => {
        if (cell.id === move.playableCell.id) {
          const temp = [...cell.figuresOnCell, move.playableFigure]
          return { ...cell, figuresOnCell: temp }
        } else if (cell.id === move.playableFigure.on) {
          const temp = cell.figuresOnCell.slice(
            0,
            cell.figuresOnCell.length - 1
          )
          return { ...cell, figuresOnCell: temp }
        } else {
          return cell
        }
      })
      const updatedRedFigures = node.redFigures.map((rf) => {
        if (rf.id === move.playableFigure.id) {
          return { ...rf, on: move.playableCell.id }
        } else {
          return rf
        }
      })

      const updatedNode = {
        cells: updatedCells,
        redFigures: updatedRedFigures,
        blueFigures: node.blueFigures,
      }
      const score = minimax(
        updatedNode,
        depth - 1,
        false,
        alpha,
        beta
      )
      minVal = Math.min(score, minVal)
      beta = Math.min(beta, eval)
      if (beta <= alpha) break
    }
    return minVal
  } else {
    let maxVal = -Infinity

    const playableMoveForMax = getPlayableMoves(
      node.cells,
      node.blueFigures
    )

    for (const move of playableMoveForMax) {
      const updatedCells = node.cells.map((cell) => {
        if (cell.id === move.playableCell.id) {
          const temp = [...cell.figuresOnCell, move.playableFigure]
          return { ...cell, figuresOnCell: temp }
        } else if (cell.id === move.playableFigure.on) {
          const temp = cell.figuresOnCell.slice(
            0,
            cell.figuresOnCell.length - 1
          )
          return { ...cell, figuresOnCell: temp }
        } else {
          return cell
        }
      })
      const updatedBlueFigures = node.blueFigures.map((rf) => {
        if (rf.id === move.playableFigure.id) {
          return { ...rf, on: move.playableCell.id }
        } else {
          return rf
        }
      })

      const updatedNode = {
        cells: updatedCells,
        redFigures: node.redFigures,
        blueFigures: updatedBlueFigures,
      }
      const val = minimax(updatedNode, depth - 1, true, alpha, beta)
      maxVal = Math.max(maxVal, val)
      alpha = Math.max(alpha, val)
      if (beta <= alpha) {
        break
      }
    }
    return maxVal
  }
}

export function checkWinner(squares) {
  const lastFigureOnCells = squares.map((square) => {
    return {
      figureOnCell: square.figuresOnCell.at(-1),
    }
  })

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (
      lastFigureOnCells[a].figureOnCell?.team &&
      lastFigureOnCells[a].figureOnCell?.team ===
        lastFigureOnCells[b].figureOnCell?.team &&
      lastFigureOnCells[a].figureOnCell?.team ===
        lastFigureOnCells[c].figureOnCell?.team
    ) {
      return {
        squares: [a, b, c],
        winnerTeam: lastFigureOnCells[a].figureOnCell?.team,
      }
    }
  }
  return null
}
