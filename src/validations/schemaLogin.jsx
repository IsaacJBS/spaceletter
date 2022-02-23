import * as yup from 'yup';

const schemaLogin = yup.object().shape({
    email: yup.string().required('Por favor, insira um e-mail').email('Por favor, insira um @ no e-mail'),
    password: yup.string().required("Por favor, insira uma senha").min(8, "A senha precisa ter 8 caracteres")
})

export default schemaLogin;