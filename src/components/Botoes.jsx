import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function Botoes(props) {
  return (
    <motion.button
      className={props.className}
      // style={{backgroundColor: 'transparent'}}
      whileTap={{ scale: 0.98, boxShadow: "0px 10px, 30px rgba(0,0,0,0.5)" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.4)" }}
      onClick={props.onClick}
    >
      {props.children}
    </motion.button>
  );
}

Botoes.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
