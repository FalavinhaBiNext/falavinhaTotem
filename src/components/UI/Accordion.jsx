import { useState, useRef, useLayoutEffect } from "react";
import PropTypes from "prop-types";

export default function Accordion({ background, sliced }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [contentHeights, setContentHeights] = useState({});
  const contentRefs = useRef([]);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useLayoutEffect(() => {
    const newHeights = {};
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        newHeights[index] = ref.scrollHeight;
      }
    });
    setContentHeights(newHeights);
  }, [sliced]);

  //ESTILOS
  const accordionListStyle = `border-b border-[#ddd] rounded-[10px] overflow-hidden shadow-bx-1`;
  const accordionButtonStyle = `flex items-center p-4 cursor-pointer w-full min-h-[60px] gap-1
   text-left text-sm uppercase text-light_color font-gilroyLight sm:text-base focus:outline-none`;

  return (
    <ul className="flex flex-col flex-1 w-full gap-6">
      {sliced.map(({ name, description, item }, index) => {
        const isActive = activeIndex === index;
        const contentHeight = isActive ? contentHeights[index] || 0 : 0;

        return (
          <li className={accordionListStyle} key={name}>
            <button
              className={accordionButtonStyle}
              style={{
                backgroundColor: isActive ? background : "transparent",
              }}
              type="button"
              onClick={() => handleToggle(index)}
            >
              {name}
              <span className="ml-auto text-xs normal-case sm:text-sm">
                {isActive ? "Fechar" : "Saiba mais"}
              </span>
            </button>
            <div
              className="relative overflow-hidden bg-dark_color
               transition-[height] duration-300 ease-in-out
              "
              style={{
                height: `${contentHeight}px`,
              }}
            >
              <div
                className="p-4 text-light_color"
                ref={(ref) => (contentRefs.current[index] = ref)}
              >
                {description && (
                  <h4 className="pb-4 text-base sm:text-lg">{description}</h4>
                )}
                {item?.length > 1 ? (
                  <ul className="flex flex-col gap-3 sm:gap-2">
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
                  item?.[0]?.item && (
                    <p className="text-sm sm:text-base">{item[0].item}</p>
                  )
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

Accordion.propTypes = {
  sliced: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      item: PropTypes.arrayOf(
        PropTypes.shape({
          item: PropTypes.string,
        })
      ),
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
  background: PropTypes.string,
};
