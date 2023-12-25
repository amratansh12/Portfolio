import gsap from "gsap";
import "./TriggerButton.css";

export default function TriggerButton({setIsTriggered}){
    const handleTrigger = () => {
        document.getElementsByClassName("trigger")[0].style.color = "#48cae4";
        document.getElementsByClassName("trigger")[0].style.fontSize = "25px";
        document.getElementsByClassName("trigger")[0].textContent = "WELCOME :)";
    }
    const handleClick = () => {
        const viewHeight = window.innerHeight;
        const viewWidth = window.innerWidth;
        const radius = Math.sqrt(Math.pow(viewHeight/2, 2)+Math.pow(viewWidth/2, 2));
        const tl=gsap.timeline();
        tl
        .to(".trigger", {width: radius, height: radius, onStart: handleTrigger})
        .to(".trigger", {borderRadius: "0"})
        .to(".trigger", {width: "100%", height: "100vh", ease: "elastic.inOut", display: "none"})
        .to(".containerTrigger", {display: "none"})
        setIsTriggered(true);
    } 

    return(
        <div className="containerTrigger">
            <div onClick={handleClick} className="trigger">Enter</div>
        </div>
    )
}