import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import isEmail from 'validator/es/lib/isEmail';

const ContactForm = () => {
  // Data handlers for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Error handlers for required form fields
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const onNameChange = async (event) => {
    setName(event.target.value)
  }

  const onEmailChange = async (event) => {
    if (emailError !== '') {
      setEmailError('');
    }
    setEmail(event.target.value);
  }

  const onMessageChange = async (event) => {
    if (messageError !== '') {
      setMessageError('');
    }
    setMessage(event.target.value)
  }

  const handleSubmit = () => {
    // Using the validator package to check if the email is valid
    if (!isEmail(email)) {
      setEmailError('You must provide a valid email address!')
    } else if (message === '') {
      setMessageError('You must provide a message!')
    } else {
      // In a production application I'd do something with this data, just
      // logging it here to show that the data handling functions correctly
      console.log('Name: ', name)
      console.log('Email: ', email)
      console.log('Message: ', message)
    }
  }

  return (
    <form id="ContactForm">
      <h1>Contact Us</h1>
      <TextField
        className="ContactFormField"
        id="standard-basic"
        label="FULL NAME"
        placeholder="Enter your full name"
        onChange={onNameChange}
      />
      <TextField
        id="standard-basic"
        label="EMAIL"
        placeholder="Enter your email"
        onChange={onEmailChange}
        required
        helperText={emailError}
        error={emailError ? true : false}
      />
      <TextField
        id="standard-multiline-static"
        label="MESSAGE"
        multiline
        rows={5}
        placeholder="What are your plans?"
        onChange={onMessageChange}
        required
        helperText={messageError}
        error={messageError ? true : false}
      />
      <Button
        variant="contained"
        endIcon={<Send />}
        id="ContactPageButton"
        onClick={handleSubmit}
      >Send Message</Button>
    </form>
  )
};

export default ContactForm;