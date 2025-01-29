import { BsTwitter, BsInstagram } from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import "./Medias.css";
import { motion } from "framer-motion";
function Medias() {
  const Variants = {
    hidden: { y: 80, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
        delay: 1.5,
      },
    },
  };
  const VariantsIcons = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.3,
        delay: 1.5,
      },
    },
  };

  return (
    <div className="media">
      <motion.hr
        className="media--hr"
        variants={Variants}
        initial="hidden"
        whileInView="show"
      />
      <div className="media--footer">
        <p>© Copyright 2024, All Rights Reserved</p>
        <motion.div
          className="media--icons"
          variants={VariantsIcons}
          initial="hidden"
          whileInView="show"
        >
          <span className="icons">
            <BsTwitter />
          </span>
          <span className="icons">
            <ImFacebook />
          </span>
          <span className="icons">
            <BsInstagram />
          </span>
          <span className="icons">
            <FaLinkedinIn />
          </span>
        </motion.div>
      </div>
      <hr className="media--hr" />
      <p className="footer--footer">
        Disclaimer: The images or photographs used on this site are stock photos
        and do not depict the actual individuals holding these positions. We
        have taken this measure to protect the privacy and identities of the
        real people represented on this site.
      </p>
    </div>
  );
}
export default Medias;
