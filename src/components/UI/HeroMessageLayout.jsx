import PropTypes from "prop-types";
export default function HeroMessageLayout({ children }) {
  return <div className="max-w-[992px] mx-auto">{children}</div>;
}

HeroMessageLayout.propTypes = {
  children: PropTypes.node,
};
