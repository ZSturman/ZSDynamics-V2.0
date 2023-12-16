import axios from "axios";
import { useState } from "react";
import SocialMediaBtns from "../socialMediaBtns/SocialMediaBtns";
import Spinner from "../shared/Spinner";
import './ContactSection.scss'

interface ContactFormProps {
  setFlashMessage: Function;
}

const ContactForm: React.FC<ContactFormProps> = ({ setFlashMessage }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formProps = { ...formData };

    try {
      await axios.post("/api/send_mail", formProps);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFlashMessage({
        message: "Message sent successfully!",
        type: "success",
        active: true,
      });
    } catch (error) {
      setFlashMessage({
        message: "Something went wrong, please try again.",
        type: "error",
        active: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <section id="contact">
      <div className="contact-form-container">
        <div className="contact-form-header">Contact Me</div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nelson Bighetti"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-container">
            <label>
              Email:
              <input
                type="text"
                name="email"
                placeholder="big_head@hooli.com"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="input-container">
            <label>
              Message:
              <textarea
                name="message"
                placeholder="Always blue..."
                value={formData.message}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="submit-and-social-media">
            <button
              type="submit"
              className="btn-primary btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? <Spinner /> : "Submit"}
            </button>

            <SocialMediaBtns />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
