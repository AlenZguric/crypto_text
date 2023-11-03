import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/ContactFormStyle.css";
import { translate } from "../../../translation/Translate";
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
    <div className="contactMe">
      <div className="contactLeft">
        <div className="contactTitle">
          <h3>{translate("contactform", "contactTitle")}</h3>

          <p>{translate("contactform", "p1")}</p>
          <p> {translate("contactform", "p2")}</p>
          <a href="mailto:zguric.alen@hotmail.com">zguric.alen@hotmail.com</a>
          <p>{translate("contactform", "p3")}</p>
          <p>{translate("contactform", "p4")}</p>
        </div>
      </div>
      <div className="contactForm">
        <form ref={form} onSubmit={sendEmail}>
          <label>{translate("contactform", "label_name")}</label>
          <input type="text" name="user_name" required />
          <label>{translate("contactform", "label_email")}</label>
          <input type="email" name="user_email" required />
          <label>{translate("contactform", "label_msg")}</label>
          <textarea name="message" required rows={8} />
          <input type="submit" value={translate("contactform", "send_btn")} />
        </form>
      </div>
      {showNotification && (
        <div className="notificationForm">
          <p>{translate("contactform", "notificationForm")}</p>
          <span>{translate("contactform", "notificationForm1")}</span>
        </div>
      )}
    </div>
  );
}
