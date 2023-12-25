import "./SkillMeasure.css"
import SkillData from "../db/SkillData"

export default function SkillMeasure(){
    return(
        <>
            {SkillData.map(skill => (
                <div className="skillContainer" key={skill.id}>
                    <div className="buttons">
                        <div id="first"></div>
                        <div id="second"></div>
                        <div id="third"></div>
                    </div> 
                    <div className="skills">
                        <h3>{skill.type}</h3>
                        <ul>
                            {skill.skills.map((item, index) => (
                                <li key={index}>
                                    <img src={item.icon} alt="icon"/>
                                    {item.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    )
}