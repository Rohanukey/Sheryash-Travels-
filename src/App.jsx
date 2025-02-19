import { BrowserRouter, Route ,Routes } from "react-router-dom"
import Index from "./Pages/Homepage/Homepage"
function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route element={<Index/>} path="/"/>
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App
