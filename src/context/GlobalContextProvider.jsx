import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const GlobalContext = createContext();
export default function GlobalContextProvider({ children }) {
  const [answers, setAnswers] = useState({});

  const calculateTotalScore = () => {
    return Object.values(answers).reduce(
      (total, answer) => total + parseInt(answer, 10),
      0
    );
  };

  const values = {
    answers,
    setAnswers,
    calculateTotalScore,
  };
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
