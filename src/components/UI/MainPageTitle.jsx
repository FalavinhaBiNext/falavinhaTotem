import PropTypes from "prop-types";
import useScrollEvent from "../../hooks/useScrollEvent";

export default function MainPageTitle({ title, image }) {
  const { isScrolling } = useScrollEvent();

  return !image ? (
    <h1
      className={`${
        isScrolling ? "text-[1.2rem]" : "sm:text-[1.8rem] text-[1.5rem]"
      } font-gilroyLight text-light_color text-center pb-2 
      trasition-[font-size] duration-200 ease-in-out`}
    >
      {title}
    </h1>
  ) : (
    <figure
      className={`${
        isScrolling ? "w-[160px] sm:w-[230px]" : "w-[220px] sm:w-[350px]"
      }  trasition-[width] duration-200 ease-in-out mx-auto pb-2`}
    >
      <img src={image} alt="CIGAM" />
    </figure>
  );
}

MainPageTitle.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};
