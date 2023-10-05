import Header from '../Header/Header';
import './Hero.css'
import HeroPic from '../Assets/homepic.jpg'
import {motion} from 'framer-motion'


function Hero () {
    /* CSS styled component*/
    const styles = {
        backgroundImage: `url(${HeroPic})`,
        height: '95vh',
        backgroundSize: 'cover ',
        backgroundRepeat: 'no-repeat'
    }

    /* Framer- motion component */
    const containerVariants = {
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
           }},
      };
      
      const lastChildVariants = {
        hidden: { x: -100, opacity: 0 },
        show: { x: 0, opacity: 1,
        transition: {
          duration: 5
        } },
      };
      
      const buttonVariants = {
        hidden: { y: 100, opacity: 0 },
        show: { y: 0, opacity: 1,
        transition: {
          duration: 4
        } },
      }
    
      /* Hero------- component ------Function  */
    return (
      <frameElement id="Hero">
      <Header />
        <motion.div style = {styles}
            variants={containerVariants}
            initial="hidden"
            animate="show" 
        >
         
            <div className = 'hero--title'>
                <motion.h2 className = 'hero-txt1'variants={childVariants}>SWEAT IN THE </motion.h2>
                <motion.span className = 'hero--txt3'variants={childVariants}>IS THE GUARANTEE</motion.span>
                <motion.span className = 'hero--txt4'variants={childVariants}> STAMP FOR YOUR</motion.span>
                <motion.p className = 'hero--txt2'variants={childVariants}>GYM</motion.p>
                
                <motion.h3 className = 'hero--txt5'variants={lastChildVariants}> HEALTH</motion.h3>
                <motion.div className='p' variants={childVariants}>
                  <motion.p className='hero--txt--sent1' >Welcome to Gymnex Fitness Center, where strength meets dedication.</motion.p> 
                  <motion.p className='hero--txt--sent2' >Unleash your full potential with our state-of-the-art facilities and expert trainers.</motion.p> 
                  <motion.p className='hero--txt--sent3' >Join us today to sculpt a healthier, stronger you!</motion.p>
                </motion.div>
                
                <motion.button className = 'hero--btn--get-started'variants={buttonVariants}
                  whileHover={{scale:[1.1,1,1.1,1,1.1,1,1.1],  backgroundColor: '#2bbbad'}}
                >Get Started</motion.button>
               
                <motion.button className = 'hero--btn--learn-more'variants={buttonVariants}
                  whileHover={{scale:1.1, backgroundColor: '#8DB600' }}
                >Learn More</motion.button>
            </div>
        </motion.div>
        </frameElement>
    )
      
}
export default Hero

