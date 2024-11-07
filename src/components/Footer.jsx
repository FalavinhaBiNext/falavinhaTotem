import PropTypes from "prop-types";
import AlertaFormulario from "./AlertaFormulario";
export default function FooterApp({ children }) {
  return (
    <footer className="footer">
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
