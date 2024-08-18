import Game from './components/Game'
import Header from './components/Header'
import Footer from './components/Footer'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

function App() {
  return (
    <>
      <Header></Header>
      <DndProvider backend={HTML5Backend}>
        <Game></Game>
      </DndProvider>
      <Footer></Footer>
    </>
  )
}

export default App
