import Grids from "../Assets/Grids.png";
import puma from "../Assets/puma-icon.png";
import adidas from "../Assets/adidas-icon.png";
import fila from "../Assets/fila-icon.png";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import "./Reasons.css";
import { motion } from "framer-motion";
import { Fragment } from "react";

function Reasons() {
  const transition = { type: "spring", duration: 3 };

  return (
    <Fragment>
      <div className="Reasons" id="Reasons">
        <div className="left-r">
          <img src={Grids} alt="Grids" />
        </div>

        <div className="right-r">
          <h2 className="right--head--1">SOME REASONS</h2>
          <h1 className="right--head--2">
            <span className="right--head--why">WHY</span> CHOOSE US?
          </h1>
          <div className="h5--reasons">
            <ul>
              <motion.li whileHover={{ x: "10px" }}>
                <span className="reason--mark">
                  <BsFillBookmarkCheckFill />
                </span>
                OVER 40+ EXPERT TRAINERS
              </motion.li>
              <motion.li whileHover={{ x: "10px" }}>
                <span className="reason--mark">
                  <BsFillBookmarkCheckFill />
                </span>
                MODERN AND INVITING AMBIANCE
              </motion.li>
              <motion.li whileHover={{ x: "10px" }}>
                <span className="reason--mark">
                  <BsFillBookmarkCheckFill />
                </span>
                REGULAR FITNESS CHALLENGES
              </motion.li>
              <motion.li whileHover={{ x: "10px" }}>
                <span className="reason--mark">
                  <BsFillBookmarkCheckFill />
                </span>
                HEALTH BENEFITS
              </motion.li>
              <motion.li whileHover={{ x: "10px" }}>
                <span className="reason--mark">
                  <BsFillBookmarkCheckFill />
                </span>
                24/7 ACCESS
              </motion.li>
              <motion.li whileHover={{ x: "10px" }}>
                <span className="reason--mark">
                  <BsFillBookmarkCheckFill />
                </span>
                RELIABLE PARTNERS
              </motion.li>
            </ul>
          </div>
          <div>
            <h3 className="partner--head">OUR PARTNERS</h3>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              transition={{ ...transition, duration: 4 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="partner--icon"
            >
              <span>
                <img className="puma" src={puma} alt="Puma" />
              </span>
              <span>
                <img className="adidas" src={adidas} alt="Adidas" />
              </span>
              <span>
                <img className="fila" src={fila} alt="Fila" />
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Reasons;
