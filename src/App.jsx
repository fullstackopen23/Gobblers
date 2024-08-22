import Game from './components/Game'
import Header from './components/Header'
import Footer from './components/Footer'
import Help from './components/Help'
import { useEffect, useState } from 'react'

function App() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <>
      <Header></Header>
      <Game></Game>
      {showHelp ? (
        <Help showHelp={showHelp} setShowHelp={setShowHelp}></Help>
      ) : (
        <></>
      )}
      <Footer setShowHelp={setShowHelp}></Footer>
    </>
  )
}

export default App
