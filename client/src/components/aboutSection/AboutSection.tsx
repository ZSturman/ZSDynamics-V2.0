import AboutText from "./AboutText";
import chopsticksImage from "../../public/ZacharySturmanWithChopsticks.jpg"


// Styles
import "./About.scss";

const AboutSection = () => {
  return (
    <section id="about">
      <div className="about-container" data-aos="fade-down"
            data-aos-duration="1500" data-aos-easing="ease-in-out-back">
          <AboutText />
          <img src={chopsticksImage} alt="Image of Zachary Sturman" />
      </div>
    </section>
  );
};

export default AboutSection;
