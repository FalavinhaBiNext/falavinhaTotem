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