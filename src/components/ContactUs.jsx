import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { connect } from '../assets/Images';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uwsik8a', 'template_9zuhigo', form.current, 'aXB7w8pmJbhI47I-r')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="mt-14">
    <h1 className="text-center text-4xl font-semibold">Contact Me</h1>
    <div className="xl:px-20 md:px-15 lg:px-20 sm:px-6 ps-4 grid xl:grid-cols-2 lg:grid-cols-2 grid-cols-1">
    <div className="flex justify-center items-center">
    <img src={connect}/>
    </div>
    <div className="py-10 px-8 shadow-lg xl:h-[700px] h-[600px] xl:w-[600px] w-[450px] rounded-xl mt-20 mb-20 bg-gray-100">
      <h3 className="text-center text-4xl mb-10">Let's Connect</h3>
      <form className="flex flex-col space-y-10" ref={form} onSubmit={sendEmail}>
      <div>
      <label className='label'>Name</label>
      <input className="input" type="text" name="user_name" />
      </div>
      <div> 
      <label className='label'>Email</label>
      <input className="input" type="email" name="user_email" />
      </div>
      <div>
      <label className="label relative bottom-32">Message</label>
      <textarea className="w-[230px] h-[150px]" name="message" />
      </div>
      <input className="text-2xl bg-white py-3 " type="submit" value="Send" />
    </form>
    </div>
    </div>
    </div>
    
  );
};

export default ContactUs;