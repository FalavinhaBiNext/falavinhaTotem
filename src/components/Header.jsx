import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/image/LogoFalavinhaCTT.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import MainButton from "./UI/MainButton";

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
      className="min-[1440px]:p-base_container px-5  
      h-auto flex justify-between flex-col gap-3 fixed top-0 left-0 right-0 z-[100]"
      style={{
        boxShadow: hederBoxShadow,
        backgroundColor: headerScroll ? "#009499" : "transparent",
      }}
    >
      <div className="flex justify-between items-center pt-3">
        <Link to="/" className="logo" onClick={handleClearUserData}>
          <img
            className="max-w-[35vw] md:max-w-[200px]"
            src={logo}
            alt="Logo Falavinha"
          />
        </Link>

        {getPath ? (
          <MainButton onClick={standardNavigate} className="btnVoltar">
            <IoArrowBackCircleOutline className="icon" />
          </MainButton>
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
