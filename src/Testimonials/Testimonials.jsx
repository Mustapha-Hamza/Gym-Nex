import { useState } from 'react'; // Import useState
import './Testimonials.css'
import Join from '../Join/Join';
import Testimonials_Data from '../Data/Testimonials_Data'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import {motion} from "framer-motion";

 function Testimonials () {
    const [selected, setSelected] = useState(0);
    const tLength = Testimonials_Data.length;

    function ArrowLeft () {
        selected=== 0 ? setSelected(tLength -1): 
                        setSelected((prev) => prev - 1)
    }

    function ArrowRight () {
        selected ===    tLength -1 ? setSelected(0) :
                        setSelected((prev) => prev + 1)
    }
    const transition = {type: "spring", duration: 3};

    
    return (
        <frameElement id="Testimonials">
        <div className=" testimonials">
            <div className='left-t'>
                <h2 className='testimonail--head1'>TESTIMONIALS</h2>
                <h1 className='testimonail--head2'>WHAT THEY</h1>
                <h1 className='testimonail--head3'>SAY ABOUT US</h1>
                <motion.p 
                 key={selected}
                 initial= {{opacity: 0, x: 100}}
                 animate= {{opacity: 1, x: 0}}
                 exit={{opacity: 0, x: -100}}
                 transition={transition}
                className='review'>{Testimonials_Data[selected].review}</motion.p>
                <span className='name' style={{color: '#2bbbad'}}>{Testimonials_Data[selected].name}</span>
                <span className='status'> - {Testimonials_Data[selected].status}</span>
            </div>
            
            <div className='right-t'>
                <motion.div
                initial={{opacity: 0, x: -100}}
                transition={{...transition, duration: 2}}
                whileInView={{opacity: 1, x: 0}}
                ></motion.div>
                <motion.div
                initial={{opacity: 0, x: -100}}
                transition={{...transition, duration: 2}}
                whileInView={{opacity: 1, x: 0}}
                ></motion.div>
                <motion.img 
                key={selected}
                initial= {{opacity: 0, x: 100}}
                animate= {{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -100}}
                transition={transition}
                className='t--images' src={Testimonials_Data[selected].images} alt='Image1'/>
                <div>
                    <span className='arrow'><AiOutlineArrowLeft onClick={ArrowLeft}/></span>
                    <span className='arrow'><AiOutlineArrowRight onClick={ArrowRight} /></span>
                </div>
            </div>

        </div>
        <Join />
        </frameElement>

    )
 }
 export default Testimonials ;