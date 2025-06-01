import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { App } from './App'
import { Chips, ChipsGroup } from "./components/Chips"
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      {/* <App /> */}
      <ChipsGroup>
        <Chips cantClose label="Not me"/>
        <Chips label="Close me"/>
        <Chips label="Oy"/>
        <Chips label="Take it easy"/>
        <Chips label="I'm easy"/>
        <Chips label="Mmm"/>
        <Chips label="Not sure"/>
        <Chips label="I'm super long"/>
        <Chips label="Not me"/>
      </ChipsGroup>
    </BrowserRouter>
)