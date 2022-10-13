import React, { useState } from "react";
import {validateEmail } from "../../utils/helpers";
import "./contact.css";

function Contact() {


    const [formState, setFormState] = useState({ name: "", email: "", message: "" });

    const { name, email, message } = formState;

    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {

        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            //isValid conditional statement
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`)
            } else {
                setErrorMessage("");
            }
        }

        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
        console.log("errorMessage", errorMessage);
        }
    }

    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div class="col-4 mt-5">
                    <div className="text-center">
                    <h1 className="contact-body mb-3" data-testid="h1tag">Contact me</h1>
                    </div>
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-floating mb-2">
                            <input className="form-control" type="text" defaultValue={name} onBlur={handleChange} name="name" placeholder="Name"></input>
                            <label htmlFor="name">Name:</label>
                        </div>
                        <div className="form-floating mb-2">
                            <input className="form-control" type="email" defaultValue={email} name="email" onBlur={handleChange} placeholder="email"></input>
                            <label htmlFor="email">Email address:</label>
                        </div>
                        <div className="form-floating mb-2">
                            <textarea className="form-control" name="message" defaultValue={message} onBlur={handleChange} rows="5" placeholder="message"></textarea>
                            <label htmlFor="message">Message:</label>
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button className="btn " data-testid="button" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )

}

export default Contact;