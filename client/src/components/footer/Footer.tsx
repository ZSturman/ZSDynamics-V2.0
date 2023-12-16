import Resume from "../../public/ZacharySturmanResume.pdf";

// styles
import "./Footer.scss";

const Footer = () => {
  const subjectLine: string =
    "Hi Zachary, I saw your website and wanted to reach out!";

  const emailBody: string =
    "Hi Zachary, I recently found your profile and I'm intrigued by your expertise in the field. I'd love to connect and learn more about your experience and what you're looking for in your next role. Let me know what works best for you!";

  return (
    <footer>
      <div className="footer-container">
        <div className="top">
          <div className="left">
            <div className="designed-and-developed">
              {" "}
              Site designed and developed by Zachary Sturman
            </div>
            <div>Created using React and Flask</div>
          </div>

          <div className="right">
            <div className="navigation-links">
              <div className="footer-link-header">Nav</div>
              <ul>
                <li>
                  <a href="#main">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#experience">Experience</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href={Resume} target="_blank" className="social-media-btn">
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <div className="contact-info">
              <div className="footer-link-header">Contact-info</div>
              <ul>
                <li>
                  <a
                    href={`mailto:zasturman@gmail.com?subject=${encodeURIComponent(
                      subjectLine
                    )}&body=${encodeURIComponent(emailBody)}`}
                    target="_blank"
                  >
                    ZASturman@gmail.com
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="tel:+61426233374" target="_blank">
                    +61 426 233 374
                  </a>
                </li>
              </ul>
            </div>

            <div className="social-links">
              <div className="footer-link-header">Social</div>
              <ul>
                <li>
                  {" "}
                  <a
                    href="https://www.linkedin.com/in/zacharysturman/"
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/ZSturman" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/zachary_sturman" target="_blank">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>Copyright 2023 - Zachary Sturman</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
