import { useState } from "react";
import "../style/treinamentos.css";


const Accordion = ({name, description, item}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div style={{backgroundColor: isOpen ? "#007175" : "transparent", borderRadius: "10px"}} className="accordion-header" onClick={toggleAccordion}>
                <h3>{name}</h3>
                <span>{isOpen ? "Fechar" : "Saiba Mais"}</span>
            </div>
            <div>
                {isOpen && (
                    <div className="accordion-content">
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
    )
}

export default Accordion;