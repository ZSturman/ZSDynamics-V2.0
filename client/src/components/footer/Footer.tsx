import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="top">
          <div className="left">
            <div>
              <div>Site designed and developed by</div>
              <div>Zachary Sturman</div>
            </div>

            <div>to see my old site click here</div>
          </div>

          <div className="right">
            <div className="navigation-links">
              <div>Nav</div>
              <ul>
                <li>
                  <a href="#main">Home</a>
                </li>
              </ul>
            </div>

            <div className="contact-info">
              <div>Contact-info</div>
              <ul>
                <li>zasturman@gmail.com</li>
                <li>+61 426 233 374</li>
              </ul>
            </div>

            <div className="social-links">
              <div>Social</div>
              <ul>
                <li>linkedin</li>
                <li>gihub</li>
                <li>twitter</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>Copyright 2023 - Zachary Sturman</div>

          <div>Where Logical Solutions Meet Surprisingly Creative Bugs</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
