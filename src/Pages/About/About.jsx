import React from 'react'
import Css from "./About.module.css"
import pic3 from "../../assets/tokyo.jpg"

function About() {
    return (
        <>
            <div className={Css.contentWrapper}>
                <div className={Css.Info}>
                    <h2>
                        Comfort & Convenience
                    </h2>
                    <h3>From the first click to the final drop, we deliver comfort with every ride</h3>
                    <div className={Css.hiddenpic1}>
                        <img src={pic3}></img>
                    </div>
                    <h4>At Shreyash Travels, we’re committed to providing safe, reliable, and comfortable cab services across India. Whether it’s a daily commute or an outstation trip, our experienced drivers and well-maintained vehicles ensure a smooth journey every time. Your travel, our responsibility.</h4>
                </div>
                <div className={Css.pic1}>
                    <img src={pic3}></img>
                </div>
            </div>
        </>
    )
}

export default About