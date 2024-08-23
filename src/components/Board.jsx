import { motion } from 'framer-motion'
import { useState } from 'react'
import Cell from './Cell'

export default function Board({
  boardState,
  cells,
  handleClickOnCell,
  handleSelectFigure,
  redFigures,
  isRedsTurn,
  blueFigures,
  selectedFigure,
}) {
  const boardStates = {
    inital: (
      <g clipPath="url(#clip0_1_2)">
        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.line
          y1="-5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.line
          y1="-5"
          x2="450"
          y2="-5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.line
          y1="-5"
          x2="450"
          y2="-5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          strokeWidth="10"
        />
      </g>
    ),
    topH: (
      <g clipPath="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          d="M0 74H450"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          strokeWidth="10"
        />
      </g>
    ),
    midH: (
      <g clipPath="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          strokeWidth="10"
        />
        <motion.path
          d="M0 224.5L450 224.5"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          strokeWidth="10"
        />
      </g>
    ),
    bottomH: (
      <g clipPath="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.path
          d="M0 378L450 378"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          strokeWidth="10"
        />
      </g>
    ),
    bottomLeft: (
      <g clipPath="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.path
          d="M48 401.553L401.553 48"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          strokeWidth="10"
        />
      </g>
    ),
    bottomRight: (
      <g clipPath="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.path
          d="M48.4466 48L402 401.553"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          strokeWidth="10"
        />
      </g>
    ),
    leftV: (
      <g clipPath="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.path
          d="M75 450V0"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          strokeWidth="10"
        />
      </g>
    ),
    midV: (
      <g clipPath="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.path
          d="M225 450V0"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          strokeWidth="10"
        />
      </g>
    ),
    rightV: (
      <g clipPath="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          strokeWidth="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          strokeWidth="10"
        />
        <motion.path
          d="M377 450V0"
          stroke="black"
          strokeWidth="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          strokeWidth="10"
        />
      </g>
    ),
  }

  return (
    <div className="board">
      <svg
        className="boardSvg"
        viewBox="0 0 450 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {boardStates[boardState]}
      </svg>

      {cells.map((cell) => {
        return (
          <Cell
            selectedFigure={selectedFigure}
            handleSelectFigure={handleSelectFigure}
            key={cell.id}
            cell={cell}
            isRedsTurn={isRedsTurn}
            handleClickOnCell={handleClickOnCell}
            redFigures={redFigures}
            blueFigures={blueFigures}
          ></Cell>
        )
      })}
    </div>
  )
}
