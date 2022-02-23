import * as yup from 'yup';

const schemaPanel = yup.object().shape({
    title: yup.string().required('Por favor, insira um título'),
    text: yup.string().required("Por favor, insira um texto")
})

export default schemaPanel;