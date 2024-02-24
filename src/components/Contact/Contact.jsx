import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_83m2yip', 'template_xcov9bd', form.current, {
          publicKey: 'qIS6EV28sfInDCarL',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
        <form ref={form} onSubmit={sendEmail} style={{ maxWidth: "400px", margin: "auto" }}>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Name</label>
          <input type="text" name="from_name" style={{ width: "100%", padding: "0.5rem" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
          <input type="email" name="from_email" style={{ width: "100%", padding: "0.5rem" }} />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem" }}>Message</label>
          <textarea name="message" style={{ width: "100%", padding: "0.5rem" }}></textarea>
        </div>
        <input type="submit" value="Send" style={{ backgroundColor: "#4CAF50", color: "white", padding: "0.5rem 1rem", border: "none", cursor: "pointer" }} />
      </form>
      
    );
}

export default Contact