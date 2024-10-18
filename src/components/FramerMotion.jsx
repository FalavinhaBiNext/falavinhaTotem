import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function FramerMotion({ children }) {
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "inherit",
      }}
    >
      {children}
    </motion.div>
  );
}

FramerMotion.propTypes = {
  children: PropTypes.node,
};
