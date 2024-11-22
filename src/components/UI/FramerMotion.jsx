import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function FramerMotion({ children }) {
  return (
    <motion.div
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 60, damping: 30 }}
      className="block"
    >
      {children}
    </motion.div>
  );
}

FramerMotion.propTypes = {
  children: PropTypes.node,
};
