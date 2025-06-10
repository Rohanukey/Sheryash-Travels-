import React from 'react'
import Css from "./MiniHeader.module.css"
import logo from '../../assets/l1.jpeg'
import { Link, useLocation } from 'react-router-dom'


function Header() {

    const location = useLocation(); // Get the current path

    return (
        <>
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
        </>
    )
}

export default Header