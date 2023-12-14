interface ExperienceTitleProps {
    companyName: string
    jobTitle: string
    textColor: string
}

const ExperienceTitle: React.FC<ExperienceTitleProps> = ({companyName, jobTitle, textColor}) => {
    return (
        <div className="experience-company-and-title">
            <div className="company-name" style={{color: textColor}}>{companyName}</div>
            <div className="job-title">{jobTitle}</div>
        </div>
    )
}

export default ExperienceTitle