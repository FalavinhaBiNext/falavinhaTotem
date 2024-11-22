import PropTypes from "prop-types";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/image/LogoFalavinhaCTT.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import useScrollEvent from "../hooks/useScrollEvent";

const MainHeader = ({ children, redirect }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const { isScrolling } = useScrollEvent();
  const handleClearUserData = () => sessionStorage.clear();

  const hederBoxShadow = isScrolling ? "0 0 36px rgba(0, 0, 0, 0.2)" : "none";
  const getPath = location.pathname !== "/";
  const standardNavigate = () => {
    if (location.pathname === "/solucoes") {
      handleClearUserData();
      navigate("/");
    } else {
      navigate(redirect || -1);
    }
  };

  return (
    <header
      className="min-[992px]:p-base_container px-5  
      h-auto flex justify-between flex-col gap-3  
      transition-all duration-200 ease-in-out fixed left-0 top-0 z-10 w-full"
      style={{
        boxShadow: hederBoxShadow,
        backgroundColor: isScrolling ? "#009499" : "transparent",
      }}
    >
      <div className="flex items-center justify-between pt-3">
        <Link to="/" className="logo" onClick={handleClearUserData}>
          <img
            className="max-w-[35vw] sm:max-w-[180px] md:max-w-[150px] relative z-[10000]"
            src={logo}
            title="Falavinha Next"
            alt="Falavinha Next"
          />
        </Link>

        {getPath ? (
          <span
            className="hover:shadow-bx-1 rounded-full transition-[box-shadow] 
             duration-200 ease-in-out cursor-pointer w-[40px] h-[40px]"
            onClick={standardNavigate}
            title="Voltar"
          >
            <IoArrowBackCircleOutline className="text-light_color w-[inherit] h-[inherit]" />
          </span>
        ) : null}
      </div>

      {/* titulo da página */}
      {children}
    </header>
  );
};

MainHeader.propTypes = {
  children: PropTypes.node,
  redirect: PropTypes.string,
};

export default MainHeader;
