import PropTypes from "prop-types";
import useScrollEvent from "../../hooks/useScrollEvent";

export default function MainPageTitle({ title }) {
  const { isScrolling } = useScrollEvent();

  return (
    <h1
      className={`${
        isScrolling ? "text-[1.2rem]" : "sm:text-[1.8rem] text-[1.5rem]"
      } font-gilroyLight text-light_color text-center pb-2 
      trasition-[font-size] duration-200 ease-in-out`}
    >
      {title}
    </h1>
  );
}

MainPageTitle.propTypes = {
  title: PropTypes.string,
};
