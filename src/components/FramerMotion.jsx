import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function FramerMotion({ children }) {
  return (
    <motion.div
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 80, damping: 30 }}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "inherit",
        width: "inherit",
      }}
    >
      {children}
    </motion.div>
  );
}

FramerMotion.propTypes = {
  children: PropTypes.node,
};
