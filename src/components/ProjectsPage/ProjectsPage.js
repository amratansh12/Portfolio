import ProjectData from "../db/ProjectData"
import ProjectCard from "../misc/ProjectCard"
import "./ProjectsPage.css"

export default function ProjectsPage(){
    return(
        <div className="projectsPage" id="projectBox">
            <h2>Projects</h2>
            <p>Here are some of the projects I have worked on ...</p>

            <div className="projectsSection">
                {ProjectData.map((project, index) => (
                    <ProjectCard name={project.name} description={project.description} id={project.id} link1={project.link1}  link2={project.link2} />
                ))}
            </div>
        </div>
    )
}