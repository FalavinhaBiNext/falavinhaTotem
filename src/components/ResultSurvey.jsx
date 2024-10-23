import PropTypes from "prop-types";
import { useEffect } from "react";

export default function ResultSurvey({
  title,
  message: resultMessage,
  setSurveyMsg,
}) {
  useEffect(() => {
    if (resultMessage) {
      setSurveyMsg({
        titulo: title,
        mensagem: resultMessage,
      });
    }
  }, [resultMessage]);

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
  setSurveyMsg: PropTypes.func,
};
