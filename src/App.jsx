import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import LineCharts from './components/LineCharts/LineCharts'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    <DaisyNav></DaisyNav>
    <NavBar></NavBar>
    <hr /><br />
    <PriceOptions></PriceOptions>
    <LineCharts></LineCharts>
    </>
  )
}

export default App
