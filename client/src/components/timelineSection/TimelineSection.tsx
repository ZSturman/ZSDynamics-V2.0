import ExperienceList from "./timeline.json";

import ArrowVertical from "./ArrowVertical";
import ExperienceTitle from "./ExperienceTitle";
import ArrowHorizontal from "./ArrowHorizontal";
import ExperienceDescription from "./ExperienceDescription";

// styles
import "./TimelineSection.scss";

const TimelineSection = () => {
  return (
    <section>
      <div className="experience-list">
        {ExperienceList.map((experience) => {
          return (
            <div className="experience-container">
              <div className="experience-left">
                <ArrowVertical
                  startMonth={experience.startMonth}
                  startYear={experience.startYear}
                  endMonth={experience.endMonth}
                  endYear={experience.endYear}

                  color={experience.color}
                />
              </div>

              <div className="experience-right">
                <ExperienceTitle
                  jobTitle={experience.title}
                  companyName={experience.company}
                  textColor={experience.textColor}
                />
                <ArrowHorizontal color={experience.color}/>
                <ExperienceDescription description={experience.description} />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TimelineSection;
