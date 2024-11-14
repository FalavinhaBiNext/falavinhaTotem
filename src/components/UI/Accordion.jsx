import { useState, useRef, useCallback } from "react";
import PropTypes from "prop-types";

export default function Accordion({ sliced, background }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleToggle = useCallback((index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  if (!sliced) return null;

  return sliced.map(({ name, description, item }, index) => {
    const isActive = activeIndex === index;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const contentRef = useRef(null);

    const contentStyle = {
      height: isActive ? contentRef?.current?.scrollHeight : 0,
      overflow: "hidden",
      transition: "height 0.3s ease-in-out",
      backgroundColor: "#1b1f24",
    };

    const listItemStyle = {
      backgroundColor: isActive ? background : "transparent",
      minHeight: "60px",
      transition: "background-color 0.3s ease-in-out",
    };
    return (
      <li
        key={index}
        className="border-b border-[#ddd] rounded-[10px] overflow-hidden shadow-bx-1"
      >
        <div
          className="flex items-center p-4 cursor-pointer"
          onClick={() => handleToggle(index)}
          style={listItemStyle}
        >
          <h5 className="text-sm uppercase text-light_color font-gilroyLight sm:text-base">
            {name}
          </h5>
          <span className="ml-auto text-sm transition-all duration-300 ease-in-out text-light_color font-gilroyLight">
            {isActive ? "Fechar" : "Saiba mais"}
          </span>
        </div>

        <div style={contentStyle} ref={contentRef}>
          <div className="p-4 text-light_color">
            {description && (
              <h4 className="pb-4 text-base sm:text-lg">{description}</h4>
            )}
            {item?.length > 1 ? (
              <ul className="flex flex-col gap-2">
                {item.map((item, itemIndex) => (
                  <li
                    className="text-sm sm:text-base"
                    key={item.item + itemIndex}
                  >
                    &#x2714; {item.item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm sm:text-base">{item?.[0]?.item}</p>
            )}
          </div>
        </div>
      </li>
    );
  });
}

Accordion.propTypes = {
  sliced: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      item: PropTypes.array,
    })
  ),
  background: PropTypes.string,
};
