import React, { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { PiTrademarkRegisteredFill } from 'react-icons/pi';
import './Footer.css';
import Medias from '../Medias/Medias';
import { motion } from 'framer-motion';

function Footer () {
    const FooterVariants = {
        hidden: {
          opacity: 0,
          x: 25, // Move the entire container down (from far up)
        },
        show: {
          opacity: 1,
          x: 0,
          transition: {
            
            duration: 3,
            when: 'beforeChildren', // Animate children before this container
            staggerChildren: 0.3, // Stagger children animations
          },
        },
      };
      const childVariants = {
        hidden: { y: 100, opacity: 0 },
        show: { y: 0, opacity: 1,
           transition: {
             duration: 1.5,
             delay: 1,
           }},
      };
      
      const newsSubscribe = {
        hidden: { x: -100, opacity: 0 },
        show: { x: 0, opacity: 1,
        transition: {
          duration: 5,
          delay: 1,
        } },
      };

      const form = useRef();
      const [subscribed, setSubscribed] = useState(false);
    
      const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_o0r5v0m', 'template_lvyn03l', form.current, 'zqAqC3M1p3L5AG3Oa')
          .then(
            (result) => {
              console.log(result.text);
              setSubscribed(true);
    
              // Reset the subscribed state after 4 seconds
              setTimeout(() => {
                setSubscribed(false);
              }, 2000);
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
    return ( 
        <Fragment >
        <div id="Footer">
            <div className='footer'>
                <div id= "main--title"  className='left--f'>
                    <motion.h1
                     variants={FooterVariants}
                     initial="hidden"
                     whileInView="show"
                     >GYM-<span id = 'name--NEX'>NE</span><span id = 'name--X'>X<span className="register"><PiTrademarkRegisteredFill /></span></span></motion.h1>
                    <div className='footer--links'>
                        <motion.div
                         variants={childVariants}
                         initial="hidden"
                         whileInView="show"
                         >
                            <h3>Company</h3>
                            <motion.p whileHover={{x: '10px'}}>About Us</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Programs</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Team</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Privacy Policy</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Refund Policy</motion.p>
                        </motion.div>
                        <motion.div
                         variants={childVariants}
                         initial="hidden"
                         whileInView="show"
                         >
                          
                            <h3>Quick Links</h3>
                            <motion.p whileHover={{x: '10px'}}>Services</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Class Schedule</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Personal Training</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Partner with Us</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Site Map</motion.p>
                           
                        </motion.div>
                        <motion.div
                         variants={childVariants}
                         initial="hidden"
                         whileInView="show">
                            <h3>Resources</h3>
                            <motion.p whileHover={{x: '10px'}}>Articles</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Our Why</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Media</motion.p>
                            <motion.p whileHover={{x: '10px'}}>FAQ</motion.p>
                            <motion.p whileHover={{x: '10px'}}>Youtube Playlist</motion.p>
                            
                        </motion.div>
                    </div>
                </div>
                <motion.div className='right--f'
                variants={newsSubscribe}
                initial="hidden"
                whileInView="show">
                    <h3 className='newsletter'>Newsletter</h3>

                    {subscribed ? (
              <p>Thanks for Subscribing!</p>
            ) : (
              <form ref={form} className="subscription--container" onSubmit={sendEmail}>
                <input type="email" name="user-email" placeholder="Enter your Email Here" />
                <button className="btn--s">Subscribe</button>
              </form>
            )}
                    <div className='subscription--footer'>
                        <div>
                            <h3>Helpdesk</h3>
                            <p>help-desk.gymnex.team</p>
                        </div>
                        <div>
                            <h3>Email Us</h3>
                            <p>fitness@gymnex.team</p>
                        </div>
                        
                    </div>
                </motion.div>
                
            </div>
           
        </div>
        <Medias />
        </Fragment>
    )
}
export default Footer;