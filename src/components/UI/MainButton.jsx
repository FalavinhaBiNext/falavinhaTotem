/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { motion } from "framer-motion";

export default function MainButton(props) {
  const { onClick, type, className, children, disabled } = props;

  const buttonDefaultStyles = `py-4 px-8 min-h-10 w-full flex justify-center items-center bg-primary_color rounded-[10px]
 text-light_color font-bold text-base cursor-pointer text-center tracking-[inherit]
 disabled:opacity-50 disabled:box-shadow-none disabled:transform-none shadow-bx-1`;

  return (
    <motion.button
      className={`${buttonDefaultStyles} ${className} `}
      whileTap={{ scale: 0.98, boxShadow: "0px 10px, 30px rgba(0,0,0,0.5)" }}
      whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,0,0,0.4)" }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
}

MainButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  type: PropTypes.string,
};
