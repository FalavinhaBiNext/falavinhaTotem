import { useState } from "react";
import PropTypes from "prop-types";
import "../../style/accordion.css";

export default function Accordion({
  name,
  description,
  item,
  background,
  cardFundo,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div
        className={`accordion-header ${isOpen ? "open" : ""}`}
        style={{ backgroundColor: isOpen ? background : "transparent" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3>{name}</h3>
        <span>{isOpen ? "Fechar" : "Saiba Mais"}</span>
      </div>

      {isOpen && (
        <div
          className="accordion-content"
          style={{ backgroundColor: cardFundo }}
        >
          <h4>{description}</h4>
          <ul>
            {item.map((item, index) => (
              <li key={item.item + index}>{item.item}</li> // Improved key
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

Accordion.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      item: PropTypes.string.isRequired,
    })
  ).isRequired,
  background: PropTypes.string,
  cardFundo: PropTypes.string,
};
