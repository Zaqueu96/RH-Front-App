import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string("Informe o e-mail")
    .email("E-mail inválido")
    .required("Informe o e-mail"),
  nome: Yup.string().required("Informe o nome"),
  idade: Yup.number("Informe em número")
    .positive("Não são permitidos nùmeros abaixo de zero")
    .required("Informe a idade")
    .typeError("Informe um número"),
  linkedin: Yup.string().required("Informe o linkedin"),
});
export default schema;
