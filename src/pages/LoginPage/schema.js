
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string("Informe o e-mail").email("E-mail inválido").required(
    'Informe o e-mail'
  ),
  password: Yup.string().required(
    'Informe a senha'
  ),
})
export default schema;