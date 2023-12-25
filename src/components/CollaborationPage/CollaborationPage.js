import gsap from "gsap";
import "./CollaborationPage.css"
import { useState } from "react";

export default function CollaborationPage(){
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();

    const handleClick = () => {
        gsap.to(".contactForm", {display: "flex"})
    }

    const handleClose = () => {
        const tl = gsap.timeline();

        gsap.to(".contactForm", {display: "none", duration: 0})
    }

    const handleEmail = () => {
        const myEmail = "ashri1205@gmail.com";
        // Generate mailto link
        const mailtoLink = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;

        setMessage("");
        setSubject("");
    }

    return(
        <div className="collaborationPage" id="collaborationBox">
            <h2>Do you want to connect?</h2>
            <h3>Team up with me, and let's code our way to the stars — or at least until the next coffee break!</h3>
            <button onClick={handleClick}><i style={{background: "transparent", marginRight: "5px"}} class="fa-regular fa-message"></i> Send mail</button>

            <div className="contactForm">
                <div className="inputs">
                    <div className="buttons">
                        <div onClick={handleClose} id="first"></div>
                        <div id="second"></div>
                        <div id="third"></div>
                    </div>

                    <h2>Send Message</h2>
                    <div className="fields">
                        <input type="text" placeholder="Subject" name="subject" id="subject" onChange={(event) => setSubject(event.target.value)} />
                        <input type="text" placeholder="Description" name="description" id="description" onChange={(event) => setMessage(event.target.value)} />
                        <button onClick={handleEmail}><i style={{background: "transparent"}} class="fa-solid fa-hand-point-right"></i> Let's Go</button>
                        <p style={{background: "transparent", opacity: 0.5, fontSize: "13px"}}>Click red button to close</p>
                    </div>
                </div>
            </div>
        </div>
    )
}