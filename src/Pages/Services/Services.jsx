import React, { useState } from 'react'
import Css from "./Services.module.css"
import pic1 from "../../assets/car.jpg"
import Car1 from "../../assets/Car1.jpg"
import Car2 from "../../assets/Car2.jpg"
import Car3 from "../../assets/Car3.jpg"
import { useForm } from 'react-hook-form'

function Services() {

    const { register, handleSubmit, reset } = useForm()
    const [datasubmiting, setDatasubmiting] = useState(false)
    const [datasubmitted, setDatasubmitted] = useState(false)
    const [msg, setMsg] = useState("")



    const onSubmit = (data) => {
        console.log(data)
        setMsg("Checking Avaiable rides....")
        setDatasubmiting(true)
        setTimeout(() => {
            setDatasubmiting(false)
            setMsg("No avaiable rider")
            setDatasubmitted(true)
        },
            2000)
    }





    return (

        <>
            <div>
                <div className={Css.details}>
                    <div className={Css.info}>
                        <h3>Request a trip for Now or later </h3>
                        <form className={Css.tripD} onSubmit={handleSubmit(onSubmit)}>
                            <input type='text' placeholder='PickUp' {...register("Pickup", { required: true, minLength: 3 })}></input>
                            <div className={Css.line}></div>
                            <input type='text' placeholder='Destination' {...register('Destination', { required: true, min: 3 })}></input>
                            <br/>
                            <button className={Css.sub_btn} type='submit' >Find Ride</button>
                        </form>
                        <div>
                            {datasubmiting ? (<p className={Css.submiting_Msg}>{msg}</p>) : datasubmitted ? (<p className={Css.submitted_Msg}>{msg}</p>) : (null)}
                        </div>
                    </div>
                    <div className={Css.pic}><img src={pic1}></img></div>
                </div>
                <div className={Css.Cars}>
                    <h3>Avaiable cars </h3>
                    <div className={Css.cover}>
                        <div className={Css.CarCover}>
                            <img src={Car1}></img>
                            <h4>Mini</h4>
                        </div>
                        <div className={Css.CarCover}>
                            <img src={Car2}></img>
                            <h4>Premium</h4>
                        </div>
                        <div className={Css.CarCover}>
                            <img src={Car3}></img>
                            <h4>Luxury</h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services