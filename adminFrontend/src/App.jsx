import "./App.scss"
import { BrowserRouter } from "react-router-dom"
import Routes from "./Routes"
import { url } from "./utils/config"

function App() {
  return (
    <BrowserRouter basename={url("/admin")}>
      <div className="App">
        <Routes/>
      </div>
    </BrowserRouter>
  )
}

export default App
