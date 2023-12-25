import "./InfoPage.css";
import gsap from "gsap";

export default function InfoPage(){

    const handleRed = () => {
        window.location.reload();
    }

    const handleYellow = () => {
        let requiredMargin = "-330px";
        if(window.innerWidth < 550){
            requiredMargin = "-395px"
        }
        const tl = gsap.timeline();
        tl.to(".container", {rotate: "180deg", marginTop: requiredMargin})
    }

    const handleGreen = () => {
        const tl = gsap.timeline();
        tl.to(".container", {rotate: "0deg", marginTop: "0px"})
    }

    return(
        <div className='infoPage'>
            {/* Command Pannel containing name */}
            <div className="container">
                <div className='buttons'>
                    <div id='first' onClick={handleRed}></div>
                    <div id='second' onClick={handleYellow}></div>
                    <div id='third' onClick={handleGreen}></div>
                </div>
                <h4>&lt;&gt;</h4>
                <h3>Hello, I am</h3>
                <h1>Amratansh Shrivastava</h1>
                <h2>and, I am a <span>Full-Stack Developer</span></h2>
                <h4>&lt;/&gt;</h4>
                
            </div>
        </div>
    )
}