
import * as Yup from 'yup';

const schema = Yup.object().shape({
  email: Yup.string("Informe o e-mail").email("E-mail inválido").required(
    'Informe o e-mail'
  ),
  password: Yup.string().required(
    'Informe a senha'
  ),
}).test({
    message:"",
    test:(data)=>{
        console.log("message: ",data)
    }
})
export default schema;