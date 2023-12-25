import gsap from "gsap"
import Button from "../misc/Button"
import "./Navbar.css"
import { ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollToPlugin)

export default function Navbar(){
    const handleClick1 = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#projectBox",
                offsetY: -60
            }
        })
    }
    const handleClick2 = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: "#collaborationBox",
                offsetY: 100
            }
        })
    }
    return(
        <div className="navbar">
            <h2>&lt;A<span>/S</span>&gt;</h2>
            <div className="navButtons">
                <Button handleClick={handleClick1} name={"Projects"}/>
                <Button handleClick={handleClick2} name={"Contact me?"}/>
            </div>
        </div>
    )
}