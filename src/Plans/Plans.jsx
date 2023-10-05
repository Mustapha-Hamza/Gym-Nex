import { useState } from 'react'; // Import useState
import Plans_Data from '../Data/Plans_Data'
import {motion} from 'framer-motion';
import './Plans.css'
import { BsFillBookmarkCheckFill } from "react-icons/bs";

function Plans() {
  const [hoveredCards, setHoveredCards] = useState(Array(Plans_Data.length).fill(false));

  const toggleHover = (index) => {
    const newHoveredCards = [...hoveredCards];
    newHoveredCards[index] = !newHoveredCards[index];
    setHoveredCards(newHoveredCards);
  };
 
     const plansCard = {
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
      <frameElement id="Plans">
        <div className='plans'>
            <div className='plans--head'>
              <span className='plans--head1'>PREPARE TO</span>
              <span className='plans--head2'> SOAR!</span>
              <div>
              <motion.hr 
              initial={{opacity: 0, x: -100}}
              transition={{...transition, duration: 2}}
              whileInView={{opacity: 1, x: 0}}
              className='plans--hr'/>
                <span className='plans--head3'>DISCOVER YOUR </span>
                <span className='plans--head4'>PERFECT PLAN</span>
              </div>
              
            </div>
            <div className='plans--Card'>
        {Plans_Data.map((card, index) => (
          <motion.div
            key={card.id}
            className='card'
            initial='initial'
            animate='animate'
            whileHover='hover'
            variants={plansCard}
            onMouseEnter={() => toggleHover(index)}
            onMouseLeave={() => toggleHover(index)}
          >
            <p style={{ color: hoveredCards[index] ? 'whitesmoke' : '#2bbbad', fontSize: '45px' }}>
              {card.imgIcon}
            </p>
                <h2 className='title'>{card.title}</h2>
                <h2 className='price'>{card.price}</h2>
                <ul>
                  <li id='list' className='desc1'><span className='list--icon'><BsFillBookmarkCheckFill /></span>{card.description1}</li>
                  <li id='list' className='desc2'><span className='list--icon'><BsFillBookmarkCheckFill /></span>{card.description2}</li>
                  <li id='list' className='desc3'><span className='list--icon'><BsFillBookmarkCheckFill /></span>{card.description3}</li>
                  <li id='list' className='desc4'><span className='list--icon'><BsFillBookmarkCheckFill /></span>{card.description4}</li>
                </ul>
                <button className='button'>{card.button}</button>
                
              </motion.div> 
            )
                )}
          </div>
        </div>
        </frameElement>
    )
}

export default Plans;