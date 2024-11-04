import PropTypes from "prop-types";
import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContextProvider";
import { numberFormatter } from "../../utils";
import HeaderApp from "../../components/Header";
import HeroApp from "../../components/Hero";
import FramerMotion from "../../components/FramerMotion";
import FooterApp from "../../components/Footer";
import Formulario from "../../components/Formulario";
import Botoes from "../../components/Botoes";
import QuestionarioTributarioState from "../../states/QuestionarioTributarioState";
import fundo from "../../assets/image/FundoTributario.png";

const selectAtividades = [
  { value: 1, label: "Comércio" },
  { value: 2, label: "Indústria" },
  { value: 3, label: "Serviços" },
  { value: 4, label: "Construção Civil" },
  { value: 5, label: "Importadora" },
  { value: 6, label: "Restaurante" },
  { value: 7, label: "Auto-peças" },
  { value: 8, label: "Posto de combustíveis" },
  { value: 9, label: "Farmácias" },
];

export default function QuestionarioTributario() {
  const { hasEmptyInputs, setResultadoTributario } = useContext(GlobalContext);

  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  const {
    taxValues,
    setTaxValues,
    exclusao_icms,
    exclusao_pis,
    taxa_siscomex,
    exclusao_iss,
    conceito_insumos,
    afastamento_verbas,
    inss_terceiros,
    reintegracao,
    lei_do_bem,
    capital_proprio,
    deducao_irpj,
    creditos_simples1,
    creditos_simples2,
    incidencia_icms,
    tributacao,
  } = QuestionarioTributarioState();
  const navigate = useNavigate();
  const [importacoes, setImportacoes] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    const numericValue = value.replace(/[^0-9]/g, "");
    setTaxValues((prevValues) => ({
      ...prevValues,
      [id]: numericValue,
    }));
  };
  const handleSubmitValues = () => {
    setResultadoTributario({
      exclusao_icms,
      exclusao_pis,
      taxa_siscomex,
      exclusao_iss,
      conceito_insumos,
      afastamento_verbas,
      inss_terceiros,
      reintegracao,
      lei_do_bem,
      capital_proprio,
      deducao_irpj,
      creditos_simples1,
      creditos_simples2,
      incidencia_icms,
      tributacao,
      atividades: taxValues.atividade,
      importacoes: parseInt(taxValues.importacoes_anuais, 10) || null,
    });
    navigate("/resultado-tributario");
  };

  const emptyValueFields =
    !taxValues.tributacao ||
    !taxValues.atividade ||
    !taxValues.faturamento_mensal;

  return (
    <>
      <HeaderApp redirect={"/servicos"}>
        <h1 className="title">Questionário Tributario</h1>
      </HeaderApp>
      <HeroApp fundo={fundo}>
        <FramerMotion>
          <Formulario setIsFormVisible={setIsFormVisible} />

          <form
            className="form"
            onSubmit={handleSubmitValues}
            style={{ marginBottom: "60px", marginTop: "10px", padding: "15px" }}
          >
            <div className="page-tributario_paginacao">
              <div style={{ width: 100 }}>
                {!show && <button onClick={handleShow}>Anterior</button>}
              </div>
              <div className="page-tributario_paginacao_item">
                <p
                  style={{
                    border: show == true ? "1px solid white" : "none",
                    fontWeight: show == true ? "bold" : "normal",
                  }}
                >
                  1
                </p>
                <p
                  style={{
                    border: show != true ? "1px solid white" : "none",
                    fontWeight: show != true ? "bold" : "normal",
                  }}
                >
                  2
                </p>
              </div>
              <div style={{ width: 100 }}>
                {show && <button onClick={handleShow}>Proximo</button>}
              </div>
            </div>

            {show && (
              <div>
                <label
                  htmlFor="tributacao"
                  className="input-label input-label__select"
                >
                  <span>Tributação: (Obrigatório)</span>
                  <select
                    className="input-element"
                    name="tributacao"
                    id="tributacao"
                    value={taxValues.tributacao}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Selecione o Tipo de Tributação
                    </option>
                    <option value={1}>Lucro real</option>
                    <option value={2}>Lucro presumido</option>
                    <option value={0}>Simples</option>
                  </select>
                </label>

                <label
                  htmlFor="atividade"
                  className="input-label input-label__select"
                >
                  <span>Atividade: (Obrigatório)</span>
                  <select
                    className="input-element"
                    name="atividade"
                    id="atividade"
                    value={taxValues.atividade}
                    onChange={handleChange}
                  >
                    <option value={""} disabled>
                      Selecione Uma Atividade
                    </option>
                    {selectAtividades.map((item) => (
                      <option value={item.value} key={item.value}>
                        {item.label}
                      </option>
                    ))}
                  </select>
                </label>

                <TextInput
                  title="Faturamento Mensal: (Obrigatório)"
                  nome="faturamento_mensal"
                  value={
                    taxValues.faturamento_mensal &&
                    `R$ ${numberFormatter(taxValues.faturamento_mensal)}`
                  }
                  onChange={handleChange}
                  type="number"
                  placeholder="Digite seu Faturamento Mensal Aproximado"
                />

                <TextInput
                  title="Número de Funcionários:"
                  nome="num_funcionarios"
                  value={numberFormatter(taxValues.num_funcionarios)}
                  onChange={handleChange}
                  type="number"
                  placeholder="Digite a Quantidade de Funcionários"
                />
                <TextInput
                  title="Valor da Folha de Pagamento:"
                  nome="folha_pagamento"
                  value={
                    taxValues.folha_pagamento &&
                    `R$ ${numberFormatter(taxValues.folha_pagamento)}`
                  }
                  onChange={handleChange}
                  type="number"
                  placeholder="Digite o Valor Aproximado da Folha de Pagamento"
                />
              </div>
            )}

            {!show && (
              <div>
                <TextInput
                  title="Média das Despesas Anual: (Opcional)"
                  nome="dispesa_anual"
                  type="number"
                  value={
                    taxValues.dispesa_anual &&
                    `R$ ${numberFormatter(taxValues.dispesa_anual)}`
                  }
                  onChange={handleChange}
                  placeholder="Digite um Valor Aproximado"
                />
                <TextInput
                  title="Patrimônio Líquido:"
                  nome="patrimonio_liquido"
                  type="number"
                  value={
                    taxValues.patrimonio_liquido &&
                    `R$ ${numberFormatter(taxValues.patrimonio_liquido)}`
                  }
                  onChange={handleChange}
                  placeholder="Digite um Valor Aproximado"
                />
                <TextInput
                  title="Lucro da empresa:"
                  nome="lucro_empresa"
                  type="number"
                  value={
                    taxValues.lucro_empresa &&
                    `R$ ${numberFormatter(taxValues.lucro_empresa)}`
                  }
                  onChange={handleChange}
                  placeholder="Digite um valor (Opcional)"
                />
                <TextInput
                  title="Gastos com Inovação e Tecnologia: (Opcional)"
                  nome="gastos_inovacao"
                  type="number"
                  value={
                    taxValues.gastos_inovacao &&
                    `R$ ${numberFormatter(taxValues.gastos_inovacao)}`
                  }
                  onChange={handleChange}
                  placeholder="Digite um Valor Aproximado"
                />
                <label
                  htmlFor="importacoes"
                  className="input-label input-label__select"
                >
                  <span>Se importa ou exporta:</span>
                  <select
                    className="input-element"
                    name="importacoes"
                    id="importacoes"
                    value={importacoes}
                    onChange={(e) => setImportacoes(e.target.value === "true")}
                  >
                    <option value={false}>Selecione (Opcional)</option>
                    <option value={true}>Sim</option>
                    <option value={false}>Não</option>
                  </select>
                </label>
                {importacoes && (
                  <div>
                    <TextInput
                      title="Média de Importações por Ano: (Opcional)"
                      nome="importacoes_anuais"
                      value={
                        taxValues.importacoes_anuais &&
                        `R$ ${numberFormatter(taxValues.importacoes_anuais)}`
                      }
                      onChange={handleChange}
                      type="number"
                      placeholder="Digite um Valor Aproximado em Importações"
                    />
                    <TextInput
                      title="Média de Exportações por Ano: (Opcional)"
                      nome="exportacoes_anuais"
                      value={
                        taxValues.exportacoes_anuais &&
                        `R$ ${numberFormatter(taxValues.exportacoes_anuais)}`
                      }
                      onChange={handleChange}
                      type="number"
                      placeholder="Digite um Valor Aproximado de Exportações"
                    />
                  </div>
                )}
              </div>
            )}
          </form>
        </FramerMotion>
      </HeroApp>

      <FooterApp footerFixed>
        <Botoes
          type="submit"
          className="botao"
          onClick={handleSubmitValues}
          disabled={(isFormVisible && hasEmptyInputs) || emptyValueFields}
        >
          Calcular
        </Botoes>
      </FooterApp>
    </>
  );
}

// COMPONENTE DO INPUT DE TEXTO OU NÚMERO
const TextInput = ({ title, nome, value, onChange, placeholder, disabled }) => {
  const inputRef = useRef(null);
  useEffect(() => {
    if (disabled && inputRef.current && value) {
      inputRef.current.value = "";
      onChange({ target: { id: nome, value: "" } });
    }
  }, [disabled, nome, onChange, value]);

  return (
    <label htmlFor={nome} className="input-label">
      <span>{title}</span>
      <input
        className="input-element"
        name={nome}
        id={nome}
        placeholder={placeholder}
        autoComplete="off"
        value={value || ""}
        onChange={onChange}
        disabled={disabled}
        ref={inputRef}
      />
    </label>
  );
};

TextInput.propTypes = {
  title: PropTypes.string,
  nome: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};
