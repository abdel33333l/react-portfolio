import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4obu68a",
        "template_a99dvo5",
        form.current,
        "_VMPYa3uxQiUHP6GI"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__cards">
          <div className="contact__card">
            <AiOutlineMail className="contact__card-icon" />
            <h3>Email</h3>
            <small>abdel3333l@outlook.com</small>
            <a href="mailto:abdel3333l@outlook.com" target="_blank">
              Send a message
            </a>
          </div>
          <div className="contact__card">
            <RiMessengerLine className="contact__card-icon" />
            <h3>Messenger</h3>
            <small>abdel3333l</small>
            <a href="https://m.me/abdel3333l" target="_blank">
              Send a message
            </a>
          </div>
          <div className="contact__card">
            <BsWhatsapp className="contact__card-icon" />
            <h3>WhatsApp</h3>
            <small>01026677668</small>
            <a
              href="https://api.whatsapp.com/send?phone=+201026677668"
              target="_blank"
            >
              Send a message
            </a>
          </div>
        </div>
        <form className="contact__form" ref={form} onSubmit={sendEmail}>
          <input
            placeholder="Your Full Name"
            type="text"
            className="contact__form-name"
            name="name"
            required
          />
          <input
            type="email"
            className="contact__form-email"
            placeholder="Your Email"
            required
            name="email"
          />
          <textarea
            type="text"
            className="contact__form-msg"
            placeholder="Your Message"
            name="message"
            required
            rows="7"
          />
          <button type="submit" className="contact__form-btn btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
