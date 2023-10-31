import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/ContactFormStyle.css";
export default function ContactForm() {
  const [showNotification, setShowNotification] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    emailjs
      .sendForm(
        "service_soyjoy8",
        "template_j4rp05k",
        form.current,
        "5mjMjo7fMDxxxf0qd"
      )
      .then(
        () => {
          console.log("Poruka Poslana!!!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contaktMe">
      <div className="contactLeft">
        <div className="contactTitle">
        <h3>Kontaktiraj me...</h3>

        </div>
      </div>
      <div className="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>Ime i Prezime:</label>
          <input type="text" name="user_name" required />
          <label>E-mail:</label>
          <input type="email" name="user_email" required />
          <label>Tvoja Poruka!!</label>
          <textarea name="message" required rows={8}/>
          <input type="submit" value="Pošalji" />
        </form>
      </div>
      {showNotification && (
        <div className="notificationForm">
          <p>Upit je uspješno poslan!</p>
          <span>Očekuj odgovor na email.</span>
        </div>
      )}
    </div>
  );
}
