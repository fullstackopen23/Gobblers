import { motion, AnimatePresence } from 'framer-motion'

export default function Help({ showHelp, setShowHelp }) {
  console.log(showHelp)
  return (
    <motion.div className="help" key="help">
      {showHelp && (
        <AnimatePresence mode="wait">
          <motion.div
            key="backdrop"
            onClick={() => {
              setShowHelp(false)
            }}
            className="modalBackdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
          <motion.div
            key="modal"
            className="helpModal"
            initial={{
              opacity: 0,
              translateY: '-100%',
              translateX: '-50%',
            }}
            animate={{
              opacity: 1,
              translateY: '-50%',
              translateX: '-50%',
            }}
            exit={{
              opacity: 0,
              translateY: '100%',
              translateX: '-50%',
            }}
          >
            <svg
              onClick={() => {
                setShowHelp(false)
              }}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"></path>
              <path
                fill="#fff"
                d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
              ></path>
              <path
                fill="#fff"
                d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
              ></path>
            </svg>
            <h2>How to play</h2>
            <br />
            <p>Gobblet Gobblers is a turn based game for 2.</p>
            <br />
            <p>
              It plays like the game tic-tac-toe but with a twist!
            </p>
            <p>
              You can gobble up your opponent's piece if it is smaller
              than yours!
            </p>
            <br />
            <p>
              Each player's objective is to line up three pieces in a
              row or in a diagonal.
            </p>
          </motion.div>
        </AnimatePresence>
      )}
    </motion.div>
  )
}
