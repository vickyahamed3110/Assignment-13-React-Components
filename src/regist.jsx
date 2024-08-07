import './App.css';
import React, { useState } from 'react';
function Regist ({description, style, idname}) {
    const[submitted, setSubmitted] = useState(false);
    const[show, setShow] = useState(true);
    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        setShow(false);
    }
    return(
        <div id={idname}>
            <div className="reg-content">
                <h1>{description}</h1>
                <form className ="submission" onSubmit={handleSubmit}>
                    <input type= "email" placeholder="Enter Your Email" required/>
                    {show && <button type="submit">Submit</button>}
                </form>
                {submitted && <div className="submitted"><p>Form Submission successful!</p>
                <a href="https://startbootstrap.com/">Click here to continue...</a></div>}

            </div>
        </div>
    );
};

export default Regist;