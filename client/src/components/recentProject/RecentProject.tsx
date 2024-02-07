import { VideoComponent } from "./VideoComponent";

// Styles
import "./RecentProject.scss";

const RecentProject = () => {
  const videoUrl = "https://www.youtube.com/watch?v=pFvSaTfKbXI";
  return (
    <section id="recentProject">
      <div className="recent-project">
        <div className="project-title">
          <h2>
            React App for individuals to easily create Software Development
            Documents (SDD)
          </h2>
        </div>

        <div className="video-and-description">
          <div className="video-player">
            <VideoComponent videoUrl={videoUrl} />
          </div>

          <div className="description">
            <p>
              There are a lot of applications out there to help with creating
              SDDs, but they are often too complex and require a lot of time to
              learn. This app is designed to be simple and easy to use.
            </p>
            <p>
              Current features include:
              <ul>
                <li>Creating a new document with chapters an sections</li>
                <li>Adding custom styling</li>
                <li>Automatic page breaks based on A4 paper dimensions</li>
                <li>Uploading images</li>
                <li>Customizable cover page</li>
                <li>Exporting a document to a PDF</li>
              </ul>
            </p>
            <p>
              Feel free to clone the repo and try it out for yourself. I am
              always looking for feedback and ways to improve the app.
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

export default RecentProject;
