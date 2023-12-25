import { Fragment } from 'react';
import Programs_Data from '../Data/Programs_Data';
import './Programs.css';
import {motion} from 'framer-motion';

function Programs () {

    const styles = {
       
        color: 'whitesmoke',
        fontSize: '45px',
        
    
    }

    const programCard = {
      initial: {
        opacity: 0, // Initial state
        scale: 0.8,
      },
      animate: {
        opacity: 1, // Animation state
        scale: 1,
        transition: {
          duration: 0.5, // Duration of the animation
          ease: 'easeOut', // Easing function
        },
      },
      hover: {
        scale: 1.1, // Scale up on hover
        backgroundColor: '#2bbbad',
        
        transition: {
          duration: 0.3,
          yoyo: Infinity, // Yoyo effect
        },
      },
    };
    
    const transition = {type: "spring", duration: 3};

    return (
      <Fragment >
        <div className='programs' id= "Programs">
          <span className='programs--head1'>EXPLORE OUR</span>
              <span className='programs--head2'>DIVERSE</span>
              <div>
              <motion.hr 
              initial={{opacity: 0, x: -100}}
              transition={{...transition, duration: 2}}
              whileInView={{opacity: 1, x: 0}}
              className='programs--hr'/>
                <span className='programs--head3'>RANGE OF</span>
                <span className='programs--head4'>FITNESS PROGRAMS</span>
              </div>
          <div 
          className='programs--card'>
            {Programs_Data.map((card) => (
              <motion.div key={card.id} className="p--card"  
              initial="initial"
              animate="animate"
              whileHover="hover"    
              variants={programCard}>
                <p style ={styles}>{card.imgIcon}</p>
                <h1 className='card--title'>{card.title}</h1>
                <p className='card--desc'>{card.description}</p>
                <button className='card--footer'>{card.footer}</button>
              </motion.div> 
            )
                )}
          </div>
        </div>
        </Fragment>
    )
}
export default Programs;