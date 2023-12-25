import Button from "./Button";
import "./ProjectCard.css"

export default function ProjectCard({name, description, id, link1, link2}){
    const handleEnter = () => {
        document.getElementsByClassName(`overlay-${id}`)[0].style.opacity = 1;
    }

    const handleLeave = () => {
        document.getElementsByClassName(`overlay-${id}`)[0].style.opacity = 0;
    }

    const handleClick = (link) => {
        window.open(link, "_blank");
    }
    return(
        <div onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="projectCard">
            <div className="projectHeadings">
                <h3>&lt;&gt;</h3>
                <h2 id={(id==="6") ? "lastCard" : "projectCardTitle"}>{name}</h2>
                <h3>&lt;/&gt;</h3>
            </div>

            <div className={`overlay overlay-${id}`}>
                <p style={{fontSize: "15px"}}>{description}</p>
                <d className="overlayButtons">
                    <button onClick={()=>handleClick(link1)} id="overlayBtn">GitHub</button>
                    {link2 && <button onClick={()=>handleClick(link2)} id="overlayBtn">GitHub(2)</button>}
                </d>
            </div>
        </div>
    )
}