import NameTitleIcon from "./nameTitleIcon/NameTitleIcon";
import { VscFoldDown } from "react-icons/vsc";

// Styles
import "./MainSection.scss";

const MainSection = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="main">
      <div className="main-section-container">
        <NameTitleIcon />
        <button
          className="scroll-down-arrow"
          onClick={() => scrollToSection("#about")}
        >
          <VscFoldDown />
        </button>
      </div>
    </section>
  );
};

export default MainSection;
