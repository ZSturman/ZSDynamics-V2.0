import { VideoComponent } from "./VideoComponent";

// Styles
import "./RecentProject.scss";

const RecentProject02 = () => {
  const videoUrl = "https://www.youtube.com/watch?v=pFvSaTfKbXI";
  return (
    <section id="recentProject02">
      <div className="recent-project">
        <div className="project-title">
          <h2>
            13 Hour Code Challenge: Software Development Document Creator
          </h2>
        </div>

        <div className="video-and-description">
          <div className="video-player">
            <VideoComponent videoUrl={videoUrl} />
          </div>

          <div className="description">
            <p>
              Features include:
              <ul>
                <li>Creating a new document with chapters an sections</li>
                <li>Adding custom styling</li>
                <li>Automatic page breaks based on A4 paper dimensions</li>
                <li>Uploading images</li>
                <li>Customizable cover page</li>
                <li>Exporting a document to a PDF</li>
              </ul>
            </p>
    
              <a
                href="https://github.com/ZSturman/ReactApp-SoftwareDevelopmentDocument.git"
                target="_blank"
                className="btn-primary btn"
              >
                SDD-Creator
              </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProject02;
