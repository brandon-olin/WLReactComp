import React from 'react';
import ContactPageNavbar from './ContactPageNavbar';
import MobileNavbar from './MobileNavbar';
import ContactForm from './ContactForm';

const ContactPage = () => {
  return (
    <div className="HomePage">
      <MobileNavbar />
      <ContactPageNavbar />
      <div className="ContactPage">
        <ContactForm />
      </div>
    </div>
  )
};

export default ContactPage;