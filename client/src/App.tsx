import { useState } from "react";
import Container from "react-bootstrap/Container";

import MainSection from "./components/mainSection/MainSection";
import AboutSection from "./components/aboutSection/AboutSection";
import SkillsSection from "./components/skillsSection/SkillsSection";
import RecentProject01 from "./components/recentProject/RecentProject01"
import RecentProject02 from "./components/recentProject/RecentProject02"
import TimelineSection from "./components/timelineSection/TimelineSection";
import ContactForm from "./components/contactSection/ContactForm";
import Footer from "./components/footer/Footer";
import FlashMessage from "./components/shared/FlashMessage";

// Styles
import "./App.scss";

interface FlashMessageType {
  message: string;
  type: string;
  active: boolean;
}

const App = () => {
  const [flashMessage, setFlashMessage] = useState<FlashMessageType>();

  const clearFlashMessage = () => {
    setFlashMessage({
      message: "",
      type: "",
      active: false,
    });
  };

  return (
    <Container>
      <div className="app-container">
        <FlashMessage
          flashMessage={flashMessage}
          clearFlashMessage={clearFlashMessage}
        ></FlashMessage>
        <MainSection />
        <AboutSection />
        <SkillsSection />
        <RecentProject01 />
        <RecentProject02 />
        <TimelineSection />
        <ContactForm setFlashMessage={setFlashMessage}></ContactForm>
        <Footer />
      </div>
    </Container>
  );
};

export default App;
