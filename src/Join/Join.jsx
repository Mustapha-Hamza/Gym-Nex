import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Join.css';
import { motion } from 'framer-motion';

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_o0r5v0m', 'template_wtm2jng', form.current, 'zqAqC3M1p3L5AG3Oa')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const transition = { type: 'spring', duration: 3 };

  return (
    <div className="Join">
      <div className="left--j">
        <motion.hr
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="join--hr"
        />
        <span className="join--head1">READY TO </span>
        <span className="join--head2">LEVEL UP</span>
        <div>
          <span className="join--head3">YOUR BODY </span>
          <span className="join--head4"> WITH US?</span>
        </div>
      </div>
      <div className="right--j">
        <form ref={form} className="email--container" onSubmit={sendEmail}>
          <input type="email" name="user-email" placeholder="Enter your Email address" />
          <button className="btn--j"> Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
