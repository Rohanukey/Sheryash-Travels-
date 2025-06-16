import React from 'react'
import Css from "../../Pages/Services/Services.module.css"
import bg from '../../assets/taxi.jpg'
import bg2 from '../../assets/taxi_v.jpg'

function Services() {

    const tripdata = [
        { no: 0, pointA: "Nagpur", pointB: "Delhi", distance: "10km", price: 500 },
        { no: 1, pointA: "Nagpur", pointB: "Delhi", distance: "15km", price: 1500 },
        { no: 2, pointA: "Nagpur", pointB: "Delhi", distance: "20km", price: 2500 },
        { no: 3, pointA: "Nagpur", pointB: "Delhi", distance: "15km", price: 2500 },
        { no: 4, pointA: "Nagpur", pointB: "Delhi", distance: "18km", price: 5500 }
    ]

    return (
        <>
            <div className={Css.ContentWrapper}>
                <div className={Css.Imagecover}>
                    <img src={bg} alt='BG'></img>
                </div>
                <div className={Css.mobileBG}>
                    <img src={bg2} alt='mobileBG'></img>
                </div>
                <div className={Css.TripDetails}>
                    <div className={Css.title}>
                        <h3>Most common destinations at affordable rates</h3>
                    </div>
                    <table>
                        <tr>
                            <th>Point A</th>
                            <th>Point B</th>
                            <th>Distance</th>
                            <th>Price</th>
                        </tr>
                        {tripdata.map((a, index) => {
                            return (
                                <tr key={index}>
                                    <td>{a.pointA}</td>
                                    <td>{a.pointB}</td>
                                    <td>{a.distance}</td>
                                    <td>Rs {a.price}</td>
                                </tr>
                            )
                        })
                        }
                    </table>
                </div>
            </div>
        </>
    )
}

export default Services