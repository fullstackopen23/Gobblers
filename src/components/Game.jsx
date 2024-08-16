import Figures from './Figures'
import Board from './Board'
import { useState, useEffect } from 'react'
import {
  isMoveValid,
  checkWinner,
  computerPlay,
} from '../utils/utils'

export default function Game() {
  const initalRedFigures = [
    {
      id: 0,
      team: 'red',
      size: 'small',
      on: null,
    },
    {
      id: 1,
      team: 'red',
      size: 'small',
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
      size: 'large',
      on: null,
    },
    {
      id: 5,
      team: 'red',
      size: 'large',
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

  const [selectedFigure, setSelectedFigure] = useState(null)
  const [isGameover, setIsGameover] = useState(false)
  const [isRedsTurn, setIsRedsTurn] = useState(true)
  const [redFigures, setRedFigures] = useState(initalRedFigures)
  const [blueFigures, setBlueFigures] = useState(initalBlueFigures)
  const [cells, setCells] = useState(initalCells)
  useEffect(() => {
    if (selectedFigure !== null) {
      console.log('Selected figure updated:', selectedFigure)
    }
  }, [selectedFigure])

  function handleSelectFigure(figure) {
    if (isGameover) return
    if (
      (isRedsTurn && figure.team === 'red') ||
      (!isRedsTurn && figure.team === 'blue')
    ) {
      console.log(figure)
      setSelectedFigure(figure)
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
        return cell
      } else if (selectedFigure?.on === cell.id) {
        cell.figuresOnCell.pop()
        return cell
      } else {
        return cell
      }
    })

    if (checkWinner(updatedCells)) {
      handleWin()
    }

    isRedsTurn
      ? setRedFigures(updatedFiguresOfTeamThatPlayed)
      : setBlueFigures(updatedFiguresOfTeamThatPlayed)
    setCells(updatedCells)
    setSelectedFigure(null)
    setIsRedsTurn(!isRedsTurn)

    const bestMove = computerPlay(
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
        const temp = [...cell.figuresOnCell, bestMove.playableFigure]
        return { ...cell, figuresOnCell: temp }
      } else if (cell.id === bestMove.playableFigure.on) {
        const temp = cell.figuresOnCell.slice(
          0,
          cell.figuresOnCell.length - 1
        )
        return { ...cell, figuresOnCell: temp }
      } else {
        return cell
      }
    })

    setCells(updatedCells2)
    setBlueFigures(updatedBlueFigures)
    setIsRedsTurn(true)
    if (checkWinner(updatedCells2)) {
      handleWin()
    }
  }

  function copy(val) {
    return JSON.parse(JSON.stringify(val))
  }

  function handleWin() {
    setIsGameover(true)
  }

  return (
    <>
      {selectedFigure?.id}
      <Figures
        team={'red'}
        handleSelectFigure={handleSelectFigure}
        isRedsTurn={isRedsTurn}
        redFigures={redFigures}
        blueFigures={blueFigures}
      ></Figures>
      <Board
        handleSelectFigure={handleSelectFigure}
        cells={cells}
        handleClickOnCell={handleClickOnCell}
        redFigures={redFigures}
        blueFigures={blueFigures}
      ></Board>
      <Figures
        handleSelectFigure={handleSelectFigure}
        isRedsTurn={isRedsTurn}
        redFigures={redFigures}
        blueFigures={blueFigures}
        team={'blue'}
      ></Figures>
    </>
  )
}
