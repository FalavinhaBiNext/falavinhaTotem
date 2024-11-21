import PropTypes from "prop-types";
import MainButton from "./MainButton";

export default function PaginationButtons({
  page,
  end,
  nextPage,
  prevPage,
  data,
}) {
  return (
    <div className="flex flex-col-reverse justify-center mt-10 sm:flex-row gap-x-6 gap-y-4">
      {page > 0 && (
        <MainButton
          onClick={prevPage}
          className={"md:max-w-[470px] max-w-none"}
        >
          &#x2190; Anterior
        </MainButton>
      )}
      {end < data?.length && (
        <MainButton
          onClick={nextPage}
          className={"md:max-w-[470px] max-w-none"}
        >
          Próximo &#x2192;
        </MainButton>
      )}
    </div>
  );
}

PaginationButtons.propTypes = {
  page: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
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
};
