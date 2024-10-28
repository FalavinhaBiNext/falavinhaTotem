import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import Servicos from "./pages/Servicos";
import DashContabilidade from "./pages/DashboardContabilidade";
import Tributario from "./pages/Tributario";
import Contabilidade from "./pages/Contabilidade";
import ConsultoriaRH from "./pages/ConsultoriaRH";
import Cigam from "./pages/Cigam";
import Dashboard from "./pages/Dashboard";
import DashboardFinanceiro from "./pages/Dashboard_Financeiro";
import ConsultoriaEmpresarial from "./pages/ConsultoriaEmpresarial";
import Testes from "./pages/teste";
import { AnimatePresence } from "framer-motion";
// páginas simulações
import QuestionarioRH from "./pages/simulacoes/QuestionarioRH";
import QuestionarioCigam from "./pages/simulacoes/QuestionarioCigam";
import QuestionarioTributario from "./pages/simulacoes/QuestionarioTributario";
// páginas resultados
import ResultadoRH from "./pages/resultados/ResultadoRH";
import StayOnTop from "./components/StayOnTop";
import ResultadoCigam from "./pages/resultados/ResultadoCigam";
import NotFound from "./pages/NotFound";
import ResultadoTributario from "./pages/resultados/ResultadoTributario";

function App() {
  return (
    <AnimatePresence>
      <Router>
        <StayOnTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
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
          <Route
            path="/dashboard-contabilidade"
            element={<DashContabilidade />}
          />
          <Route
            path="/dashboard-financeiro"
            element={<DashboardFinanceiro />}
          />
          <Route path="/teste" element={<Testes />} />
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

          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
