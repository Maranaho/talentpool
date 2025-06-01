import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
// import { App } from './App'
import { Progress} from "./components/Progress"
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
      {/* <App /> */}
      <Progress value={30}/>
    </BrowserRouter>
)