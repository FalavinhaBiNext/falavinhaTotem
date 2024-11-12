import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/image/LogoFalavinhaCTT.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Botoes from "./Botoes";
import { GlobalContext } from "../context/GlobalContextProvider";

const HeaderApp = ({ children, redirect }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [headerScroll, setHeaderScroll] = useState(false);
  const [hasForm, setHasForm] = useState(false);
  const [hasUserData] = useState(() => {
    const storedData = sessionStorage.getItem("user_info");
    return storedData ? JSON.parse(storedData) : {};
  });
  const { hasEmptyInputs, hasInputErrors } = useContext(GlobalContext);
  const handleClearUserData = () => sessionStorage.clear();

  useEffect(() => {
    if (!Object.keys(hasUserData).length > 0) {
      setHasForm(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const getCurrentPath = [
    "/questionario-tributario",
    "/questionario-rh",
    "/questionario-cigam",
    "/questionario-empresarial",
    "/questionario-holding",
  ].includes(location.pathname);

  const showEmptyFormAlert =
    (hasForm && headerScroll && hasEmptyInputs) || hasInputErrors
      ? "Preencha todos os campos do formulário!"
      : null;

  const alertStyle = {
    color: "red",
    textAlign: "center",
    fontSize: "1rem",
    fontFamily: "inherit",
    fontWeight: "bold",
    letterSpacing: "1px",
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
      {/* Alerta de preenchimento do formulário */}
      <span style={alertStyle}>{getCurrentPath && showEmptyFormAlert}</span>
    </header>
  );
};

HeaderApp.propTypes = {
  children: PropTypes.node,
  redirect: PropTypes.string,
};

export default HeaderApp;
