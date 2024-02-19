import { VideoComponent } from "./VideoComponent";

// Styles
import "./RecentProject.scss";

const RecentProject01 = () => {
  const videoUrl1 = "https://www.youtube.com/watch?v=rUhSxlAjDg4";

  return (
    <section id="recentProject01">
      <div className="recent-project">
        <div className="project-title">
          <h2>Evo Sol Landing Page</h2>
        </div>

        <div className="video-and-description">
          <div className="video-player">
            <VideoComponent videoUrl={videoUrl1} />
          </div>
          <div className="description">
            <p>
              Design for the landing page of a LLM distribution company. Built using: 
              <ul>
                <li>
                  React
                </li>
                <li>
                  NextJS
                </li>
              </ul>
            </p>
            <p>Currently the site is unavailable to visit but if you'd like to learn more <a href="#contact">Contact me</a></p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProject01;
