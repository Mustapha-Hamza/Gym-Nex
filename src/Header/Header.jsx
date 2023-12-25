import React, { useState, useEffect } from 'react';
import './Header.css';
import { LuMenu } from "react-icons/lu";
import { Link } from 'react-scroll';

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="main--header" id='Home'>
      <div className="main--title">
        <h1>
          GYM-<span className="name--NEX">NE</span>
          <span className="name--X">X</span>
        </h1>
        <h4>FITNESS CENTER</h4>
      </div>
      
      {showMenu === false && mobile === true ? (
        <LuMenu className='menu--icon' onClick={() => setShowMenu(!showMenu)} />
      ) : (
        <nav>
          <ul className="main--nav">
            <li><Link onClick={() => setShowMenu(false)} activeClass='active' to='Home' spy={true} smooth={true} duration={500}>Home</Link></li>
            <li><Link onClick={() => setShowMenu(false)} to='Programs' spy={true} smooth={true} duration={500}>Programs</Link></li>
            <li><Link onClick={() => setShowMenu(false)} to='Reasons' spy={true} smooth={true} duration={500}>Why Us</Link></li>
            <li><Link onClick={() => setShowMenu(false)} to='Plans' spy={true} smooth={true} duration={500}>Plans</Link></li>
            <li><Link onClick={() => setShowMenu(false)} to='Testimonials' spy={true} smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link onClick={() => setShowMenu(false)} to='Footer' spy={true} smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
