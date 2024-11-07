import { useState } from "react";
import "../style/accordion.css";


const Accordion = ({name, description, item, background, cardFundo}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div>
            <div 
                className="accordion-header"
                style=
                    {
                        {backgroundColor: isOpen ? background : "transparent"}
                    }
                onClick={toggleAccordion}
                >
                <h3>{name}</h3>
                <span>{isOpen ? "Fechar" : "Saiba Mais"}</span>
            </div>
            <div>
                {isOpen && (
                    <div 
                        className="accordion-content"
                        style={{backgroundColor: cardFundo}}    
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
    )
}

export default Accordion;