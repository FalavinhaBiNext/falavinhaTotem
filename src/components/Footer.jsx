import PropTypes from "prop-types";
import AlertaFormulario from "./UI/AlertaFormulario";
export default function FooterApp({ children }) {
  return (
    // <footer className="footer">
    <footer className="min-[992px]:p-base_container px-5 z-[500]">
      <div className="footer__element">
        <AlertaFormulario />
        {children}
      </div>
    </footer>
  );
}

FooterApp.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  footerFixed: PropTypes.bool,
};
