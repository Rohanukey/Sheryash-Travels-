import React from 'react'
import Css from "./About.module.css"
import pic1 from "../../assets/pro1.jpg"
import pic2 from "../../assets/pro2.jpg"

function About() {
    return (
        <>
            <div className={Css.title}>
                <h1>About Us</h1>
            </div>
            <div className={Css.details}>
                <div className={Css.pic}><img src={pic1}></img></div>
                <div className={Css.info}>
                    <h3>Hey i am Ravindra Bhongade Founder and owner of Sheryash travels i have a work experience of over 30 years in the field of Traveling Hence i have founded this company to make world travel easy for everyone </h3>
                </div>
            </div>
            <div className={Css.details}>
                <div className={Css.pic}><img src={pic2}></img></div>
                <div className={Css.info}>
                <h3>Hey i am Saurabh bhongade Co-Founder of Shreyash Travels i have a worl experience of over 10 years in the field of Traveling Hence i together with my  father and founder of sheryash travels founded this company to make world travel easy for everyone </h3>
                </div>
            </div>
            <div className={Css.details}>
                <div className={Css.pic}><img src="pic3.jpg" alt="Our Mission" /></div>
                <div className={Css.info}>
                    <h3>At Sheryash Travels, our mission is to provide a convenient, safe, and affordable travel solution for everyone. Whether you're commuting to work, heading to the airport, or exploring new destinations, we are here to make your journey smooth and enjoyable.</h3>
                </div>
            </div>
            
            <div className={Css.details}>
                <div className={Css.pic}><img src="pic4.jpg" alt="Why Choose Us" /></div>
                <div className={Css.info}>
                    <h3>Why choose us?</h3>
                    <ul>
                        <li>Reliable and well-trained drivers</li>
                        <li>Affordable and transparent pricing</li>
                        <li>Seamless app-based booking experience</li>
                        <li>24/7 customer support</li>
                        <li>Safety and hygiene as our top priority</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default About