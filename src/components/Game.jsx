import Figures from './Figures'
import Board from './Board'
import { useState } from 'react'
import {
  isMoveValid,
  checkWinner,
  computerPlay,
} from '../utils/utils'
import Info from './Info'

export default function Game() {
  const initalRedFigures = [
    {
      id: 0,
      team: 'red',
      size: 'large',
      on: null,
    },
    {
      id: 1,
      team: 'red',
      size: 'large',
      on: null,
    },
    {
      id: 2,
      team: 'red',
      size: 'medium',
      on: null,
    },
    {
      id: 3,
      team: 'red',
      size: 'medium',
      on: null,
    },
    {
      id: 4,
      team: 'red',
      size: 'small',
      on: null,
    },
    {
      id: 5,
      team: 'red',
      size: 'small',
      on: null,
    },
  ]
  const initalBlueFigures = [
    {
      id: 10,
      team: 'blue',
      size: 'small',
      on: null,
    },
    {
      id: 11,
      team: 'blue',
      size: 'small',
      on: null,
    },
    {
      id: 12,
      team: 'blue',
      size: 'medium',
      on: null,
    },
    {
      id: 13,
      team: 'blue',
      size: 'medium',
      on: null,
    },
    {
      id: 14,
      team: 'blue',
      size: 'large',
      on: null,
    },
    {
      id: 15,
      team: 'blue',
      size: 'large',
      on: null,
    },
  ]
  const initalCells = [
    { id: 0, figuresOnCell: [] },
    { id: 1, figuresOnCell: [] },
    { id: 2, figuresOnCell: [] },
    { id: 3, figuresOnCell: [] },
    { id: 4, figuresOnCell: [] },
    { id: 5, figuresOnCell: [] },
    { id: 6, figuresOnCell: [] },
    { id: 7, figuresOnCell: [] },
    { id: 8, figuresOnCell: [] },
  ]
  const selectMessage =
    'Click on a figure to select it or drag it directly on the field.'
  const placeMessage =
    'Place the figure on a valid field. Valid fields are highlighted.'
  const [selectedFigure, setSelectedFigure] = useState(null)
  const [message, setMessage] = useState({
    isRedsTurn: true,
    message: selectMessage,
    winnerMessage: null,
  })
  const [boardState, setBoardState] = useState('inital')
  const [isGameover, setIsGameover] = useState(false)
  const [isRedsTurn, setIsRedsTurn] = useState(true)
  const [redFigures, setRedFigures] = useState(initalRedFigures)
  const [blueFigures, setBlueFigures] = useState(initalBlueFigures)
  const [cells, setCells] = useState(initalCells)
  const [opponent, setOpponent] = useState('hard')

  function handleSelectFigure(figure) {
    if (isGameover) return
    if (!isRedsTurn && opponent !== 'friend') return
    if (
      (isRedsTurn && figure.team === 'red') ||
      (!isRedsTurn && figure.team === 'blue')
    ) {
      setSelectedFigure((prevFigure) => {
        console.log('Previous Figure:', prevFigure)
        return figure // or any logic you need
      })

      setMessage({
        isRedsTurn,
        message: placeMessage,
        winnerMessage: null,
      })

      const updatedCells = cells.map((cell) => {
        if (isMoveValid(cell, figure)) {
          return { ...cell, isMoveValid: true }
        } else {
          return cell
        }
      })
      setCells(updatedCells)
    }
  }

  function handleClickOnCell(clickedCell) {
    console.log(selectedFigure)
    if (isGameover) return
    if (!selectedFigure) return
    if (!isMoveValid(clickedCell, selectedFigure)) return
    const figuresOfTeamThatPlayed = isRedsTurn
      ? redFigures
      : blueFigures

    const updatedFiguresOfTeamThatPlayed =
      figuresOfTeamThatPlayed.map((figure) => {
        if (figure.id === selectedFigure.id) {
          return { ...figure, on: clickedCell.id }
        } else {
          return figure
        }
      })

    const updatedCells = cells.map((cell) => {
      if (cell.id === clickedCell.id) {
        cell.figuresOnCell.push(selectedFigure)
        return { ...cell, isMoveValid: false }
      } else if (selectedFigure?.on === cell.id) {
        cell.figuresOnCell.pop()
        return { ...cell, isMoveValid: false }
      } else {
        return { ...cell, isMoveValid: false }
      }
    })

    if (checkWinner(updatedCells)) {
      handleWin(updatedCells)
      return
    }

    isRedsTurn
      ? setRedFigures(updatedFiguresOfTeamThatPlayed)
      : setBlueFigures(updatedFiguresOfTeamThatPlayed)
    setCells(updatedCells)
    setSelectedFigure(null)
    setMessage({
      isRedsTurn: !isRedsTurn,
      message: selectMessage,
      winnerMessage: null,
    })
    setIsRedsTurn(!isRedsTurn)

    if (!(opponent === 'friend')) {
      setTimeout(() => {
        const bestMove = computerPlay(
          opponent,
          copy(updatedFiguresOfTeamThatPlayed),
          copy(blueFigures),
          copy(updatedCells)
        )
        const updatedBlueFigures = blueFigures.map((bf) => {
          if (bf.id === bestMove.playableFigure.id) {
            return { ...bf, on: bestMove.playableCell.id }
          } else {
            return bf
          }
        })

        const updatedCells2 = cells.map((cell) => {
          if (cell.id === bestMove.playableCell.id) {
            const temp = [
              ...cell.figuresOnCell,
              bestMove.playableFigure,
            ]
            return {
              ...cell,
              figuresOnCell: temp,
              isMoveValid: false,
            }
          } else if (cell.id === bestMove.playableFigure.on) {
            const temp = cell.figuresOnCell.slice(
              0,
              cell.figuresOnCell.length - 1
            )
            return {
              ...cell,
              figuresOnCell: temp,
              isMoveValid: false,
            }
          } else {
            return { ...cell, isMoveValid: false }
          }
        })
        setCells(updatedCells2)
        setBlueFigures(updatedBlueFigures)
        setMessage({
          isRedsTurn: isRedsTurn,
          message: selectMessage,
          winnerMessage: null,
        })

        setIsRedsTurn(true)
        if (checkWinner(updatedCells2)) {
          handleWin(updatedCells2)
        }
      }, 500)
    }
  }

  function copy(val) {
    return JSON.parse(JSON.stringify(val))
  }

  function handleRestart() {
    setSelectedFigure(null)
    setRedFigures(initalRedFigures)
    setBlueFigures(initalBlueFigures)
    setCells(initalCells)
    setIsGameover(false)
    setIsRedsTurn(true)
    setMessage({
      isRedsTurn,
      message: selectMessage,
      winnerMessage: null,
    })
    setBoardState('inital')
  }

  function handleWin(cells) {
    setIsGameover(true)
    const winner = checkWinner(cells)

    setBoardState(winner.cellsInName)

    const updatedCells = cells.map((cell) => {
      if (winner.squares.includes(cell.id)) {
        return { ...cell, isMoveValid: false }
      } else {
        return cell
      }
    })
    setCells(updatedCells)

    if (winner.winnerTeam === 'red') {
      const newMes = {
        isRedsTurn,
        message: '',
        winnerMessage: 'Team red won the game!',
      }
      setMessage(newMes)
    } else {
      setMessage({
        isRedsTurn,
        message: '',
        winnerMessage: 'Team blue won the game!',
      })
    }
  }

  return (
    <div className="game-container">
      <Info
        handleRestart={handleRestart}
        message={message}
        setOpponent={setOpponent}
      ></Info>
      <div className="boardFiguresContainer">
        <Figures
          team={'red'}
          selectedFigure={selectedFigure}
          handleSelectFigure={handleSelectFigure}
          isRedsTurn={isRedsTurn}
          redFigures={redFigures}
          blueFigures={blueFigures}
        ></Figures>
        <Board
          boardState={boardState}
          handleSelectFigure={handleSelectFigure}
          cells={cells}
          handleClickOnCell={handleClickOnCell}
          redFigures={redFigures}
          selectedFigure={selectedFigure}
          blueFigures={blueFigures}
          isRedsTurn={isRedsTurn}
        ></Board>
        <Figures
          handleSelectFigure={handleSelectFigure}
          selectedFigure={selectedFigure}
          isRedsTurn={isRedsTurn}
          redFigures={redFigures}
          blueFigures={blueFigures}
          team={'blue'}
        ></Figures>
      </div>
    </div>
  )
}
