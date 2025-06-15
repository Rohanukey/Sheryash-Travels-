import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Homepage/Homepage"
import Header from "./Component/Header/Header";
import MiniHeader from "./Component/MiniHeader/MiniHeader";
import About from "./Pages/About/About";
import Ser from "./Pages/Services/Services";
import ContactUs from "./Pages/ContactUs/ContactUs";
import OnlineBooking from "./Pages/OnlineBooking/OnlineBooking";
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
          {/*<Route element={<Home />} path="/About" />
          <Route element={<Home />} path="/services" />
          <Route element={<Home />} path="/contact" />
          <Route element={<Home />} path="/Online Booking" />*/}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
