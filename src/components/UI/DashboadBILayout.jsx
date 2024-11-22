import PropTypes from "prop-types";

export default function DashboardBILayout({ biTitle, biContent }) {
  return (
    <>
      <h2 className="pb-2 pl-3 text-xl text-left text-light_color">
        {biTitle}
      </h2>
      <div className="iframeDash">
        <iframe
          className="iframe-content"
          title="Financeiro - BI"
          src={biContent}
          frameBorder="0"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <span className="iframe-border"></span>
      </div>
    </>
  );
}

DashboardBILayout.propTypes = {
  biTitle: PropTypes.string,
  biContent: PropTypes.string,
};
