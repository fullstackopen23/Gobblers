import { useDrag } from 'react-dnd'
import { useEffect, useState } from 'react'
import { motion, animate } from 'framer-motion'

export default function Figure({
  team,
  size,
  figure,
  index,
  handleSelectFigure,
  redFigures,
  blueFigures,
  selectedFigure,
  isRedsTurn,
  showAnimation,
  isGameOver,
}) {
  let variants
  variants = showAnimation
    ? (variants = {
        hidden: { opacity: 0, translateX: team === 'red' ? -50 : 50 },
        visible: { opacity: 1, translateX: 0 },
      })
    : {
        hidden: {},
        visible: {},
      }

  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: 'FIGURE',
    item: { figure },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
    preview: null,
  }))

  useEffect(() => {
    if (isDragging) {
      preview(null)
      handleSelectFigure(getFigure())
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
    <motion.div
      variants={variants}
      initial="hidden" // The initial state before animation
      animate="visible" // The state after animation
      transition={{ delay: 0.1 * index }}
      ref={drag}
      className={classNames}
      onClick={() => {
        handleSelectFigure(getFigure())
      }}
    >
      <motion.svg
        className="figureSvg"
        onContextMenu={(e) => {
          console.log('a')
          e.preventDefault()
        }}
        whileTap={{ scale: 0.8 }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
      </motion.svg>
    </motion.div>
  )
}
