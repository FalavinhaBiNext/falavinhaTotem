import PropTypes from "prop-types";
export default function FooterApp(props) {
  return (
    <footer className="footer">
      {props.children}
      {/* <div className={props.className}>{props.children}</div> */}
    </footer>
  );
}

FooterApp.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
