
import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS library
import "./FormStyles.css"; // Import CSS file for styling

const Form = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Send email using EmailJS
    emailjs.sendForm('service_3bfzgir', 'template_kthwrk8', e.target, 'saianirudh643@gmail.com')
      .then((result) => {
        console.log("Message sent successfully", result.text);
        // Optionally, reset the form after successful submission
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };

  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" name="name" value={formState.name} onChange={handleInputChange} placeholder="Type your name here" />
            <label>Email</label>
            <input type="email" name="email" value={formState.email} onChange={handleInputChange} placeholder="Type your email here" />
            <label>Subject</label>
            <input type="text" name="subject" value={formState.subject} onChange={handleInputChange} placeholder="Type your subject here" />
            <label>Message</label>
            <textarea rows="6" name="message" value={formState.message} onChange={handleInputChange} placeholder="Type your message here" />
            <button type="submit" className="btn">Submit</button>
        </form>
    </div>
  );
};

export default Form;
