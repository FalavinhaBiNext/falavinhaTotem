import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import useIdleRedirect from "./hooks/useIdleRedirect";
import Loader from "./components/UI/Loader";
import UseKeepOnTop from "./hooks/useKeepOnTop";

// PÁGINAS DASHBOARD
const DashboardContabilidade = lazy(() =>
  import("./pages/dashboards/DashboardContabilidade")
);
const DashboardFinanceiro = lazy(() =>
  import("./pages/dashboards/DashboardFinanceiro")
);
const DashboardRH = lazy(() => import("./pages/dashboards/DashboardRH"));
const DashboardGestaoEstoque = lazy(() =>
  import("./pages/dashboards/DashboardGestaoEstoque")
);
const DashboardTributario = lazy(() =>
  import("./pages/dashboards/DashboardTributario")
);

// PÁGINAS DE SIMULÇÕES
const QuestionarioRH = lazy(() => import("./pages/simulacoes/QuestionarioRH"));
const QuestionarioCigam = lazy(() =>
  import("./pages/simulacoes/QuestionarioCigam")
);
const QuestionarioTributario = lazy(() =>
  import("./pages/simulacoes/QuestionarioTributario")
);
const QuestionarioEmpresarial = lazy(() =>
  import("./pages/simulacoes/QuestionarioEmpresarial")
);
const QuestionarioHolding = lazy(() =>
  import("./pages/simulacoes/QuestionarioHolding")
);

// PÁGINAS DE RESULTADOS DAS SIMULAÇÕES
const ResultadoRH = lazy(() => import("./pages/resultados/ResultadoRH"));
const ResultadoCigam = lazy(() => import("./pages/resultados/ResultadoCigam"));
const ResultadoTributario = lazy(() =>
  import("./pages/resultados/ResultadoTributario")
);
const ResultadoEmpresarial = lazy(() =>
  import("./pages/resultados/ResultadoEmpresarial")
);
const ResultadoHolding = lazy(() =>
  import("./pages/resultados/ResultadoHolding")
);

// PÁGINAS COMUNS
const Home = lazy(() => import("./pages/comum/Home"));
const Servicos = lazy(() => import("./pages/comum/Servicos"));
const DashboardBI = lazy(() => import("./pages/dashboards/DashboardBI"));
const Tributario = lazy(() => import("./pages/comum/Tributario"));
const Contabilidade = lazy(() => import("./pages/comum/Contabilidade"));
const ConsultoriaRH = lazy(() => import("./pages/comum/ConsultoriaRH"));
const Cigam = lazy(() => import("./pages/comum/Cigam"));
const ConsultoriaEmpresarial = lazy(() =>
  import("./pages/comum/ConsultoriaEmpresarial")
);
const Holding = lazy(() => import("./pages/comum/Holding"));
const Treinamentos = lazy(() => import("./pages/comum/Treinamentos"));
const Cursos = lazy(() => import("./pages/comum/Cursos"));
const ModulosCigam = lazy(() => import("./pages/comum/ModulosCigam"));
const NotFound = lazy(() => import("./pages/comum/NotFound"));

function App() {
  // const RedirectHomepage = () => useIdleRedirect("/");
  return (
    <AnimatePresence>
      <Router>
        <UseKeepOnTop />
        {/* <RedirectHomepage /> */}
        <Suspense fallback={<Loader />}>
          <Routes>
            {[
              { path: "/", element: <Home /> },
              { path: "/servicos", element: <Servicos /> },
              { path: "/business-intelligence", element: <DashboardBI /> },
              { path: "/tributario", element: <Tributario /> },
              { path: "/contabilidade", element: <Contabilidade /> },
              { path: "/consultoriaRH", element: <ConsultoriaRH /> },
              { path: "/cigam", element: <Cigam /> },
              {
                path: "/consultoria-empresarial",
                element: <ConsultoriaEmpresarial />,
              },
              { path: "/holding", element: <Holding /> },
              { path: "/treinamentos", element: <Treinamentos /> },
              { path: "/cursos", element: <Cursos /> },
              { path: "/modulos-cigam", element: <ModulosCigam /> },
              {
                path: "/dashboard-contabilidade",
                element: <DashboardContabilidade />,
              },
              {
                path: "/dashboard-financeiro",
                element: <DashboardFinanceiro />,
              },
              { path: "/dashboard-rh", element: <DashboardRH /> },
              {
                path: "/dashboard-gestao-estoque",
                element: <DashboardGestaoEstoque />,
              },
              {
                path: "/dashboard-tributario",
                element: <DashboardTributario />,
              },
              { path: "/questionario-rh", element: <QuestionarioRH /> },
              { path: "/resultado-rh", element: <ResultadoRH /> },
              { path: "/questionario-cigam", element: <QuestionarioCigam /> },
              { path: "/resultado-cigam", element: <ResultadoCigam /> },
              {
                path: "/questionario-tributario",
                element: <QuestionarioTributario />,
              },
              {
                path: "/resultado-tributario",
                element: <ResultadoTributario />,
              },
              {
                path: "/questionario-empresarial",
                element: <QuestionarioEmpresarial />,
              },
              {
                path: "/resultado-empresarial",
                element: <ResultadoEmpresarial />,
              },
              {
                path: "/questionario-holding",
                element: <QuestionarioHolding />,
              },
              { path: "/resultado-holding", element: <ResultadoHolding /> },
              { path: "*", element: <NotFound /> },
            ].map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </Router>
    </AnimatePresence>
  );
}

export default App;
