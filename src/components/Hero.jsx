import PropTypes from "prop-types";

const HeroApp = ({ children, fundo }) => {
  const bgImageStyle = {
    backgroundImage: `url(${fundo})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: fundo ? "fixed" : "relative",
    inset: 0,
  };

  return (
    <main className="hero base_container">
      <span style={bgImageStyle}></span>
      {children}
    </main>
  );
};

HeroApp.propTypes = {
  children: PropTypes.node,
  fundo: PropTypes.string,
};

export default HeroApp;
