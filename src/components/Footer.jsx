import PropTypes from "prop-types";
import AlertaFormulario from "./UI/AlertaFormulario";
import { useLocation } from "react-router-dom";
export default function FooterApp({ children }) {
  const { pathname } = useLocation();

  return (
    // <footer className="footer">
    <footer className="min-[992px]:p-base_container px-5 z-[500] min-h-[100px] mx-auto items-center flex flex-col w-full">
      <div className="footer__element">
        <AlertaFormulario />
        {children}
      </div>

      {pathname !== "/" && (
        <span className="block w-full py-2 mt-auto text-sm text-center text-light_color">
          © {new Date().getFullYear()} | Falavinha Next
        </span>
      )}
    </footer>
  );
}

FooterApp.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  footerFixed: PropTypes.bool,
};
