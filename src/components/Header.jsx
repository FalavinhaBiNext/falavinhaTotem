import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/image/LogoFalavinhaCTT.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Botoes from "./Botoes";

const HeaderApp = ({ children, redirect }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerScroll, setHeaderScroll] = useState(false);

  const handleClearUserData = () => sessionStorage.clear();

  const handleScroll = () => setHeaderScroll(window.scrollY > 0);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hederBoxShadow = headerScroll ? "0 0 36px rgba(0, 0, 0, 0.2) " : "none";
  const getPath = location.pathname !== "/";
  const standardNavigate = () => {
    if (location.pathname === "/servicos") {
      handleClearUserData();
      navigate("/");
    } else {
      navigate(redirect || -1);
    }
  };

  return (
    <header
      className="header"
      style={{
        boxShadow: hederBoxShadow,
        backgroundColor: headerScroll ? "#009499" : "transparent",
      }}
    >
      <div className="header__content">
        <Link to="/" className="logo" onClick={handleClearUserData}>
          <img src={logo} alt="Logo Falavinha" />
        </Link>

        {getPath ? (
          <Botoes onClick={standardNavigate} className="btnVoltar">
            <IoArrowBackCircleOutline className="icon" />
          </Botoes>
        ) : null}
      </div>

      {/* titulo da página */}
      {children}
    </header>
  );
};

HeaderApp.propTypes = {
  children: PropTypes.node,
  redirect: PropTypes.string,
};

export default HeaderApp;
