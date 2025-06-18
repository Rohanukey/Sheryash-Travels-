import React, { lazy, useState } from 'react'
import Css from "../../Pages/Services/Services.module.css"
import bg from '../../assets/taxi.jpg'
import bg2 from '../../assets/taxi_v.jpg'

function Services() {

    const [changetype, setChangetype] = useState("sedan")

    const tripdata = {

        sedan: [
            { no: 0, pointA: "Nagpur", pointB: "Nashik", distance: 626, rate: 12 },
            { no: 1, pointA: "Nagpur", pointB: "Mumbai", distance: 788, rate: 12 },
            { no: 2, pointA: "Nagpur", pointB: "Pune", distance: 687, rate: 12 },
            { no: 3, pointA: "Nagpur", pointB: "Indore", distance: 445, rate: 12 },
            { no: 4, pointA: "Nagpur", pointB: "Solapur", distance: 698, rate: 12 }],
        suv: [
            { no: 0, pointA: "Nagpur", pointB: "Nashik", distance: 626, rate: 15 },
            { no: 1, pointA: "Nagpur", pointB: "Mumbai", distance: 788, rate: 15 },
            { no: 2, pointA: "Nagpur", pointB: "Pune", distance: 687, rate: 15 },
            { no: 3, pointA: "Nagpur", pointB: "Indore", distance: 445, rate: 15 },
            { no: 4, pointA: "Nagpur", pointB: "Solapur", distance: 698, rate: 15 }]
    }

    return (
        <>
            <div className={Css.ContentWrapper}>
                <div className={Css.Imagecover}>
                    <img src={bg} loading={lazy} alt='BG'></img>
                </div>
                <div className={Css.mobileBG}>
                    <img src={bg2} loading={lazy} alt='mobileBG'></img>
                </div>
                <div className={Css.TripDetails}>
                    <div className={Css.title}>
                        <h3>Most common destinations at affordable rates</h3>
                    </div>
                    <div className={Css.selector}>
                        <select onChange={(e) => { setChangetype(e.target.value) }}>
                            <option value={"sedan"}>Sedan</option>
                            <option value={"suv"}>SUV</option>
                        </select>
                        <p>Select Car type here</p>
                    </div>
                    <table>
                        <tr>
                            <th>Pick up</th>
                            <th>Destination</th>
                            <th>Distance</th>
                            <th>Price</th>
                        </tr>
                        {tripdata[changetype].map((a, index) => {
                            return (
                                <tr key={index}>
                                    <td>{a.pointA}</td>
                                    <td>{a.pointB}</td>
                                    <td>{a.distance}Km</td>
                                    <td>{a.distance * a.rate} Rs</td>
                                </tr>
                            )
                        })
                        }
                    </table>
                    <h4>Above prices are calculated based on the distance shown and current rate please contact us for exact rate according to your trip</h4>
                </div>
            </div>
            <div className={Css.notes}>
                <h2>Thankyou for visiting Sheryash Tours and Travels</h2>
                <section>
                    <label>Our Packages</label>
                    <ul>
                        <li> Sedan rates :- 12km per kilometer</li>
                        <li> SUV rates :- 15km per kilometer</li>
                    </ul>
                </section>
                <section>
                    <label>Note</label>
                    <ul>
                        <li>The toll tax is not included in the specified rate. </li>
                        <li>Minimum 300km per day and 80km for 8 hrs for local will be charged. </li>
                        <li>If you have any queries regarding your trip like total cost or and extra charges please feel free to contact us.</li>
                        <li>Contact:- 9370235180 , 9766480401 </li>
                        <li>We provide cab facalities all over maharashtra from nagpur. </li>
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Services