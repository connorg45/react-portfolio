import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea id="message" name="message" />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;