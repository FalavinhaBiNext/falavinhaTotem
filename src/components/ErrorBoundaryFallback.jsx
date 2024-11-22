import PropTypes from "prop-types";
import MainButton from "./UI/MainButton";

export default function ErrorBoundaryFallback({ resetErrorBoundary }) {
  const handleReload = () => {
    if (resetErrorBoundary) {
      resetErrorBoundary();
    } else {
      window.location.reload();
    }
  };

  return (
    <main
      className="flex flex-col items-center justify-center h-screen w-screen bg-[#009499]
     py-[50px] px-5
    "
      role="alert"
    >
      <h1 className="text-red-600 text-2xl font-bold tracking-[1px] pb-8">
        Erro ao carregar a página!
      </h1>
      <MainButton onClick={handleReload} type="button" className="w-max">
        Tente novamente
      </MainButton>
    </main>
  );
}

ErrorBoundaryFallback.propTypes = {
  resetErrorBoundary: PropTypes.func,
};
