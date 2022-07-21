import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

emailjs.init('0vq19f-pMt36ReloU')

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert('email sent successfully!!');
    console.log("form Data",{
      to_name: form?.current?.user_name?.value,
      from_name: "kartavya gauswami",
      message: 'hello '+ form?.current?.user_name?.value +' '+form?.current?.message?.value,
      reply_to: form?.current?.user_email?.value});

    emailjs.send('service_gm9fzar', 'template_u6f8m7f',{
      to_name: form?.current?.user_name?.value,
      from_name: "kartavya gauswami",
      message: form?.current?.message?.value,
      reply_to: form?.current?.user_email?.value})
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='container'>
      <form ref={form} onSubmit={sendEmail} className="formDiv">
        <h1 className='title'>Email Service</h1>
        <div className='formItem'>
          <label>Name:</label><br/>
          <input type="text" name="user_name" />
        </div>
        <div className='formItem'>
          <label>Email:</label><br/>
          <input type="email" name="user_email" />
        </div>
        <div className='formItem'>
          <label>Message:</label><br/>
          <textarea name="message" />
        </div>
        <div className='formItem'>
          <button className='button' type="submit" value="Send">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;