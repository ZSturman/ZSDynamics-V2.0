import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoReader } from "react-icons/io5";
import Resume from "../../public/ZacharySturmanResume.pdf"

const SocialMediaBtns = () => {
  const subjectLine: string =
    "Hi Zachary, I saw your website and wanted to reach out!";

    
  const emailBody: string =  "Hi Zachary, I recently found your profile and I'm intrigued by your expertise in the field. I'd love to connect and learn more about your experience and what you're looking for in your next role. Let me know what works best for you!";



  return (
    <div className="social-media-btns">



      <a
        href="https://github.com/ZSturman"
        target="_blank"
        className="social-media-btn"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/zacharysturman/"
        target="_blank"
        className="social-media-btn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/zachary_sturman"
        target="_blank"
        className="social-media-btn"
      >
        <FaXTwitter />
      </a>
      <a
        href="tel:+61426233374"
        target="_blank"
        className="social-media-btn"
      >
        <FaPhone />
      </a>
      <a
        href={`mailto:zasturman@gmail.com?subject=${encodeURIComponent(
          subjectLine
        )}&body=${encodeURIComponent(emailBody)}`}
        target="_blank"
        className="social-media-btn"
      >
        <FaEnvelope />
      </a>

      <a
        href={Resume}
        target="_blank"
        className="social-media-btn"
      >
        <IoReader />
      </a>
    </div>
  );
};

export default SocialMediaBtns;
