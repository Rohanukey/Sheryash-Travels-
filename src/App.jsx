import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage/Homepage"
import Header from "./Component/Header/Header";
import MiniHeader from "./Component/MiniHeader/MiniHeader";
import About from "./Pages/About/About";
import Ser from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import OnlineBooking from "./Pages/OnlineBooking/OnlineBooking";
import Footer from "./Component/Footer/Footer";
function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About/>} path="/About" />
          <Route element={<Ser/>} path="/Services"/>
          <Route element={<ContactUs/>} path="/ContactUs" />
          <Route element={<OnlineBooking/>} path="/OnlineBooking" />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
