import React, { useState, useEffect } from "react";
import "./Header.css";
import { LuMenu } from "react-icons/lu"; // Menu icon
import { FaTimes } from "react-icons/fa"; // Close (X) icon
import { Link } from "react-scroll";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="main--header" id="Home">
      <div className="main--title">
        <h1>
          GYM-<span className="name--NEX">NE</span>
          <span className="name--X">X</span>
        </h1>
        <h4>FITNESS CENTER</h4>
      </div>

      {/* Toggle between menu and X icon */}
      {mobile ? (
        showMenu ? (
          <FaTimes
            id="menu--iconX"
            className="menu--icon"
            onClick={() => setShowMenu(false)}
          />
        ) : (
          <LuMenu className="menu--icon" onClick={() => setShowMenu(true)} />
        )
      ) : null}

      {/* Navigation Menu */}
      {showMenu || !mobile ? (
        <nav>
          <ul className={`main--nav ${mobile ? "mobile--nav" : ""}`}>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                to="Programs"
                spy={true}
                smooth={true}
                duration={500}
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                to="Reasons"
                spy={true}
                smooth={true}
                duration={500}
              >
                Why Us
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                to="Plans"
                spy={true}
                smooth={true}
                duration={500}
              >
                Plans
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                to="Testimonials"
                spy={true}
                smooth={true}
                duration={500}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                onClick={() => setShowMenu(false)}
                to="Footer"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </div>
  );
}

export default Header;
