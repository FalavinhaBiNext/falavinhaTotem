import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../assets/image/LogoFalavinha.png";

const HeaderApp = ({ children, background }) => (
  <header
    className={`header ${
      background ? "header__background" : ""
    } base_container `}
  >
    <Link to="/" className="logo">
      <img src={logo} alt="Logo Falavinha" />
    </Link>
    {children}
  </header>
);
HeaderApp.propTypes = {
  children: PropTypes.node,
  background: PropTypes.bool,
};

export default HeaderApp;
