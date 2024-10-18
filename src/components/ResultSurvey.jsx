import PropTypes from "prop-types";

export default function ResultSurvey({ title, message: resultMessage }) {
  return (
    title &&
    resultMessage && (
      <article className="result-survey">
        <h2 className="result-survey__title">{title}</h2>
        <p className="result-survey__message">{resultMessage}</p>
      </article>
    )
  );
}

ResultSurvey.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};
