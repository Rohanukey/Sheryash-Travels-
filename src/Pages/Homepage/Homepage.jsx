import React from 'react'
import Css from "./Homepage.module.css"

function Homepage() {

  return (
    <>
      <div className={Css.Outercover}>
        <div className={Css.bgcover}>
          <div className={Css.bg}>
            <h1>Explore The world</h1><br />
            <h1>one Trip at a time</h1>
          </div>
        </div>
        <div className={Css.detailscover}>
          <div className={Css.details}>
            <div className={Css.info}>
              <h3>Email</h3>
              <h4>ShreyashTravels@gmail.com</h4>
            </div>
            <div className={Css.info}>
              <h3>Address</h3>
              <h4>Plot no X77 Abhijeet nagar manewada besa road Nagpur 440038</h4>
            </div>
            <div className={Css.info}>
              <h3>Bussiness Hours</h3>
              <h4>24hrs avaiable</h4>
            </div>
            <div className={Css.info}>
              <h3>Contact</h3>
              <h4>9370235180 , 9766480401</h4>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Homepage