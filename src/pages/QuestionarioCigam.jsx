import PropTypes from "prop-types";
import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import HeaderApp from "../components/Header";
import Botoes from "../components/Botoes";
import HeroApp from "../components/Hero";
import FramerMotion from "../components/FramerMotion";
import FooterApp from "../components/Footer";
import fundo from "../assets/image/Cigam.png";
import { GlobalContext } from "../context/GlobalContextProvider";

export default function QuestionarioCigam() {
  const { moneyConverter } = useContext(GlobalContext);
  const navigate = useNavigate();

  const initialValues = {
    usuarios: "",
    salario_medio: "",
    implementacao: "",
  };

  const [values, setValues] = useState(initialValues);
  const [submittedValues, setSubmittedValues] = useState(null);

  const result = useMemo(
    () =>
      (Number(values.usuarios) * Number(values.salario_medio)) /
      Number(values.implementacao),
    [values]
  );

  const isValidValue = (val) =>
    isNaN(val) || !isFinite(val) ? "" : moneyConverter(val);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [id]: value === "" ? "" : +value,
    }));
  };

  const handleSumbitValues = (e) => {
    e.preventDefault();
    setSubmittedValues({ ...values, result });
    setValues(initialValues);
  };

  return (
    <>
      <HeaderApp>
        <Botoes onClick={() => navigate(-1)} className="btnVoltar">
          <IoArrowBackCircleOutline className="icon" />
        </Botoes>
      </HeaderApp>
      <HeroApp fundo={fundo}>
        <FramerMotion>
          <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>

          <form className="form" onSubmit={handleSumbitValues}>
            <label htmlFor="usuarios" className="input-label">
              Usuários:
              <input
                className="input-element"
                type="number"
                name="usuarios"
                id="usuarios"
                placeholder="Número de usuários"
                autoComplete="off"
                onChange={handleChange}
                value={values.usuarios}
              />
            </label>

            <label htmlFor="salario_medio" className="input-label">
              Salário médio:
              <input
                className="input-element"
                type="number"
                name="salario_medio"
                id="salario_medio"
                placeholder="Salário médio do colaborador"
                autoComplete="off"
                onChange={handleChange}
                value={values.salario_medio}
              />
            </label>

            <label htmlFor="situacao_atual" className="input-label">
              Situação atual
              <select
                className="input-element"
                name="situacao_atual"
                id="situacao_atual"
                defaultValue=""
                onChange={() => {}}
              >
                <option value="" disabled>
                  Situação atual da empresa
                </option>
                <option value="Boa">Boa</option>
                <option value="Excelente">Excelente</option>
                <option value="Muito boa">Muito boa</option>
                <option value="Muito ruim">Muito ruim</option>
              </select>
            </label>

            <label htmlFor="implementacao" className="input-label">
              Implementacao:
              <input
                className="input-element"
                type="number"
                name="implementacao"
                id="implementacao"
                placeholder="Valor de implementacao"
                autoComplete="off"
                onChange={handleChange}
                value={values.implementacao}
              />
            </label>

            <label htmlFor="roi_mensal" className="input-label">
              ROI mensal:
              <input
                className="input-element"
                type="text"
                name="roi_mensal"
                id="roi_mensal"
                placeholder="R$0,00"
                value={isValidValue(result)}
                readOnly
              />
            </label>

            <label htmlFor="roi_anual" className="input-label">
              ROI anual - GP:
              <input
                className="input-element"
                type="text"
                name="roi_anual"
                id="roi_anual"
                placeholder="R$0,00"
                value={isValidValue(result)}
                readOnly
              />
            </label>

            <label htmlFor="folha_pagamento" className="input-label">
              Folha de pagamento(apenas usuários):
              <input
                className="input-element"
                type="text"
                name="folha_pagamento"
                id="folha_pagamento"
                placeholder="R$0,00"
                value={isValidValue(result)}
                readOnly
              />
            </label>

            <label htmlFor="salario_hora" className="input-label">
              Salário/Hora:
              <input
                className="input-element"
                type="text"
                name="salario_hora"
                id="salario_hora"
                placeholder="R$0,00"
                value={isValidValue(result)}
                readOnly
              />
            </label>
            <br />

            <Botoes
              onClick={() => navigate("/resultado-cigam")}
              type="submit"
              className="opcoes"
            >
              Calcular
            </Botoes>
          </form>

          {/* Display submitted values */}
          {submittedValues && (
            <div style={{ marginTop: "60px" }}>
              <h2>Resultado: {submittedValues.result}</h2>
            </div>
          )}
        </FramerMotion>
      </HeroApp>
      <FooterApp />
    </>
  );
}

// export default function QuestionarioCigam() {

//   const [values, setValues] = useState({
//     usuarios: "",
//     colaborador: "",
//     implementacao: "",
//     roi_mensal: "",
//     roi_anual: "",
//     folha_pagamento: "",
//     salario_hora: "",
//   });

//   const inputFields = useMemo(
//     () => [
//       {
//         title: "Usuários:",
//         name: "usuarios",
//         placeholder: "Número de usuários",
//       },
//       {
//         title: "Salário médio:",
//         name: "colaborador",
//         placeholder: "Salário médio do colaborador",
//       },
//       {
//         title: "Implementação:",
//         name: "implementacao",
//         placeholder: "Valor da implementação",
//       },
//       {
//         title: "ROI mensal:",
//         name: "roi_mensal",
//         placeholder: "R$ 0,00",
//       },
//       {
//         title: "ROI anual - GP:",
//         name: "roi_anual",
//         placeholder: "R$ 0,00",
//       },
//       {
//         title: "Folha de pagamento (apenas usuários):",
//         name: "folha_pagamento",
//         placeholder: "R$ 0,00",
//       },
//       {
//         title: "Salário/Hora:",
//         name: "salario_hora",
//         placeholder: "R$ 0,00",
//       },
//     ],
//     []
//   );

//   const handleChange = (event) => {
//     const { id, value } = event.target;
//   };

//   const handleSumitData = () => {};

//   return (
//     <>
//       <HeaderApp>
//         <Botoes onClick={() => navigate(-1)} className="btnVoltar">
//           <IoArrowBackCircleOutline className="icon" />
//         </Botoes>
//       </HeaderApp>
//       <HeroApp fundo={fundo}>
//         <FramerMotion>
//           <h1 className="title">Faça uma pesquisa sobre sua empresa</h1>

//           <form className="form">
//             {inputFields.map((field, index) => {
//               if (index === 2) {
//                 return (
//                   <QuestionatioSelect
//                     key={field.name}
//                     title={field.title}
//                     name={field.name}
//                     placeholder={field.placeholder}
//                     onChange={handleChange}
//                   />
//                 );
//               }
//               return (
//                 <QuestionarioInput
//                   key={field.name}
//                   title={field.title}
//                   name={field.name}
//                   placeholder={field.placeholder}
//                   onChange={handleChange}
//                   value={field.value}
//                 />
//               );
//             })}

//             <Botoes onClick={() => handleSumitData()} className="opcoes">
//               Calcular
//             </Botoes>
//           </form>
//         </FramerMotion>
//       </HeroApp>
//       <FooterApp />
//     </>
//   );
// }

// const QuestionarioInput = ({ name, placeholder, title, value, onChange }) => (
//   <label htmlFor={name} className="input-label">
//     {title}
//     <input
//       className="input-element"
//       type="text"
//       name={name}
//       id={name}
//       placeholder={placeholder}
//       autoComplete="off"
//       onChange={onChange}
//       value={value}
//     />
//   </label>
// );

// QuestionarioInput.propTypes = {
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
// };

// const QuestionatioSelect = ({ name, placeholder, title, onChange }) => (
//   <label htmlFor={name} className="input-label">
//     {title}
//     <select
//       className="input-element"
//       name={name}
//       id={name}
//       defaultValue=""
//       onChange={onChange}
//     >
//       <option value="" disabled>
//         {placeholder}
//       </option>
//       <option value="Boa">Boa</option>
//       <option value="Excelente">Excelente</option>
//       <option value="Muito boa">Muito boa</option>
//       <option value="Muito ruim">Muito ruim</option>
//     </select>
//   </label>
// );

// QuestionatioSelect.propTypes = {
//   name: PropTypes.string.isRequired,
//   placeholder: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
