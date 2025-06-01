import './App.scss'
import { LocationSection } from './sections/location/LocationSection'
import { MainSection } from './sections/main/MainSection'
import { ProgramSection } from './sections/program/program'

function App() {
  return (
    <main>
      <MainSection />
      <LocationSection />
      <ProgramSection />
    </main>
  )
}

export default App
