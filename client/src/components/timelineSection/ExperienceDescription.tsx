interface ExperienceDescriptionProps {
  description: string;
}

const ExperienceDescription: React.FC<ExperienceDescriptionProps> = ({
  description,
}) => {
  return (
    <div className="experience-description-container">
      <div className="experience-description">{description}</div>
    </div>
  );
};

export default ExperienceDescription;
