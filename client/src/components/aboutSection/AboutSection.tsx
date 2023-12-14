import AboutText from "./AboutText";
//import headshotImage from "../../public/ZacharySturmanHeadshot.png";
import chopsticksImage from "../../public/ZacharySturmanWithChopsticks.jpg"


// Styles
import "./About.scss";

const AboutSection = () => {
  return (
    <section>
      <div className="about-container">
          <AboutText />
          <img src={chopsticksImage} alt="Image of Zachary Sturman" />
      </div>
    </section>
  );
};

export default AboutSection;
