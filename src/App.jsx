import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import useIdleRedirect from "./hooks/useIdleRedirect";
import StayOnTop from "./components/StayOnTop";

// DASHBOARDS
import {
  DashboardFinanceiro,
  DashboardGestaoEstoque,
  DashboardRH,
  DashboardTributario,
  DashboardContabilidade,
  Dashboard,
} from "./pages/dashboards";
// SIMULAÇÕES
import {
  QuestionarioCigam,
  QuestionarioRH,
  QuestionarioTributario,
  QuestionarioEmpresarial,
  QuestionarioHolding,
} from "./pages/simulacoes";
// RESULTADOS
import {
  ResultadoCigam,
  ResultadoRH,
  ResultadoTributario,
  ResultadoEmpresarial,
  ResultadoHolding,
} from "./pages/resultados";
// PÁGINAS COMUNS
import {
  Home,
  Cigam,
  ConsultoriaEmpresarial,
  ConsultoriaRH,
  Contabilidade,
  Cursos,
  Holding,
  ModulosCigam,
  Servicos,
  Tributario,
  Treinamentos,
  NotFound,
} from "./pages/comum";

function App() {
  const RedirectHomepage = () => useIdleRedirect("/");
  return (
    <AnimatePresence>
      <Router>
        <StayOnTop />
        {/* <RedirectHomepage /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/BI" element={<Dashboard />} />
          <Route path="/tributario" element={<Tributario />} />
          <Route path="/contabilidade" element={<Contabilidade />} />
          <Route path="/consultoriaRH" element={<ConsultoriaRH />} />
          <Route path="/cigam" element={<Cigam />} />
          <Route
            path="/consultoria-empresarial"
            element={<ConsultoriaEmpresarial />}
          />
          <Route path="/holding" element={<Holding />} />
          <Route path="/treinamentos" element={<Treinamentos />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/modulos-cigam" element={<ModulosCigam />} />
          <Route
            path="/dashboard-contabilidade"
            element={<DashboardContabilidade />}
          />
          <Route
            path="/dashboard-financeiro"
            element={<DashboardFinanceiro />}
          />
          <Route path="/dashboard-rh" element={<DashboardRH />} />
          <Route
            path="/dashboard-gestao-estoque"
            element={<DashboardGestaoEstoque />}
          />
          <Route
            path="/dashboard-tributario"
            element={<DashboardTributario />}
          />

          <Route path="/questionario-rh" element={<QuestionarioRH />} />
          <Route path="/resultado-rh" element={<ResultadoRH />} />
          <Route path="/questionario-cigam" element={<QuestionarioCigam />} />
          <Route path="/resultado-cigam" element={<ResultadoCigam />} />
          <Route
            path="/questionario-tributario"
            element={<QuestionarioTributario />}
          />
          <Route
            path="/resultado-tributario"
            element={<ResultadoTributario />}
          />
          <Route
            path="/questionario-empresarial"
            element={<QuestionarioEmpresarial />}
          />
          <Route
            path="/resultado-empresarial"
            element={<ResultadoEmpresarial />}
          />

          <Route
            path="/questionario-holding"
            element={<QuestionarioHolding />}
          />
          <Route path="/resultado-holding" element={<ResultadoHolding />} />

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
