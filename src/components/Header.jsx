import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/image/LogoFalavinha.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Botoes from "./Botoes";

const HeaderApp = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerScroll, setHeaderScroll] = useState(false);

  const handleScroll = () => setHeaderScroll(window.scrollY > 0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hederBoxShadow = headerScroll ? "0 0 36px rgba(0, 0, 0, 0.2)" : "none";
  const getPath = location.pathname !== "/";

  return (
    <header
      className="header base_container"
      style={{
        boxShadow: hederBoxShadow,
        backgroundColor: getPath ? "#009499" : "transparent",
      }}
    >
      <div className="header__content">
        <Link to="/" className="logo">
          <img src={logo} alt="Logo Falavinha" />
        </Link>

        {getPath ? (
          <Botoes onClick={() => navigate(-1)} className="btnVoltar">
            <IoArrowBackCircleOutline className="icon" />
          </Botoes>
        ) : null}
      </div>
      {children}
    </header>
  );
};

HeaderApp.propTypes = {
  children: PropTypes.node,
};

export default HeaderApp;
