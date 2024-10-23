import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/LogoFalavinha.png";

const HeaderApp = ({ children }) => {
  const [headerScroll, setHeaderScroll] = useState(false);
  const handleScroll = () => setHeaderScroll(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="header base_container"
      style={{ backgroundColor: headerScroll ? "#009499" : "transparent" }}
    >
      <Link to="/" className="logo">
        <img src={logo} alt="Logo Falavinha" />
      </Link>
      {children}
    </header>
  );
};

HeaderApp.propTypes = {
  children: PropTypes.node,
};

export default HeaderApp;
