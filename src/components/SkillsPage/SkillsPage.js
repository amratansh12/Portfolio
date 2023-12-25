import SkillMeasure from "../misc/SkillMeasure"
import "./SkillsPage.css"

export default function SkillsPage(){
    return(
        <div className="skillsPage">
            <h2>Nice to meet you!</h2>
            <p>I code beautiful frontends and efficient backends. I have been building and developing various projects and websites for more than 2 years. I have collaborated with talented people and worked for many organisations to build scalable and user-friendly applications.</p>

            <h2 style={{marginTop: "20px"}}>What I do?</h2>
            <div className="skillsSection">
                <SkillMeasure />   
            </div>
        </div>
    )
}