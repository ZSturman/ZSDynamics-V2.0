import Resume from "../../public/ZacharySturmanResume.pdf";

const AboutText = () => {
  return (
    <div className="about-text-container">
      <div className="about-content">
        <div>Hi, I'm Zachary,</div>
        <p>
          I am a Software Engineer who has been mastering the art of Googling
          error messages for 5 years.
        </p>
        <p>
          Originally from Kansas City, Missouri, I'm currently soaking up the
          sun near Brisbane, Australia, on a Holiday and Working Visa, valid
          until October 2024.
        </p>
        <p>
          I hold a Bachelor's Degree in Film and Technology from Full Sail
          University in Orlando, Florida.
        </p>
        <p>
          In times of productive leisure, I like to study up on new
          technologies, quantum physics, neuroscience and the mysteries of deep
          time.
        </p>
        <p>
          My personal passions are deeply rooted in advocating for animal
          welfare and advancing autism research.
        </p>
      </div>


      <div className="bottom-text-and-btns">
        <p>
          Discover more of my work, reach out for a chat, or peruse my resume:
        </p>

      <div className="btn-container">
        <a href={Resume} target="_blank" className="btn-secondary btn">
          Resume
        </a>
        <a className="btn-primary btn" href="#contact">Connect</a>
      </div>
    </div>
    </div>
  );
};

export default AboutText;
