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
import NotFound from "./pages/NotFound";
import Questionario from "./pages/Questionario";
import RespostaQuestionario from "./pages/RespostaQuestionario";
import StayOnTop from "./components/StayOnTop";

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
          <Route path="/questionario-rh" element={<Questionario />} />

          <Route
            path="/resposta-questionario"
            element={<RespostaQuestionario />}
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </Router>
    </AnimatePresence>
  );
}

export default App;
