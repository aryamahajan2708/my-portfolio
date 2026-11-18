import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import './ContectForm.css';

function ContectForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_f26hxgl",
        "template_y6iuzpi",
        form.current,
        {
          publicKey: "H6zfLfOLhc6hk-YpO",
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message Sent Successfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="ContectForm" className="Contect-Form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name * </label>
        <input type="text" placeholder="Name" name="user_name" required />
        <br /><br />

        <label>Email * </label>
        <input type="email" placeholder="Email" name="user_email" required />
        <br /><br />

        <label>Subject * </label>
        <input type="text" placeholder="Project inquiry" name="user_subject" required/>
        <br /><br />

        <label>Message * </label><br />
        <textarea className="msg" name="message" rows="4" required placeholder="Tell me about your project..."/>
        <br /><br />

        <button type="submit">Send message </button>
      </form>
    </div>
  );
}

export default ContectForm;