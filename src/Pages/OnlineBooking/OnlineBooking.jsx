import React, { useEffect, useState } from "react";
import Css from "./OnlineBooking.module.css";
import { useForm } from "react-hook-form";
import car1 from "../../assets/Car1.webp";
import axios from "axios";
import tick from "../../assets/tick.webp";
import emailjs from 'emailjs-com';

function OnlineBooking() {
    const { register, handleSubmit, reset } = useForm();
    const [data, setData] = useState([]);
    const url = "https://sheryash-travel-backend.onrender.com/api/users";
    const [successMessage, setSuccessMessage] = useState("");
    const [isFormVisible, setIsFormVisible] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (dat) => {
        setIsSubmitting(true);

        try {
            const res = await axios.post(url, dat);
            console.log("Response from server:", res.data);
            setData((prev) => [...prev, dat]);
            reset();

            {
                await emailjs.send(
                    'service_y16w09j',
                    'template_7wo49ku',
                    dat,
                    'NbgYRGNM_jZv7vGOs'
                );
            }

            setSuccessMessage(`Your Booking has been successfully, Thankyou for chosing us ${dat.name}.`);
            setIsFormVisible(false);
        } catch (err) {
            console.error("Error submitting data:", err);
        } finally {
            setIsSubmitting(false);
        }
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
        <div className={Css.bookingPageContainer}>
            <div className={Css.formSection}>
                {isFormVisible ? (
                    <div className={Css.bookingFormWrapper}>
                        <div className={Css.formHeader}>
                            <h3>Want to book a ride...?</h3>
                        </div>
                        <div className={Css.formContainer}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={Css.inputGroupsWrapper}>
                                    <div className={Css.inputGroup}>
                                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                                        <input {...register("pickup", { required: true, maxLength: 20 })} placeholder="Pickup" />
                                        <input {...register("destination", { required: true, maxLength: 20 })} placeholder="Destination" />
                                    </div>
                                    <div className={Css.inputGroup}>
                                        <input {...register("number")} type="tel" required placeholder="Number" />
                                        <input type="date" {...register("date")} required />
                                        <input type="time" {...register("time")} required />
                                    </div>
                                </div>
                                {isSubmitting ? (
                                    <div className={Css.SubmitingWrapper}>
                                        <h2 style={{ color: "orange", marginTop: "20px" }}>Submitting...</h2>
                                    </div>
                                ) : (<div></div>)}
                                <input id="submitbtn" type="submit" value="Book Now" />
                            </form>
                        </div>
                    </div>
                ) : (
                    <div className={Css.successMessageContainer}>
                        <div className={Css.successIcon}><img src={tick} alt="tick" /></div>
                        <h2>{successMessage}</h2>
                        <button className={Css.backButton} onClick={() => setIsFormVisible(true)}>Back</button>
                    </div>
                )}
            </div>
            <div className={Css.bookingImageSection}>
                <img src={car1} alt="Car" />
                <div className={Css.suggestionsContainer}>
                    <h2>Suggestions</h2>
                    <div className={Css.suggestionsList}>
                        <div className={Css.suggestionItem}>
                            <h3>Reserve</h3>
                            <h4>Reserve your ride in advance so you relax while traveling</h4>
                        </div>
                        <div className={Css.suggestionItem}>
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
