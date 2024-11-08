import { useState } from "react";
import PropTypes from "prop-types";
import "../../style/accordion.css";

export default function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  const { name, description, item, background, cardFundo } = props;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div
        className="accordion-header"
        style={{ backgroundColor: isOpen ? background : "transparent" }}
        onClick={toggleAccordion}
      >
        <h3>{name}</h3>
        <span>{isOpen ? "Fechar" : "Saiba Mais"}</span>
      </div>
      <div>
        {isOpen && (
          <div
            className="accordion-content"
            style={{ backgroundColor: cardFundo }}
          >
            <h4>{description}</h4>
            <ul>
              {item.map((item, index) => (
                <li key={index}>{item.item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

Accordion.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  item: PropTypes.array,
  background: PropTypes.string,
  cardFundo: PropTypes.string,
};
