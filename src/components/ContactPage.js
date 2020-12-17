import React from 'react';
import ContactPageNavbar from './ContactPageNavbar';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="HomePage">
      <ContactPageNavbar />
      <div className="ContactPage">
        <ContactForm />
      </div>
    </div>
  )
};

export default ContactPage;