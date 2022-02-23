import * as yup from 'yup';

const schemaEmail = yup.object().shape({
    email: yup.string().required('Por favor, insira um e-mail').email('Por favor, insira um @ no e-mail')
})

export default schemaEmail;