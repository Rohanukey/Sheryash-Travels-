import React from 'react'
import Css from "./Header.module.css"
import logo from '../../assets/Sheryash_logo.png'
import ham from '../../assets/hamburger.png'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import MiniHeader from "../MiniHeader/MiniHeader"


function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const location = useLocation(); // Get the current path

    return (
        <>
            <div className={Css.Headercover}>
                <div className={Css.logo}>
                    <img src={logo}></img>
                </div>
                <div className={Css.navbar}>
                    <div className={Css.navbar}>
                        <Link
                            to="/"
                            className={location.pathname === "/" ? Css.active : ""}
                        >
                            <span className={`${Css.add1} ${location.pathname === "/" ? Css.add : ""}`}>Home</span>
                        </Link>
                        <Link
                            to="/About"
                            className={location.pathname === "/About" ? Css.active : ""}
                        >
                            <span className={`${Css.add1} ${location.pathname === "/About" ? Css.add : ""}`}>About</span>
                        </Link>
                        <Link
                            to="/Services"
                            className={location.pathname === "/Services" ? Css.active : ""}
                        >
                            <span className={`${Css.add1} ${location.pathname === "/Services" ? Css.add : ""}`}>Services</span>
                        </Link>
                        <Link
                            to="/OnlineBooking"
                            className={location.pathname === "/OnlineBooking" ? Css.active : ""}
                        >
                            <span className={`${Css.add1} ${location.pathname === "/OnlineBooking" ? Css.add : ""}`}>Online Booking</span>
                        </Link>

                        <p className={Css.contact}>Contact: 9370235180</p>
                    </div>
                </div>
                <div className={Css.MiniHeader} onClick={toggleMenu}>
                    <img src={ham}></img>
                </div>
            </div>
            <div className={Css.Menu} style={{ width: "100%" }}>
                {isOpen ? (<MiniHeader />) : (<div></div>)}
            </div>
        </>
    )
}

export default Header   