interface ProjectCardProp {
  title: string;
  description: string;
  imgSrc: string;
  primaryBtn: {
    text: string;
    link: string;
  };
  secondaryBtn: {
    text: string;
    link: string;
  };
}

const ProjectCard: React.FC<ProjectCardProp> = ({
  title,
  description,
  imgSrc,
  primaryBtn,
  secondaryBtn,
}) => {
  return (
    <div className="project-card">
      <img src={imgSrc} alt="..." />
      <div className="card-body">
        <div>
          <h5 className="title">{title}</h5>
          <p className="text">{description}</p>
        </div>

        <div className="project-btn-list">
          <a href={primaryBtn.link} className="btn btn-primary">
            {primaryBtn.text}
          </a>
          <a href={secondaryBtn.link} className="btn btn-secondary">
            {secondaryBtn.text}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
