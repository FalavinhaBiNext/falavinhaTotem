// Máscara para telefone
export const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, "");
  value = value.replace(/(\d{2})(\d)/, "($1) $2");
  value = value.replace(/(\d)(\d{4})$/, "$1-$2");
  return value;
};

// conversão de moeda 
export const moneyConverter = (number) => {
  const options = {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 3,
  };
  return new Intl.NumberFormat("pt-BR", options).format(number);
};


// Formatação de números
export const numberFormatter = (value) =>
  value && value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")


// validação de email do formulário 
import * as Yup from "yup";
const requiredField = "Campo obrigatório!";
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const validationSchema = Yup.object().shape({
  nome: Yup.string()
    .min(5, "Nome muito curto")
    .max(30, "Nome muito longo")
    .required(requiredField),
  telefone: Yup.string().required(requiredField).min(14, "Telefone inválido"),
  email: Yup.string()
    .email("Email inválido")
    .matches(regex, "Email incompleto!")
    .required(requiredField),
});