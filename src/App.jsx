import Game from './components/Game'
import Header from './components/Header'
import Footer from './components/Footer'
import Help from './components/Help'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { useState } from 'react'

function App() {
  const [showHelp, setShowHelp] = useState(false)

  return (
    <>
      <Header></Header>
      <DndProvider backend={HTML5Backend}>
        <Game></Game>
      </DndProvider>
      {showHelp ? <Help setShowHelp={setShowHelp}></Help> : <></>}
      <Footer setShowHelp={setShowHelp}></Footer>
    </>
  )
}

export default App
