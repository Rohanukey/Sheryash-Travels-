import React, { useEffect, useState } from "react";
import Css from "./OnlineBooking.module.css";
import { useForm } from "react-hook-form";
import car1 from "../../assets/Car1.jpg";
import axios from "axios";
import emailjs from 'emailjs-com';


function OnlineBooking() {
    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useState([]);
    const url = "http://localhost:3000/testdata/";
    const [successMessage, setSuccessMessage] = useState(""); // For success message
    const [isFormVisible, setIsFormVisible] = useState(true); // To hide/show form
    const [isSubmitting, setIsSubmitting] = useState(false); // New state for fake delay

    const onSubmit = async (dat) => {
        setIsSubmitting(true);

        setTimeout(async () => {
            try {
                // Send data to backend
                const res = await axios.post(url, dat);
                console.log("Response from server:", res.data);

                // Update state with the new data
                setData((prev) => [...prev, dat]);

                // Reset form fields after submission
                reset();

                {emailjs.send(
                    'service_y16w09j',     // replace with your EmailJS service ID
                    'template_7wo49ku',    // replace with your EmailJS template ID
                    dat,
                    'NbgYRGNM_jZv7vGOs'      // replace with your EmailJS public key
                )
                    .then(result => {
                        console.log('Email sent:', result.text);
                        alert("Booking confirmed & email sent!");
                    })
                    .catch(error => {
                        console.error('Email error:', error.text);
                    });
                }

                // successful massage
                setSuccessMessage(`Your Booking has been successfully, Thankyou for chosing us ${dat.name}.`)
                setIsFormVisible(false);

            } catch (err) {
                console.error("Error submitting data:", err);
            }

            finally {
                setIsSubmitting(false);
            }



        }, 2000);



    };

    const getdata = async () => {
        try {
            const res = await axios.get(url);
            console.log("Fetched Data:", res.data);
        } catch (err) {
            console.error("Error fetching data:", err);
        }
    };

    useEffect(() => {
        getdata();
    }, []);

    return (
        <div className={Css.Cover}>
            <div className={Css.outersection}>
                {isSubmitting ? (
                    <h2 style={{ color: "orange", marginTop: "20px" }}>Submitting...</h2>
                ) : isFormVisible ? (
                    <div>
                        <div className={Css.title}>
                            <h3>Want to book a ride...?</h3>
                        </div>
                        <div className={Css.formcover}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>Name</label>
                                <input {...register("name", { required: true, maxLength: 20 },)} />
                                <br />
                                <label>Pickup</label>
                                <input {...register("pickup", { required: true, maxLength: 20 },)} />
                                <br />
                                <label>Destination</label>
                                <input {...register("Destination", { required: true, maxLength: 20 },)} />
                                <br />
                                <label>Number</label>
                                <input {...register("number")} type="tel" required />
                                <br />
                                <label>Date</label>
                                <input type="date" {...register("date")} required />
                                <br />
                                <label>Time</label>
                                <input type="time" {...register("time")} required />
                                <br />
                                <input id="btnsumbit" type="submit" value="Book Now" /> 
                            </form>
                        </div>
                    </div>) : (
                    <div className={Css.Msg}>
                        <h2>{successMessage}</h2>
                        <button onClick={()=>(setIsFormVisible(true))} style={{height:50 , width:100}}>Back</button>
                    </div>)}
            </div>
            <div className={Css.bg1}>
                <img src={car1} alt="Car" />
                <div className={Css.suggestionsCover}>
                    <h2>Suggestions</h2>
                    <div className={Css.suggestions}>
                        <div className={Css.info}>
                            <h3>Reserve</h3>
                            <h4>Reserve your ride in advance so you relax while traveling</h4>
                        </div>
                        <div className={Css.info}>
                            <h3>Ride</h3>
                            <h4>Travel the world with us just request a ride and hop in</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OnlineBooking;
