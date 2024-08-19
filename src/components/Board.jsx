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
}) {
  const boardStates = {
    inital: (
      <g clip-path="url(#clip0_1_2)">
        <motion.line
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          stroke-width="10"
        />
        <motion.line
          y1="-5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          stroke-width="10"
        />
        <motion.line
          y1="-5"
          x2="450"
          y2="-5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          stroke-width="10"
        />
        <motion.line
          y1="-5"
          x2="450"
          y2="-5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          stroke-width="10"
        />
      </g>
    ),
    topH: (
      <g clip-path="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          stroke-width="10"
        />
        <motion.line
          y1="-5"
          x2="450"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 71)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          stroke-width="10"
        />
      </g>
    ),
    midH: (
      <g clip-path="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke-width="10"
        />
        <motion.path
          d="M0 224.5L450 224.5"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke-width="10"
        />
      </g>
    ),
    bottomH: (
      <g clip-path="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          stroke-width="10"
        />
        <motion.path
          d="M0 378L450 378"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          stroke-width="10"
        />
      </g>
    ),
    bottomLeft: (
      <g clip-path="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          stroke-width="10"
        />
        <motion.path
          d="M48 401.553L401.553 48"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          stroke-width="10"
        />
      </g>
    ),
    bottomRight: (
      <g clip-path="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          stroke-width="10"
        />
        <motion.path
          d="M48.4466 48L402 401.553"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          stroke-width="10"
        />
      </g>
    ),
    leftV: (
      <g clip-path="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          stroke-width="10"
        />
        <motion.path
          d="M75 450V0"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          stroke-width="10"
        />
      </g>
    ),
    midV: (
      <g clip-path="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          stroke-width="10"
        />
        <motion.path
          d="M225 450V0"
          stroke="black"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          stroke-width="10"
        />
      </g>
    ),
    rightV: (
      <g clip-path="url(#clip0_1_2)">
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 145 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(-3.75549e-08 -1 -1 5.08772e-08 295 450)"
          stroke="black"
          stroke-width="10"
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 145)"
          stroke="black"
          stroke-width="10"
        />
        <motion.path
          d="M377 450V0"
          stroke="black"
          stroke-width="10"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
        />
        <line
          y1="-5"
          x2="450"
          y2="-5"
          transform="matrix(1 -3.75549e-08 -5.08772e-08 -1 0 295)"
          stroke="black"
          stroke-width="10"
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
