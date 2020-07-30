import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import { Toaster, toast } from '../utilities/toaster/toaster';

class Contact extends Component {
  onSubmit = (e) => {
    e.preventDefault();

    toast('success', 'WOOO!');

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_JS_USER_ID
      )
      .then(
        (result) => {
          console.debug(result.text);

          //-- Show user a toast notif to signify success
          toast('success', 'Email sent successfull!');

          //-- clear form
          this.clearForm();
        },
        (error) => {
          console.debug(error.text);

          //-- show user a toast notif to signify error
          toast('error', 'Uh oh, issue with sending your message!');
        }
      );
  };

  clearForm = () => {
    const inputs = document.getElementsByClassName('input-field');

    if (inputs === null || inputs === undefined) return;

    Array.from(inputs).forEach(function (input) {
      input.value = '';
    });
  };

  render() {
    return (
      <section className='s2'>
        <div className='main-container'>
          <h3 id='contact-start' className='text-center'>
            Say Hey!{' '}
            <span role='img' aria-label='jsx-ally/accessible-emoji'>
              &#x1F44B;
            </span>
          </h3>

          <form id='contact-form' onSubmit={this.onSubmit}>
            <label>Name</label>
            <input className='input-field' type='text' name='name' required />
            <label>Subject</label>
            <input
              className='input-field'
              type='text'
              name='subject'
              required
            />
            <label>Email</label>
            <input className='input-field' type='email' name='email' required />
            <label>Message</label>
            <textarea
              className='input-field'
              type='message'
              name='message'
              required
            ></textarea>
            <input id='submit-button' type='submit' value='Send'></input>
          </form>
          <Toaster />
        </div>
      </section>
    );
  }
}

export default Contact;
