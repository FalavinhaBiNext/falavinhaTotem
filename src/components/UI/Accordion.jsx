import { useState, useRef } from "react";

export default function Accordion({ sliced }) {
  const [active, setActive] = useState(null);
  const contentEl = useRef();
  const isActive = (index) => active === index;

  const handleToggle = (index) => {
    setActive(isActive(index) ? null : index);
  };

  return sliced.map(({ name, description, item }, index) => (
    <li
      key={index}
      className="border-b border-[#ddd] rounded-[5px] overflow-hidden shadow-bx-1 min-h-[60px]"
    >
      <div
        className={`flex items-center bg-transparent min-h-[inherit] cursor-pointer p-4 
        ${isActive(index) ? "active bg-[#0f3355]" : ""}`}
        onClick={() => handleToggle(index)}
      >
        <h5 className="text-sm uppercase text-light_color font-gilroyLight sm:text-base">
          {name}
        </h5>
        <span className="ml-auto text-sm transition-all duration-300 ease-in-out text-light_color font-gilroyLight">
          {isActive(index) ? "Fechar" : "Saiba mais"}
        </span>
      </div>
      <div
        className="transition-[height] duration-300 ease-in-out bg-[#1b1f24]"
        style={
          isActive(index)
            ? { height: contentEl?.current?.scrollHeight }
            : { height: "0px" }
        }
        ref={contentEl}
      >
        <div className="p-4 text-light_color">
          <h4 className="pb-4 text-base sm:text-lg">{description}</h4>
          <ul className="flex flex-col gap-2">
            {item.map((item, index) => (
              <li className="text-sm sm:text-base" key={item.item + index}>
                {" "}
                &#x2714; {item.item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  ));
}
