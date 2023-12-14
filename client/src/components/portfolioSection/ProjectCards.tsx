import ProjectCard from "./ProjectCard"

import Projects from "./portfolioProjects.json"

const ProjectCards = () => {
    return (
        <div className="project-cards-list">
            {Projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgSrc={project.img}
                    primaryBtn={project.primaryBtn}
                    secondaryBtn={project.secondaryBtn}
                />
            ))}
        </div>
    )
}

export default ProjectCards
