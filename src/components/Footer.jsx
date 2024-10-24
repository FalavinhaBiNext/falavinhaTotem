import PropTypes from "prop-types";
export default function FooterApp({ children, footerFixed }) {
  const fixed = {
    position: "fixed",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    backgroundColor: "#009499",
    padding: "0 20px",
  };

  return (
    <footer className="footer">
      <div className="footer__element">{children}</div>
    </footer>
  );
}

FooterApp.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  footerFixed: PropTypes.bool,
};
